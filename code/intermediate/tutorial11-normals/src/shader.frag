#version 450

layout(location=0) in vec2 v_tex_coords;
layout(location=1) in vec3 v_normal;
layout(location=2) in vec3 v_position;

layout(location=0) out vec4 f_color;

layout(set = 0, binding = 0) uniform texture2D t_diffuse;
layout(set = 0, binding = 1) uniform sampler s_diffuse;
layout(set = 0, binding = 2) uniform texture2D t_normal;
layout(set = 0, binding = 3) uniform sampler s_normal;

layout(set=1, binding=2) 
uniform Lights {
    vec3 u_light;
};

const vec3 ambient_color = vec3(0.0, 0.0, 0.0);
const vec3 specular_color = vec3(1.0, 1.0, 1.0);

const float shininess = 32;

mat3 cotangent_frame(vec3 normal, vec3 pos, vec2 uv) {
    vec3 dp1 = dFdx(pos);
    vec3 dp2 = dFdy(pos);
    vec2 duv1 = dFdx(uv);
    vec2 duv2 = dFdy(uv);

    vec3 dp2perp = cross(dp2, normal);
    vec3 dp1perp = cross(normal, dp1);
    vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
    vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;

    float invmax = inversesqrt(max(dot(T, T), dot(B, B)));
    return mat3(T * invmax, B * invmax, normal);
}

void main() {
    vec3 normal = texture(sampler2D(t_normal, s_normal), v_tex_coords).rgb;
    // Color data comes in the range [0, 1] so need to map it to [-1, 1];
    normal = normalize(normal * 2.0 - 1.0);

    mat3 tbn = cotangent_frame(v_normal, v_position, v_tex_coords);
    vec3 real_normal = normalize(tbn * normal);

    vec4 diffuse_color = texture(sampler2D(t_diffuse, s_diffuse), v_tex_coords);
    float diffuse_term = max(dot(real_normal, normalize(u_light)), 0);

    vec3 camera_dir = normalize(-v_position);

    // This is an aproximation of the actual reflection vector, aka what
    // angle you have to look at the object to be blinded by the light
    vec3 half_direction = normalize(normalize(u_light) + camera_dir);
    float specular_term = pow(max(dot(real_normal, half_direction), 0.0), shininess);

    f_color = vec4(ambient_color, 1.0) + vec4(specular_term * specular_color, 1.0) + diffuse_term * diffuse_color;
    // f_color = vec4(real_normal * 0.5 + 0.5, 1);
    
}