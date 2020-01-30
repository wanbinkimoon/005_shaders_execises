#version 150

out vec4 outputColor;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float PI = 3.1415926535897932384626433;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

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

float rectSDF(vec2 st, vec2 s){
  st = st * 2. - 1.;
  
  return max(abs(st.x/s.x), abs(st.y/s.y));
  //  PUMP
  //  return max(abs(st.x * cos(u_time)/s.x), abs(st.y * cos(u_time)/s.x));
}

float fill(float x, float size){
  return 1. - step(size, x);
}

float crossSDF(vec2 st, float s){
  vec2 size = vec2(.25, s);
  return min(rectSDF(st, size.xy), rectSDF(st, size.yx));
}

void main(){
  vec3 color = vec3(0.);
  vec2 st = gl_FragCoord.xy/u_resolution;
  
  //  float offset = cos(st.y * PI) * .15;
  //  float offset = sin(st.y * u_time) * .15;
  float offset = map(sin(u_time * .5), -1., 1., 1., 12.);
  
  float rect = rectSDF(st, vec2(1.));
  color += fill(rect, .5);
  
  float cross = crossSDF(st, 1.);
  color *= step(.5, fract(cross * offset));
  color *= step(1., cross);
  color += fill(cross, .5);
  color += stroke(rect, .65, .05);
  color += stroke(rect, .75, .025);
  
  outputColor = vec4(color, 1.);
}
