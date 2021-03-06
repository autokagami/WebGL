
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
varying vec4 color;

void main (void)
{
	float c = -color.r;
	gl_FragColor = vec4(exp2(5.0 * c), 0.0, 0.0, 1.0);
}
