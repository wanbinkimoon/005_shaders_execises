#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
  ofSetDataPathRoot("../Resources/data/");
//  shader.load("shaders/02_strenght/shader");
  shader.load("shaders/04_wall/shader");
}

//--------------------------------------------------------------
void ofApp::update(){}

//--------------------------------------------------------------
void ofApp::draw(){
  shader.begin();
  shader.setUniform1f("u_time", ofGetElapsedTimef());
  shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
  ofDrawRectangle(0, 0, ofGetWidth(), ofGetHeight());
  shader.end();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
  if(key == 'f' || key == 'F') ofToggleFullscreen();
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
