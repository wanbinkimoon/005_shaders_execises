#version 150

out vec4 outputColor;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float PI = 3.1415926535897932384626433;

float stroke(float x, float s, float w){
  float d = step(s, x + w * .5) - step(s, x - w * .5);
  return clamp(d, 0., 1.);
}

// c = circle center
// r = is supposed to be 1 / r of the width;

float circleSDF(vec2 st, vec2 c, float radius){
  float r = min(u_resolution.x, u_resolution.y) / radius;
  return length(st - c) * r;
}

float fill(float x, float size){
  return 1. - step(size, x);
}

void main(){
  vec3 color=vec3(0.);
  vec2 st = gl_FragCoord.xy/u_resolution;
  
//  float offset = cos(st.y * PI) * .15;
//  float offset = cos(st.y * u_time) * .15;
  float sdf = .5 + (st.x - st.y) * .5;
  
  color += fill(circleSDF(st, vec2(.5), 400), .65);
  vec2 offset = vec2(.1, .05);
  color -= fill(circleSDF(st - offset, vec2(.5), 400), .5);

  outputColor = vec4(color, 1.);
}
