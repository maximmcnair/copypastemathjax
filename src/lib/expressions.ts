export enum Category {
  Operator = 'Operator',
  Environment = 'Environment',
  GreekLetter = 'GreekLetter',
  // Letter = 'Letter',
  Symbol = 'Symbol',
  // Equation = 'Equation',
  Logic = 'Logic',
  SetTheory = 'SetTheory',
  Relation = 'Relation',
  Calculus = 'Calculus'
  Arrow = 'Arrow',
  BigO = 'BigO',
  Dots = 'Dots',
  Angle = 'Angle',
  Function = 'Function',
  Trigonometric = 'Trigonometric',
}

export interface Expression {
  name: string;
  formula: string;
  search: string;
  tags: Category[];
}

export const expressions: Expression[] = [
  // Use this template to add
  // {
  //   name: "",
  //   formula: ``,
  //   tags: [""],
  // },

  // Operators
  {
    name: "Times",
    formula: `\\times`,
    search: "",
    tags: [Category.Operator],
  },
  {
    name: "Dot",
    formula: `\\cdot`,
    search: "",
    tags: [Category.Operator],
  },
  {
    name: "Division",
    formula: `\\div`,
    search: "",
    tags: [Category.Operator],
  },
  {
    name: "Plus minus",
    formula: `\\pm `,
    search: "",
    tags: [Category.Operator],
  },
  // Relation
  {
    name: "Not equal",
    formula: `\\neq`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Approximately equal",
    formula: `\\approx`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Less than",
    formula: `\\lt`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Less than or equal",
    formula: `\\leq`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Greater than",
    formula: `\\gt`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Greater than or equal",
    formula: `\\geq`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Much less than",
    formula: `\\ll`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Much greater than",
    formula: `\\gg`,
    search: "",
    tags: [Category.Relation],
  },
  {
    name: "Function assignment",
    formula: `\\mathrel{\\mathop:}=`,
    search: "",
    tags: [Category.Relation],
  },

  // Trigonometric
  {
    name: "sin",
    formula: `\\sin \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "cos",
    formula: `\\cos \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "tan",
    formula: `\\tan \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "cot ",
    formula: `\\cot \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "sec ",
    formula: `\\sec \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "csc",
    formula: `\\csc \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "arcsin",
    formula: `\\arcsin \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "arccos",
    formula: `\\arccos \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },
  {
    name: "arctan",
    formula: `\\arctan \\theta`,
    search: "",
    tags: [Category.Function, Category.Trigonometric],
  },

  // Arrows
  {
    name: "left arrow",
    formula: `\\leftarrow, \\longleftarrow, \\Leftarrow, \\Longleftarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "right arrow",
    formula: `\\rightarrow \\longrightarrow, \\Rightarrow, \\Longrightarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "up arrow",
    formula: `\\uparrow, \\Uparrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "down arrow",
    formula: `\\downarrow, \\Downarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "left and right arrow",
    formula: `\\leftrightarrow, \\longleftrightarrow, \\Leftrightarrow, \\Longleftrightarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "Up and down arrow",
    formula: `\\updownarrow, \\Updownarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "maplet arrow / maps to",
    formula: `\\mapsto, \\longmapsto`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "Hook arrow",
    formula: `\\hookletarrow, \\hookrightarrow`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "Harpoon arrows",
    formula: `\\leftharpoonup, \\rightharpoonup, \\leftharpoondown, \\rightharpoondown`,
    search: "",
    tags: [Category.Arrow],
  },
  {
    name: "Ordinal or Intercardinal direction arrows",
    formula: `\\nearrow, \\searrow, \\swarrow, \\nwarrow`,
    search: "",
    tags: [Category.Arrow],
  },


  // Logic
  {
    name: "For all",
    formula: `\\forall`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Exists",
    formula: `\\exists `,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Or ",
    formula: `\\lor `,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "And ",
    formula: `\\land `,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Xor ",
    formula: `\\veebar`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Not ",
    formula: `\\neg`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },

  // Sets
  {
    name: "Proper superset",
    formula: `\\supset `,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Superset ",
    formula: `\\supseteq`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Proper subset",
    formula: `\\subset`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Subset ",
    formula: `\\subseteq`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Member",
    formula: `\\in`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Empty set",
    formula: `\\emptyset`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Set union",
    formula: `\\cup`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Set intersection",
    formula: `\\cap`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Set-builder notation",
    formula: `\\{ x|x \\in \\mathbb{Z} \\land 0 \\leq x \\leq 10 \\}`,
    search: "",
    tags: [Category.SetTheory],
  },
  {
    name: "Natural numbers",
    formula: `\\mathbb{N}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Real numbers",
    formula: `\\mathbb{R}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Integers",
    formula: `\\mathbb{Z}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Rational numbers",
    formula: `\\mathbb{Z}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Complex numbers",
    formula: `\\mathbb{C}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },
  {
    name: "Imaginary numbers",
    formula: `\\mathbb{I}`,
    search: "",
    tags: [Category.Logic, Category.SetTheory],
  },

  // misc
  {
    name: "Repeating decimals",
    formula: `0.\\overline{324}`,
    search: "",
    tags: [""],
  },
  {
    name: "Fraction",
    formula: `\\frac{x}{y}`,
    search: "",
    tags: [""],
  },
  {
    name: "Exponent",
    formula: `a^2, x^y`,
    search: "",
    tags: [""],
  },
  {
    name: "Radical",
    formula: `\\sqrt{9}, \\sqrt[n]{x}`,
    search: "",
    tags: [""],
  },
  {
    name: "Square Root",
    formula: `\\sqrt{25}`,
    search: "",
    tags: [""],
  },
  {
    name: "Logarithm",
    formula: `\\log x, \\log_{2}x`,
    search: "",
    tags: [""],
  },
  {
    name: "Factorial",
    formula: `n!`,
    search: "",
    tags: [""],
  },
  {
    name: "Absolute Value",
    formula: `\\vert{x} \\vert`,
    search: "",
    tags: [""],
  },
  //
  {
    name: "Calligraphic font",
    formula: `\\mathcal{R}, \\mathcal{Z}, \\mathcal{D}`,
    search: "",
    tags: [""],
  },
  {
    name: "Bars over symbols",
    formula: `\\bar{a}, \\bar{b}, \\bar{c}`,
    search: "",
    tags: [""],
  },
  {
    name: "Hats over symbols",
    formula: `\\tilde{a}, \\tilde{b}, \\tilde{c}`,
    search: "Tilde",
    tags: [""],
  },
  {
    name: "Arrows over symbols",
    formula: `\\overrightarrow{a}, \\overrightarrow{b}, \\overrightarrow{c}`,
    search: "",
    tags: [""],
  },
  {
    name: "Dots over symbols",
    formula: `\\dot{a}, \\dot{b}, \\dot{c}`,
    search: "",
    tags: [Category.Dots],
  },
  {
    name: "Spacing between symbols",
    formula: `a\\;b\\;c`,
    search: "",
    tags: [""],
  },
  {
    name: "Nabla (gradient)",
    formula: `\\nabla f(x_0, y_0)`,
    search: "",
    tags: [""],
  },
  {
    name: "Text",
    formula: `\\text{Something}`,
    search: "",
    tags: [""],
  },
  {
    name: "Sums with limits",
    formula: `\\sum\\limits_{i=1}^{n}i^2`,
    search: "",
    tags: [""],
  },
  {
    name: "Products with limits",
    formula: `\\prod\\limits_{i=1}^{n}i^2`,
    search: "",
    tags: [""],
  },
  {
    name: "Integrals with limits",
    formula: `\\int\\limits_{-\\infty}^{\\infty}f(x)\\mathrm{d}\,x`,
    search: "",
    tags: ["Category.Calculus"],
  },
  {
    name: "Partial Derivative",
    formula: `\\frac{\\partial Q}{\\partial t}, \\frac{\\partial^2L}{\\partial x \\partial y}`,
    search: "",
    tags: ["Category.Calculus"],
  },
  {
    name: "Limits",
    formula: `\\lim_{x\\to 0} (1+x)^\\frac{1}{x} = e`,
    search: "",
    tags: [""],
  },
  {
    name: "Max ",
    formula: `\\max(1,2,3)`,
    search: "",
    tags: [""],
  },
  {
    name: "Min ",
    formula: `\\min(3,4,5)`,
    search: "",
    tags: [""],
  },
  // Matrices
  {
    name: "vmatrix",
    formula: `\\begin{vmatrix}
  a & b \\\\
  c & d 
\\end{vmatrix}
`,
    search: "",
    tags: [Category.Environment],
  },
  {
    name: "pmatrix",
    formula: `\\begin{pmatrix}
  a & b \\\\
  c & d 
\\end{pmatrix}
`,
    search: "",
    tags: [Category.Environment],
  },
  {
    name: "bmatrix",
    formula: `\\begin{bmatrix}
  a & b \\\\
  c & d 
\\end{bmatrix}
`,
    search: "",
    tags: [Category.Environment],
  },
  {
    name: "Bmatrix",
    formula: `\\begin{Bmatrix}
  a & b \\\\
  c & d 
\\end{Bmatrix}
`,
    search: "",
    tags: [Category.Environment],
  },
  {
    name: "Vmatrix",
    formula: `\\begin{Vmatrix}
  a & b \\\\
  c & d 
\\end{Vmatrix}
`,
    search: "",
    tags: [Category.Environment],
  },

  // Symbols
  {
    name: "Infinity",
    formula: `\\infty`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "Partial",
    formula: `\\partial`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "star",
    formula: `\\star`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "asterisk",
    formula: `\\ast`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "dagger",
    formula: `\\dag`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "double dagger",
    formula: `\\ddag`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "oplus",
    formula: `\\oplus`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "circ",
    formula: `\\circ`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "bullet",
    formula: `\\bullet`,
    search: "",
    tags: [Category.Symbol],
  },
  {
    name: "copyright",
    formula: `\\copyright`,
    search: "",
    tags: [Category.Symbol],
  },
  // dots
  {
    name: "center dots",
    formula: `1, \\cdots`,
    search: "",
    tags: [Category.Dots],
  },
  {
    name: "diagonal dots",
    formula: `\\ddots`,
    search: "",
    tags: [Category.Dots],
  },
  {
    name: "lower dots",
    formula: `1, \\ldots`,
    search: "",
    tags: [Category.Dots],
  },
  {
    name: "vertical dots",
    formula: `\\vdots`,
    search: "",
    tags: [Category.Dots],
  },
  // angles
  {
    name: "angle",
    formula: `\\angle`,
    search: "",
    tags: [Category.Angle],
  },
  {
    name: "Measured angle ",
    formula: `\\measuredangle`,
    search: "",
    tags: [Category.Angle],
  },
  {
    name: "Spherical angle ",
    formula: `\\sphericalangle`,
    search: "",
    tags: [Category.Angle],
  },
  // Greek Letters
  {
    name: "alpha",
    formula: `\\alpha`,
    search: "greek",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "beta",
    formula: `\\beta `,
    search: "greek",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "gamma",
    formula: `\\gamma `,
    search: "greek",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "delta",
    formula: `\\delta `,
    search: "greek",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "epsilon and varepsilon",
    formula: `\\epsilon, \\varepsilon`,
    search: "greek",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "zeta",
    formula: `\\zeta `,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "eta",
    formula: `\\eta `,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "theta and vartheta",
    formula: `\\theta, \\vartheta`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "iota",
    formula: `\\iota`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "kappa and varkappa",
    formula: `\\kappa, \\varkappa`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "lambda",
    formula: `\\lambda`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "mu",
    formula: `\\mu`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "nu",
    formula: `\\nu`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "xi",
    formula: `\\xi`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "omicron",
    formula: `o`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "pi and varpi",
    formula: `\\pi, \\varpi`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "rho and varrho",
    formula: `\\rho, \\varrho`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "sigma and varsigmna",
    formula: `\\sigma, \\varsigma`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "tau",
    formula: `\\tau`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "upsilon",
    formula: `\\upsilon`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "phi and varphi",
    formula: `\\phi, \\varphi`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "chi",
    formula: `\\chi`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "psi",
    formula: `\\psi`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },
  {
    name: "omega",
    formula: `\\omega`,
    search: "",
    tags: [Category.GreekLetter, Category.Symbol],
  },

  // Big O
  {
    name: "Big O",
    formula: `\\mathcal{O}, O`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Big Omega",
    formula: `\\Omega`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Big Theta",
    formula: `\\Theta`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Small O [micron]",
    formula: `o`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Small Omega",
    formula: `\\omega`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "On the order of",
    formula: `\\sim`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Constant Time",
    formula: `O(1)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Logarithmic Time",
    formula: `O(\\log{}n)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Linear Time",
    formula: `O(n)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Quasilinear Time",
    formula: `O(n\\log{}n)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Quadratic Time",
    formula: `O(n^2)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Cubic Time",
    formula: `O(n^3)`,
    search: "",
    tags: [Category.BigO],
  },
  {
    name: "Factorial Time",
    formula: `O(n!)`,
    search: "",
    tags: [Category.BigO],
  },
];
