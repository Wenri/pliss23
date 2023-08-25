/*=====================================================================*/
/*    serrano/diffusion/talk/pliss23/part1/scm2c/polymorphism.js       */
/*    -------------------------------------------------------------    */
/*    Author      :  Manuel Serrano                                    */
/*    Creation    :  Wed Oct 14 14:24:34 2015                          */
/*    Last change :  Fri Aug 25 10:42:10 2023 (serrano)                */
/*    Copyright   :  2015-23 Manuel Serrano                            */
/*    -------------------------------------------------------------    */
/*    Pliss23, part 1 title                                            */
/*=====================================================================*/
"use hopscript";

/*---------------------------------------------------------------------*/
/*    import/export ...                                                */
/*---------------------------------------------------------------------*/
import * as impress from "hopimpress-0.6.*.hz";
import * as fontifier from "hop:fontifier";
import { MARKDOWN as MD } from "hop:markdown";

/*---------------------------------------------------------------------*/
/*    A slide ...                                                      */
/*---------------------------------------------------------------------*/
export const slide = <impress.slide title="polymorphism" class="md">
   <MD fontifier=${fontifier}>
   ${<div class="center">How to compile <code>(lambda (x) x)</code>?</div>}


   * `long id(long x) { return x; }`
   * `void *id(void *x) { return x; }`
   * `#define id(x) x`

   ${<div class="center" step="4">Code alone is not enough</div>}
</MD>   
</impress.slide>

/*---------------------------------------------------------------------*/
/*    style                                                            */
/*---------------------------------------------------------------------*/
slide.css = <style>
.body {
   font-size: 80%;
   transition: 1s all;
}

code {
  font-size: 95%;
}

pre {
   font-size: 50%;
}

p {
   margin: 0;
}

.center {
   font-weight: bold;
   color: var(--greydark);
   font-size: 110%;
   margin-bottom: 1ex;
}

div.head {
   text-decoration: underline;
   margin-left: 0.5em;
   color: var(--grey);
   font-weight: bold;
   font-size: 80%;
   margin-bottom: 1ex;
}

strong {
   font-style: normal;
   color: var(--red);
}

em {
   font-style: normal;
   color: var(--greydark);
}

ul {
   margin: 1ex;
   list-style: none;
   margin-top: 0;
   font-size: 90%;
}

ul ul {
   margin: 0;
   font-size: 80%;
}

a {
   text-decoration: none;
   color: var(--greydark);
   font-size: 60%;
   font-family: monospace;
}
	       
a:before {
   content: "(";
}

a:after {
   content: ")";
}

code {
   font-family: cmtt;
   color: var(--greyverydark);
}

.fontifier-prog .fontifier-prog-line-comment {
   font-weight: normal;
   color: var(--javascript-color);
   font-style: normal;
}
      
[data-step="0"] li { opacity: 0; }

[data-step="1"] li { opacity: 1;}
[data-step="1"] li + li { opacity: 0; }

[data-step="2"] li { opacity: 1; text-decoration: line-through; }
[data-step="2"] li + li { opacity: 1; text-decoration: none; }
[data-step="2"] li + li + li { opacity: 0; }

[data-step="3"] li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li { opacity: 1; text-decoration: line-through; }
[data-step="3"] li + li + li { opacity: 1; text-decoration: none; }
[data-step="3"] li + li + li + li { opacity: 0; }

[data-step="4"] li { opacity: 1; text-decoration: line-through; }
</style>   
