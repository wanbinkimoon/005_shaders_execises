#version 150

out vec4 outputColor;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float PI = 3.1415926535897932384626433;

void main(){
  vec3 color=vec3(0.);
  vec2 st=gl_FragCoord.xy/u_resolution;
  
  color+=step(.5+cos(st.y * PI) * .25, st.x);
  
  outputColor=vec4(color,1.);
}
