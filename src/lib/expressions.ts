export interface Expression {
  name: string;
  formula: string;
  search: string;
}

export const expressions: Expression[] = [
  // Use this template to add
  // {
  //   name: "",
  //   formula: ``,
  //   search: "",
  // },

  // Operators
  {
    name: "Times",
    formula: `\\times`,
    search: "",
  },
  {
    name: "Dot",
    formula: `\\cdot`,
    search: "",
  },
  {
    name: "Division",
    formula: `\\div`,
    search: "",
  },
  {
    name: "Plus minus",
    formula: `\\pm `,
    search: "",
  },

  // Relation
  {
    name: "Not equal",
    formula: `\\neq`,
    search: "",
  },
  {
    name: "Approximately equal",
    formula: `\\approx`,
    search: "",
  },
  {
    name: "Less than",
    formula: `\\lt`,
    search: "",
  },
  {
    name: "Less than or equal",
    formula: `\\leq`,
    search: "",
  },
  {
    name: "Greater than",
    formula: `\\gt`,
    search: "",
  },
  {
    name: "Greater than or equal",
    formula: `\\geq`,
    search: "",
  },
  {
    name: "Much less than",
    formula: `\\ll`,
    search: "",
  },
  {
    name: "Much greater than",
    formula: `\\gg`,
    search: "",
  },

  // Trigonometric
  {
    name: "sin",
    formula: `\\sin \\theta`,
    search: "",
  },
  {
    name: "cos",
    formula: `\\cos \\theta`,
    search: "",
  },
  {
    name: "tan",
    formula: `\\tan \\theta`,
    search: "",
  },
  {
    name: "cot ",
    formula: `\\cot \\theta`,
    search: "",
  },
  {
    name: "sec ",
    formula: `\\sec \\theta`,
    search: "",
  },
  {
    name: "csc",
    formula: `\\csc \\theta`,
    search: "",
  },
  {
    name: "arcsin",
    formula: `\\arcsin \\theta`,
    search: "",
  },
  {
    name: "arccos",
    formula: `\\arccos \\theta`,
    search: "",
  },
  {
    name: "arctan",
    formula: `\\arctan \\theta`,
    search: "",
  },

  // Logic
  {
    name: "For all",
    formula: `\\forall`,
    search: "",
  },
  {
    name: "Exists",
    formula: `\\exists `,
    search: "",
  },
  {
    name: "Or ",
    formula: `\\lor `,
    search: "",
  },
  {
    name: "And ",
    formula: `\\land `,
    search: "",
  },
  {
    name: "Xor ",
    formula: `\\veebar`,
    search: "",
  },
  {
    name: "Not ",
    formula: `\\neg`,
    search: "",
  },

  // Sets
  {
    name: "Proper superset",
    formula: `\\supset `,
    search: "",
  },
  {
    name: "Superset ",
    formula: `\\supseteq`,
    search: "",
  },
  {
    name: "Proper subset",
    formula: `\\subset`,
    search: "",
  },
  {
    name: "Subset ",
    formula: `\\subseteq`,
    search: "",
  },
  {
    name: "Member",
    formula: `\\in`,
    search: "",
  },
  {
    name: "Empty set",
    formula: `\\emptyset`,
    search: "",
  },
  {
    name: "Set union",
    formula: `\\cup`,
    search: "",
  },
  {
    name: "Set intersection",
    formula: `\\cap`,
    search: "",
  },
  {
    name: "Natural numbers",
    formula: `\\mathbb{N}`,
    search: "",
  },
  {
    name: "Real numbers",
    formula: `\\mathbb{R}`,
    search: "",
  },
  {
    name: "Integers",
    formula: `\\mathbb{Z}`,
    search: "",
  },
  {
    name: "Rational numbers",
    formula: `\\mathbb{Z}`,
    search: "",
  },
  {
    name: "Complex numbers",
    formula: `\\mathbb{C}`,
    search: "",
  },
  {
    name: "Imaginary numbers",
    formula: `\\mathbb{I}`,
    search: "",
  },

  // misc
  {
    name: "Repeating decimals",
    formula: `0.\\overline{324}`,
    search: "",
  },
  {
    name: "Fraction",
    formula: `\\frac{x}{y}`,
    search: "",
  },
  {
    name: "Exponent",
    formula: `a^2, x^y`,
    search: "",
  },
  {
    name: "Radical",
    formula: `\\sqrt{9}, \\sqrt[n]{x}`,
    search: "",
  },
  {
    name: "Square Root",
    formula: `\\sqrt{25}`,
    search: "",
  },
  {
    name: "Logarithm",
    formula: `\\log x, \\log_{2}x`,
    search: "",
  },
  {
    name: "Factorial",
    formula: `n!`,
    search: "",
  },
  {
    name: "Absolute Value",
    formula: `\\vert{x} \\vert`,
    search: "",
  },
  //
  {
    name: "Calligraphic font",
    formula: `\\mathcal{R}, \\mathcal{Z}, \\mathcal{D}`,
    search: "",
  },
  {
    name: "Bars over symbols",
    formula: `\\bar{a}, \\bar{b}, \\bar{c}`,
    search: "",
  },
  {
    name: "Hats over symbols",
    formula: `\\tilde{a}, \\tilde{b}, \\tilde{c}`,
    search: "Tilde",
  },
  {
    name: "Arrows over symbols",
    formula: `\\overrightarrow{a}, \\overrightarrow{b}, \\overrightarrow{c}`,
    search: "",
  },
  {
    name: "Dots over symbols",
    formula: `\\dot{a}, \\dot{b}, \\dot{c}`,
    search: "",
  },
  {
    name: "Spacing between symbols",
    formula: `a\\;b\\;c`,
    search: "",
  },
  {
    name: "Nabla (gradient)",
    formula: `\\nabla f(x_0, y_0)`,
    search: "",
  },
  {
    name: "Text",
    formula: `\\text{Something}`,
    search: "",
  },
  {
    name: "Sums with limits",
    formula: `\\sum\\limits_{i=1}^{n}i^2`,
    search: "",
  },
  {
    name: "Products with limits",
    formula: `\\prod\\limits_{i=1}^{n}i^2`,
    search: "",
  },
  {
    name: "Integrals with limits",
    formula: `\\int\\limits_{-\\infty}^{\\infty}f(x)dx`,
    search: "",
  },
  {
    name: "Limits",
    formula: `\\lim_{x\\to 0} (1+x)^\\frac{1}{x} = e`,
    search: "",
  },
  {
    name: "Max ",
    formula: `\\max(1,2,3)`,
    search: "",
  },
  {
    name: "Min ",
    formula: `\\min(3,4,5)`,
    search: "",
  },
  // arrows
  // {
  //   name: "",
  //   formula: ``,
  //   search: "",
  // },
  // Matrices
  {
    name: "vmatrix",
    formula: `\\begin{vmatrix}
  a & b \\\\
  c & d 
\\end{vmatrix}
`,
    search: "",
  },
  {
    name: "pmatrix",
    formula: `\\begin{pmatrix}
  a & b \\\\
  c & d 
\\end{pmatrix}
`,
    search: "",
  },
  {
    name: "bmatrix",
    formula: `\\begin{bmatrix}
  a & b \\\\
  c & d 
\\end{bmatrix}
`,
    search: "",
  },
  {
    name: "Bmatrix",
    formula: `\\begin{Bmatrix}
  a & b \\\\
  c & d 
\\end{Bmatrix}
`,
    search: "",
  },
  {
    name: "Vmatrix",
    formula: `\\begin{Vmatrix}
  a & b \\\\
  c & d 
\\end{Vmatrix}
`,
    search: "",
  },

  // Symbols
  {
    name: "Infinity",
    formula: `\\infty`,
    search: "",
  },
  {
    name: "Partial",
    formula: `\\partial`,
    search: "",
  },
  {
    name: "star",
    formula: `\\star`,
    search: "",
  },
  {
    name: "asterisk",
    formula: `\\ast`,
    search: "",
  },
  {
    name: "oplus",
    formula: `\\oplus`,
    search: "",
  },
  {
    name: "circ",
    formula: `\\circ`,
    search: "",
  },
  {
    name: "bullet",
    formula: `\\bullet`,
    search: "",
  },
  {
    name: "copyright",
    formula: `\\copyright`,
    search: "",
  },
  // dots
  {
    name: "center dots",
    formula: `1, \\cdots`,
    search: "",
  },
  {
    name: "diagonal dots",
    formula: `\\ddots`,
    search: "",
  },
  {
    name: "lower dots",
    formula: `1, \\ldots`,
    search: "",
  },
  {
    name: "vertical dots",
    formula: `\\vdots`,
    search: "",
  },
  // angles
  {
    name: "angle",
    formula: `\\angle`,
    search: "",
  },
  {
    name: "Measured angle ",
    formula: `\\measuredangle`,
    search: "",
  },
  {
    name: "Spherical angle ",
    formula: `\\sphericalangle`,
    search: "",
  },

  // Greek Letters
  {
    name: "alpha",
    formula: `\\alpha`,
    search: "greek",
  },
  {
    name: "beta",
    formula: `\\beta `,
    search: "greek",
  },
  {
    name: "gamma",
    formula: `\\gamma `,
    search: "greek",
  },
  {
    name: "delta",
    formula: `\\delta `,
    search: "greek",
  },
  {
    name: "epsilon",
    formula: `\\epsilon `,
    search: "greek",
  },
  {
    name: "zeta",
    formula: `\\zeta `,
    search: "",
  },
  {
    name: "eta",
    formula: `\\eta `,
    search: "",
  },
  {
    name: "theta",
    formula: `\\theta`,
    search: "",
  },
  {
    name: "iota",
    formula: `\\iota`,
    search: "",
  },
  {
    name: "kappa",
    formula: `\\kappa`,
    search: "",
  },
  {
    name: "lambda",
    formula: `\\lambda`,
    search: "",
  },
  {
    name: "mu",
    formula: `\\mu`,
    search: "",
  },
  {
    name: "nu",
    formula: `\\nu`,
    search: "",
  },
  {
    name: "xi",
    formula: `\\xi`,
    search: "",
  },
  {
    name: "omicron",
    formula: `o`,
    search: "",
  },
  {
    name: "pi",
    formula: `\\pi`,
    search: "",
  },
  {
    name: "rho",
    formula: `\\rho`,
    search: "",
  },
  {
    name: "sigma",
    formula: `\\sigma`,
    search: "",
  },
  {
    name: "tau",
    formula: `\\tau`,
    search: "",
  },
  {
    name: "upsilon",
    formula: `\\upsilon`,
    search: "",
  },
  {
    name: "phi",
    formula: `\\phi`,
    search: "",
  },
  {
    name: "chi",
    formula: `\\chi`,
    search: "",
  },
  {
    name: "psi",
    formula: `\\psi`,
    search: "",
  },
  {
    name: "omega",
    formula: `\\omega`,
    search: "",
  },
];
