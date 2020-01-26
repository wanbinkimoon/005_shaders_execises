#version 150

out vec4 outputColor;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float stroke(float x, float s, float w){
  float d = step(s, x + w * .5) - step(s, x - w * .5);
  return clamp(d, 0., 1.);
}

void main(){
  vec3 color=vec3(0.);
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  color += stroke(st.x, .5, .1);
  
  outputColor = vec4(color, 1.);
}
