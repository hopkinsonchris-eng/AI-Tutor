/* Pearson Edexcel A level Business (9BS0) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_9BS0 = {
 "id": "EDX-9BS0",
 "board": "Pearson Edexcel",
 "subject": "Business",
 "code": "9BS0",
 "level": "A level",
 "version": "Specification – Issue 1 – September 2014 (cover: First teaching from September 2015; First certification from 2017, Issue 1)",
 "firstExam": 2017,
 "essaySubject": true,
 "components": [
  {
   "id": "P1",
   "name": "Paper 1: Marketing, people and global businesses",
   "paperCode": "9BS0/01",
   "marks": 100,
   "weight": 35,
   "minutes": 120,
   "sections": [
    "Overview of content: \"Paper 1 will assess marketing, people and global businesses. Questions will be drawn from Themes 1 and 4, and from local, national and global contexts.\" (spec.txt p.14)",
    "\"Each question is drawn from topics across Themes 1 and 4, and from one or more of the following contexts: local, national or global.\" (Assessment summary, spec.txt p.45)",
    "Section A: one data response question broken down into a number of parts, including one extended open-response question",
    "Section B: one data response question broken down into a number of parts, including one extended open-response question",
    "\"Students answer all questions from both sections.\"; \"The assessment comprises 2 questions.\"; Duration: 2 hours; 100 marks available; Externally assessed; Availability: May/June; First assessment: May/June 2017"
   ],
   "resourceBooklet": false
  },
  {
   "id": "P2",
   "name": "Paper 2: Business activities, decisions and strategy",
   "paperCode": "9BS0/02",
   "marks": 100,
   "weight": 35,
   "minutes": 120,
   "sections": [
    "Overview of content: \"Paper 2 will assess business finance and operations, business decisions and strategy. Questions will be drawn from Themes 2 and 3, and from local, national and global contexts.\" (spec.txt p.14)",
    "\"Each question is drawn from topics across Themes 2 and 3, and from one or more of the following contexts: local, national or global.\" (Assessment summary, spec.txt p.45)",
    "Section A: one data response question broken down into a number of parts, including one extended open-response question",
    "Section B: one data response question broken down into a number of parts, including one extended open-response question",
    "\"Students answer all questions from both sections.\"; \"The assessment comprises 2 questions.\"; Duration: 2 hours; 100 marks available; Externally assessed; Availability: May/June; First assessment: May/June 2017"
   ],
   "resourceBooklet": false
  },
  {
   "id": "P3",
   "name": "Paper 3: Investigating business in a competitive environment",
   "paperCode": "9BS0/03",
   "marks": 100,
   "weight": 30,
   "minutes": 120,
   "sections": [
    "Overview of content: \"Paper 3 will assess content across all four themes. Questions will be drawn from local, national and global contexts.\" (spec.txt p.15)",
    "Pre-released context document issued on the board's website in November of the previous year; \"A new context will be given to centres each year and will relate to the examination series for the following summer.\" The context \"will focus on a broad context, such as an industry or market in which businesses operate.\"",
    "Section A: focuses on the broad context provided in the pre-released document",
    "Section B: focuses on \"at least one strand within the context provided, such as a particular business\"",
    "\"Each section will contain unseen stimulus materials comprising quantitative and qualitative evidence. Students are required to apply their knowledge and understanding from Themes 1, 2, 3 and 4 and their understanding of the broad context to this evidence.\"",
    "\"Questions in Sections A and B each comprise one data response question broken down into a number of parts, including one extended open-response question.\"; \"Students cannot take any of their research or investigation data carried out as part of the pre-release into the examination.\"",
    "\"Students answer all questions from both sections.\"; \"The assessment comprises 2 questions.\"; Duration: 2 hours; 100 marks available; Externally assessed; Availability: May/June; First assessment: May/June 2017",
    "Synoptic assessment: \"In this qualification, synoptic assessment can be found in Paper 3: Investigating business in a competitive environment.\" (spec.txt p.52)"
   ],
   "resourceBooklet": false,
   "coversAll": true
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge of terms, concepts, theories, methods and models to show an understanding of how individuals and organisations are affected by and respond to business issues",
   "weighting": "20-22% in GCE",
   "byPaper": "Paper 1: 6 – 8; Paper 2: 6 – 8; Paper 3: 5 – 7 (Breakdown of Assessment Objectives, spec.txt p.48)"
  },
  {
   "id": "AO2",
   "label": "Application",
   "text": "Apply knowledge and understanding to various business contexts to show how individuals and organisations are affected by and respond to issues",
   "weighting": "22-24% in GCE",
   "byPaper": "Paper 1: 7 – 9; Paper 2: 7 – 9; Paper 3: 5 – 7 (Breakdown of Assessment Objectives, spec.txt p.48)"
  },
  {
   "id": "AO3",
   "label": "Analysis",
   "text": "Analyse issues within business, showing an understanding of the impact on individuals and organisations of external and internal influences",
   "weighting": "28-30% in GCE",
   "byPaper": "Paper 1: 9 – 11; Paper 2: 9 – 11; Paper 3: 9 – 11 (Breakdown of Assessment Objectives, spec.txt p.48)"
  },
  {
   "id": "AO4",
   "label": "Evaluation",
   "text": "Evaluate qualitative and quantitative evidence to make informed judgements and propose evidence-based solutions to business issues",
   "weighting": "26-28% in GCE",
   "byPaper": "Paper 1: 8 – 10; Paper 2: 8 – 10; Paper 3: 9 – 11 (Breakdown of Assessment Objectives, spec.txt p.48)"
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Every mark in this qualification is awarded against the four Assessment Objectives, and the specification fixes their share of the total: AO1 20-22%, AO2 22-24%, AO3 28-30% and AO4 26-28% (spec.txt pp.16 and 47), with a per-paper breakdown on spec.txt p.48 (Paper 1 and Paper 2 each 6–8 / 7–9 / 9–11 / 8–10; Paper 3 5–7 / 5–7 / 9–11 / 9–11). Because AO3 and AO4 together carry roughly 54-58% of the qualification, extended answers are judged by levels: the specification builds each paper out of data response questions \"broken down into a number of parts, including one extended open-response question\" (spec.txt pp.14, 15, 45, 46), so credit runs from knowledge of the term, through application to the business in the stimulus, to analysis of its impact and finally an evaluated judgement on the evidence given. Each of the three papers carries 100 marks in 2 hours and comprises 2 questions, so a whole data response question is worth about half a paper. Quantitative work is examined inside those questions and is not a separate section: \"The assessment of quantitative skills will include at least Level 2 mathematical skills as a minimum of 10% of the overall marks for this qualification\" (Appendix 3: Quantitative skills, spec.txt p.63), the nine QS strands run from ratios, averages and fractions through break-even and investment appraisal to interpreting elasticity values, and Themes 2 and 3 additionally require the accounting ratios of Appendix 4 (spec.txt p.65). Paper 3 is the synoptic paper: the specification states that \"In this qualification, synoptic assessment can be found in Paper 3: Investigating business in a competitive environment\" (spec.txt p.52); it draws on all four themes, works from a pre-released broad context issued in the November of the previous year plus unseen stimulus in the exam, and its AO breakdown is deliberately tilted towards AO3 and AO4. NOTE: Issue 1 of this specification prints no command-word list and no per-question mark tariffs; the command words below are quoted from the Assessment Objectives and from the Appendix 3 quantitative skills, which are the only instruction verbs the document itself defines, and the tariffs live in the separate Sample Assessment Materials document the specification points to on spec.txt p.46. The idea `q` fields in this course's topics use the conventional Edexcel Business command words (Explain, Analyse, Assess, Evaluate, Discuss, Calculate) that Issue 1 itself does not define, since the document has no command-word glossary.",
  "commandWords": [
   {
    "word": "Demonstrate",
    "means": "AO1. \"Demonstrate knowledge of terms, concepts, theories, methods and models to show an understanding of how individuals and organisations are affected by and respond to business issues\" (spec.txt pp.16, 47). Worth 20-22% of the qualification."
   },
   {
    "word": "Apply",
    "means": "AO2. \"Apply knowledge and understanding to various business contexts to show how individuals and organisations are affected by and respond to issues\" (spec.txt pp.16, 47) — the specification also requires students to \"apply their knowledge and understanding to both familiar and unfamiliar contexts in the assessments and demonstrate an awareness of current business issues\" (theme overviews, spec.txt pp.17, 25, 31, 39). Worth 22-24%."
   },
   {
    "word": "Analyse",
    "means": "AO3. \"Analyse issues within business, showing an understanding of the impact on individuals and organisations of external and internal influences\" (spec.txt pp.16, 47). The largest single objective at 28-30%."
   },
   {
    "word": "Evaluate",
    "means": "AO4. \"Evaluate qualitative and quantitative evidence to make informed judgements and propose evidence-based solutions to business issues\" (spec.txt pp.16, 47) — a judgement resting on the evidence supplied, and a recommendation. Worth 26-28%."
   },
   {
    "word": "Calculate",
    "means": "Quantitative skills (Appendix 3, spec.txt p.63): \"calculate, use and understand ratios, averages and fractions\" (QS 1); \"calculate, use and understand percentages and percentage changes\" (QS 2); \"calculate cost, revenue, profit and break-even\" (QS 5); \"calculate investment appraisal outcomes and interpret results\" (QS 6). Themes 2 and 3 add the accounting ratios of Appendix 4 (spec.txt p.65)."
   },
   {
    "word": "Interpret",
    "means": "Quantitative skills (Appendix 3, spec.txt p.63): \"construct and interpret a range of standard graphical forms\" (QS 3); \"interpret index numbers\" (QS 4); \"calculate investment appraisal outcomes and interpret results\" (QS 6); \"interpret values of price and income elasticity of demand\" (QS 7); \"interpret, apply and analyse information in written, graphical and numerical forms\" (QS 9). Content 1.2.4 and 1.2.5 also require \"Interpretation of numerical values\" of elasticity."
   },
   {
    "word": "Construct",
    "means": "Quantitative skills QS 3 (Appendix 3, spec.txt p.63): \"construct and interpret a range of standard graphical forms\" — matched in the content by 1.2.3 b) \"The drawing and interpretation of supply and demand diagrams to show the causes and consequences of price changes\"."
   },
   {
    "word": "Use and understand",
    "means": "Quantitative skills QS 1 and QS 2 (Appendix 3, spec.txt p.63): \"calculate, use and understand ratios, averages and fractions\" and \"calculate, use and understand percentages and percentage changes\"; QS 8 extends this to \"use and interpret quantitative and non-quantitative information in order to make decisions\"."
   },
   {
    "word": "Investigate",
    "means": "Required of every theme: \"Students must investigate different types and sizes of organisation in various business sectors and environments, and in local, national and global contexts\" (theme overviews, spec.txt pp.17, 25, 31, 39). On Paper 3 it extends to the pre-released broad context, though \"Students cannot take any of their research or investigation data carried out as part of the pre-release into the examination\" (spec.txt pp.15, 46)."
   }
  ],
  "essayShapes": [
   {
    "marks": 50,
    "minutes": 60,
    "structure": "The extended open-response question inside a Paper 1 or Paper 2 data-response question — Section A or Section B — each of which is \"broken down into a number of parts, including one extended open-response question\" (spec.txt pp.14, 45). Marks and minutes are derived, not printed: 100 marks and 2 hours divided by the document's \"2 questions\" per paper (spec.txt pp.14, 45); the document prints no further split between a question's shorter parts and its extended open-response part, so 50 marks/60 minutes describes the whole question, not the open-response part alone. What the levels-based mark scheme rewards at the top level in that part: an opening that defines the key term(s) in the question and signals the line of argument; paragraphs built as point → evidence drawn from the business in the stimulus → a developed chain of analysis of cause and effect → a mini-judgement, so AO3 credit (9–11 of the paper's marks, spec.txt p.48) accumulates as the answer goes; balance across more than one line of argument, since AO4 (8–10 of the paper) rewards a weighed judgement, not one point pushed hard; and a conclusion that directly answers the question with a qualified position rooted in the specific figures and context given. Drawn from topics across Themes 1 and 4 (Paper 1) or Themes 2 and 3 (Paper 2) in a local, national or global context (spec.txt p.45)."
   },
   {
    "marks": 50,
    "minutes": 60,
    "structure": "The extended open-response question in Paper 3, Section A — the synoptic broad-context question. Section A \"will focus on the broad context provided in the pre-released document issued on our website in the November of the previous year\" and contains \"unseen stimulus materials comprising quantitative and qualitative evidence\" plus \"one extended open-response question\" (spec.txt pp.15, 46). Marks and minutes are derived, not printed: 100 marks and 2 hours divided by the paper's 2 questions (spec.txt pp.15, 46); the document gives no further split for the extended part alone. What the levels-based mark scheme rewards at the top level: an opening that defines the key term(s) and signals the line of argument across the pre-released context; paragraphs of point → evidence drawn from the unseen quantitative and qualitative stimulus about that broad context → a developed chain of analysis working \"from Themes 1, 2, 3 and 4\" → a mini-judgement; balance between the strands of evidence; and a conclusion that reaches a qualified, evidence-based judgement about the whole context — Paper 3 is where AO4 is heaviest (9–11 of 30%, spec.txt p.48)."
   },
   {
    "marks": 50,
    "minutes": 60,
    "structure": "The extended open-response question in Paper 3, Section B, which \"will focus on at least one strand within the context provided, such as a particular business\" (spec.txt pp.15, 46), again with unseen quantitative and qualitative stimulus and one extended open-response question. Marks and minutes derived as above: 100 marks and 2 hours over the paper's 2 questions, with no further printed split. What the top level rewards: an opening that defines terms and signals the argument as it applies to the named business; paragraphs of point → evidence from the figures and qualitative detail given for that business → a developed chain of analysis of the internal and external influences on it specifically → a mini-judgement; balance between competing influences; and a conclusion proposing an evidence-based solution rather than a general one — no pre-release research notes may be taken into the exam, so the judgement must rest on the evidence in front of the student."
   },
   {
    "marks": 50,
    "minutes": 60,
    "structure": "A shorter calculate/analyse item: one of the non-extended parts within the same Section A/B data-response question as the shapes above, typically a calculation using the Appendix 3 quantitative skills (QS1 ratios/averages/fractions, QS2 percentages, QS5 cost/revenue/profit/break-even, QS6 investment appraisal) or, for Themes 2 and 3, the Appendix 4 accounting ratios, followed by a short paragraph of analysis. Marks and minutes are derived, not printed: the document gives 100 marks and 2 hours over the paper's 2 questions (spec.txt pp.14, 45) and prints no separate figure for this shorter part; the 50 marks/60 minutes above are for the whole question, of which this is one part. What a top-level answer does with it: the calculation is accurate, shows its method, and is correctly labelled; the short analysis that follows states the point, applies the labelled figure as evidence, and gives one developed line of reasoning about what the result means specifically for the business in the stimulus — securing the AO1/AO2 marks before the extended open-response part in the same question carries the AO3/AO4 weight."
   }
  ]
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/A%20Level/Business%20Studies/2015/specification-and-sample-assessment-materials/9781446914694-gce2015-a-bus-web.pdf",
  "etag": "W/\"8c586-65aabe0fff30a\"",
  "lastModified": "Fri, 04 Sep 2026 17:48:41 GMT",
  "length": 574854,
  "checkedAt": "2026-09-11T06:09:47.630Z"
 },
 "topics": [
  {
   "id": "1.1",
   "component": "P1",
   "option": null,
   "name": "Meeting customer needs",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.1.1",
     "q": "Explain the difference between mass and niche markets and analyse how competition, innovation and dynamic conditions such as online retailing change a market.",
     "idea": "The market",
     "content": "Mass and niche markets: characteristics, market size and market share, brands. Dynamic markets: online retailing, how markets change, innovation and market growth, adapting to change. How competition affects the market. The difference between risk and uncertainty."
    },
    {
     "code": "1.1.2",
     "q": "Assess how a business uses primary and secondary, quantitative and qualitative market research (including ICT) to identify and quantify customer needs and segment the market, and evaluate its limitations.",
     "idea": "Market research",
     "content": "Product and market orientation. Primary and secondary market research data (quantitative and qualitative) used to identify and anticipate customer needs and wants, quantify likely demand and gain insight into consumer behaviour. Limitations of market research, sample size and bias. Use of ICT to support market research: websites, social networking, databases. Market segmentation."
    },
    {
     "code": "1.1.3",
     "q": "Analyse how market mapping, product differentiation and adding value give a business a competitive advantage.",
     "idea": "Market positioning",
     "content": "Market mapping. Competitive advantage of a product or service. The purpose of product differentiation. Adding value to products/services."
    }
   ]
  },
  {
   "id": "1.2",
   "component": "P1",
   "option": null,
   "name": "Market",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.2.1",
     "q": "Explain how changes in the price of substitutes and complements, consumer incomes, fashions/tastes/preferences, advertising, demographics, external shocks and seasonality shift demand.",
     "idea": "Demand",
     "content": "Factors leading to a change in demand: changes in the prices of substitutes and complementary goods, changes in consumer incomes, fashions, tastes and preferences, advertising and branding, demographics, external shocks, seasonality."
    },
    {
     "code": "1.2.2",
     "q": "Explain how changes in production costs, new technology, indirect taxes, government subsidies and external shocks shift supply.",
     "idea": "Supply",
     "content": "Factors leading to a change in supply: changes in the costs of production, introduction of new technology, indirect taxes, government subsidies, external shocks."
    },
    {
     "code": "1.2.3",
     "q": "Using supply and demand diagrams, analyse the causes and consequences of price changes arising from the interaction of supply and demand.",
     "idea": "Markets",
     "content": "The interaction of supply and demand. The drawing and interpretation of supply and demand diagrams to show the causes and consequences of price changes."
    },
    {
     "code": "1.2.4",
     "q": "Calculate and interpret price elasticity of demand, and assess its significance for a business's pricing decisions and total revenue.",
     "idea": "Price elasticity of demand",
     "content": "Calculation of price elasticity of demand. Interpretation of numerical values of price elasticity of demand. The factors influencing price elasticity of demand. The significance of price elasticity of demand to businesses in terms of implications for pricing. Calculation and interpretation of the relationship between price elasticity of demand and total revenue. Standard form (not printed in the specification): PED = % change in quantity demanded ÷ % change in price; conventionally negative, so the test is on |PED| > 1 (elastic) versus |PED| < 1 (inelastic)."
    },
    {
     "code": "1.2.5",
     "q": "Calculate and interpret income elasticity of demand, and assess its significance for a business.",
     "idea": "Income elasticity of demand",
     "content": "Calculation of income elasticity of demand. Interpretation of numerical values of income elasticity of demand. The factors influencing income elasticity of demand. The significance of income elasticity of demand to businesses. Standard form (not printed in the specification): YED = % change in quantity demanded ÷ % change in income; conventionally positive for normal goods and negative for inferior goods."
    }
   ]
  },
  {
   "id": "1.3",
   "component": "P1",
   "option": null,
   "name": "Marketing mix and strategy",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.3.1",
     "q": "Explain how the design mix (function, aesthetics, cost) and social trends such as waste minimisation, re-use, recycling and ethical sourcing shape product/service design.",
     "idea": "Product/service design",
     "content": "Design mix: function, aesthetics, cost. Changes in the elements of the design mix to reflect social trends: concern over resource depletion (designing for waste minimisation, re-use and recycling), ethical sourcing."
    },
    {
     "code": "1.3.2",
     "q": "Assess how types of branding and promotion, and ways of building a brand (USPs, advertising, sponsorship, social media), add value, allow premium pricing and reduce price elasticity of demand.",
     "idea": "Branding and promotion",
     "content": "Types of promotion. Types of branding. The benefits of strong branding: added value, ability to charge premium prices, reduced price elasticity of demand. Ways to build a brand: unique selling points (USPs)/differentiation, advertising, sponsorship, use of social media. Changes in branding and promotion to reflect social trends: viral marketing, social media, emotional branding."
    },
    {
     "code": "1.3.3",
     "q": "Assess which pricing strategy (cost plus, skimming, penetration, predatory, competitive, psychological) is most appropriate for a business given its differentiation, price elasticity of demand, competition, brand strength, product life-cycle stage and costs.",
     "idea": "Pricing strategies",
     "content": "Types of pricing strategy: cost plus (calculating mark-up on unit cost), price skimming, penetration, predatory, competitive, psychological. Factors that determine the most appropriate pricing strategy: number of USPs/amount of differentiation, price elasticity of demand, level of competition, strength of brand, stage in the product life cycle, costs and the need to make a profit. Changes in pricing to reflect social trends: online sales, price comparison sites. Standard form (not printed in the specification): cost-plus price = unit cost + mark-up."
    },
    {
     "code": "1.3.4",
     "q": "Explain how choice of distribution channel, including the shift to online distribution and from product to service, affects a business.",
     "idea": "Distribution",
     "content": "Distribution channels. Changes in distribution to reflect social trends: online distribution, changing from product to service."
    },
    {
     "code": "1.3.5",
     "q": "Analyse how the product life cycle, extension strategies, the Boston Matrix and marketing strategies for mass/niche and B2B/B2C markets help a business build customer loyalty.",
     "idea": "Marketing strategy",
     "content": "The product life cycle. Extension strategies: product, promotion. Boston Matrix and the product portfolio. Marketing strategies appropriate for different types of market: mass markets, niche markets, business to business (B2B) and business to consumer (B2C) marketing. Consumer behaviour – how businesses develop customer loyalty."
    }
   ]
  },
  {
   "id": "1.4",
   "component": "P1",
   "option": null,
   "name": "Managing people",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.4.1",
     "q": "Assess how far treating staff as an asset rather than a cost, and using a flexible workforce, affects employer–employee relationships in a business.",
     "idea": "Approaches to staffing",
     "content": "Staff as an asset; staff as a cost. Flexible workforce: multi-skilling, part-time and temporary, flexible hours and home working, outsourcing. Distinction between dismissal and redundancy. Employer/employee relationships: individual approach, collective bargaining."
    },
    {
     "code": "1.4.2",
     "q": "Assess whether internal or external recruitment, and on-the-job or off-the-job training, best meet a business's needs given the costs involved.",
     "idea": "Recruitment, selection and training",
     "content": "Recruitment and selection process: internal versus external recruitment. Costs of recruitment, selection and training. Types of training: induction, on-the-job, off-the-job."
    },
    {
     "code": "1.4.3",
     "q": "Analyse the impact of different organisational structures (tall, flat, matrix; span of control; centralisation/decentralisation) on business efficiency and motivation.",
     "idea": "Organisational design",
     "content": "Structure: hierarchy, chain of command, span of control, centralised and decentralised. Types of structure: tall, flat, matrix. Impact of different organisational structures on business efficiency and motivation."
    },
    {
     "code": "1.4.4",
     "q": "Evaluate the effectiveness of financial and non-financial methods of motivation, drawing on Taylor, Mayo, Maslow and Herzberg's theories, in improving employee performance.",
     "idea": "Motivation in theory and practice",
     "content": "The importance of employee motivation to a business. Motivation theories: Taylor (scientific management), Mayo (human relations theory), Maslow (hierarchy of needs), Herzberg (two factor theory). Financial incentives: piecework, commission, bonus, profit share, performance-related pay. Non-financial techniques: delegation, consultation, empowerment, team working, flexible working, job enrichment, job rotation, job enlargement."
    },
    {
     "code": "1.4.5",
     "q": "Assess which leadership style (autocratic, paternalistic, democratic, laissez-faire) is most effective for a business, and explain how leadership differs from management.",
     "idea": "Leadership",
     "content": "Leadership: the distinction between management and leadership. Types of leadership style: autocratic, paternalistic, democratic, laissez-faire."
    }
   ]
  },
  {
   "id": "1.5",
   "component": "P1",
   "option": null,
   "name": "Entrepreneurs and leaders",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.5.1",
     "q": "Assess the role of an entrepreneur in creating, running and expanding a business, including intrapreneurship, the barriers faced and the need to anticipate risk and uncertainty.",
     "idea": "Role of an entrepreneur",
     "content": "Creating and setting up a business. Running and expanding/developing a business. Innovation within a business (intrapreneurship). Barriers to entrepreneurship. Anticipating risk and uncertainty in the business environment."
    },
    {
     "code": "1.5.2",
     "q": "Explain the characteristics and skills entrepreneurs need, and analyse the financial and non-financial motives for setting up a business.",
     "idea": "Entrepreneurial motives and characteristics",
     "content": "Characteristics and skills required. Reasons why people set up businesses: financial motives (profit maximisation and profit satisficing), non-financial motives (ethical stance, social entrepreneurship, independence and home working)."
    },
    {
     "code": "1.5.3",
     "q": "Assess why a business might pursue survival, profit maximisation or other objectives (sales maximisation, market share, cost efficiency, employee welfare, customer satisfaction, social objectives).",
     "idea": "Business objectives",
     "content": "Survival. Profit maximisation. Other objectives: sales maximisation, market share, cost efficiency, employee welfare, customer satisfaction, social objectives."
    },
    {
     "code": "1.5.4",
     "q": "Explain the advantages and disadvantages of different forms of business (sole trader, partnership, private limited company, franchise, social enterprise, lifestyle business, online business) and of growth to a plc through stock market flotation.",
     "idea": "Forms of business",
     "content": "Sole trader, partnership and private limited company. Franchising, social enterprise, lifestyle businesses, online businesses. Growth to PLC and stock market flotation."
    },
    {
     "code": "1.5.5",
     "q": "Using the concept of opportunity cost, analyse the trade-offs a business faces when making choices.",
     "idea": "Business choices",
     "content": "Opportunity cost. Choices and potential trade-offs a business faces. Standard gloss (not printed in the specification): opportunity cost is the benefit given up by choosing one option over the next best alternative, relevant when a business is allocating scarce resources."
    },
    {
     "code": "1.5.6",
     "q": "Assess the difficulties an entrepreneur faces in developing into a leader as a business grows.",
     "idea": "Moving from entrepreneur to leader",
     "content": "The difficulties in developing from an entrepreneur to a leader."
    }
   ]
  },
  {
   "id": "2.1",
   "component": "P2",
   "option": null,
   "name": "Raising finance",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.1.1",
     "q": "Explain how a business could raise finance from internal sources.",
     "idea": "Internal finance",
     "content": "Sources of internal finance: owner's capital (personal savings); retained profit; sale of assets."
    },
    {
     "code": "2.1.2",
     "q": "Analyse the external sources and methods of finance available to a business.",
     "idea": "External finance",
     "content": "Sources of finance: family and friends, banks, peer-to-peer funding, business angels, crowd funding, other businesses. Methods of finance: loans, share capital, venture capital, overdrafts, leasing, trade credit, grants."
    },
    {
     "code": "2.1.3",
     "q": "Explain how liability affects the finance a business can raise.",
     "idea": "Liability",
     "content": "Implications of limited and unlimited liability; finance appropriate for limited and unlimited liability businesses."
    },
    {
     "code": "2.1.4",
     "q": "Evaluate the use of a business plan and cash-flow forecasting in raising finance.",
     "idea": "Planning",
     "content": "Relevance of a business plan in obtaining finance; interpretation of a simple cash-flow forecast and calculations based on changes in the cash-flow variables; use and limitations of a cash-flow forecast."
    }
   ]
  },
  {
   "id": "2.2",
   "component": "P2",
   "option": null,
   "name": "Financial planning",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.2.1",
     "q": "Evaluate the difficulties a business faces in forecasting its sales.",
     "idea": "Sales forecasting",
     "content": "Purpose of sales forecasts; factors affecting sales forecasts: consumer trends, economic variables, actions of competitors; difficulties of sales forecasting."
    },
    {
     "code": "2.2.2",
     "q": "Calculate a business's sales volume, sales revenue, fixed costs and variable costs.",
     "idea": "Sales, revenue and costs",
     "content": "Calculation of sales volume and sales revenue; calculation of fixed and variable costs."
    },
    {
     "code": "2.2.3",
     "q": "Calculate and interpret a business's break-even point, and evaluate the limitations of break-even analysis.",
     "idea": "Break-even",
     "content": "Contribution: selling price minus variable cost per unit. Break-even point: total fixed costs + total variable costs = total revenue. Using contribution to calculate the break-even point; margin of safety; interpretation of break-even charts; limitations of break-even analysis."
    },
    {
     "code": "2.2.4",
     "q": "Analyse how a business uses budgets and variance analysis, and evaluate the difficulties of budgeting.",
     "idea": "Budgets",
     "content": "Purpose of budgets; types of budget: historical figures, zero based; variance analysis; difficulties of budgeting."
    }
   ]
  },
  {
   "id": "2.3",
   "component": "P2",
   "option": null,
   "name": "Managing finance",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.3.1",
     "q": "Calculate a business's profit and profitability, and evaluate ways to improve profitability.",
     "idea": "Profit",
     "content": "Calculation of gross profit, operating profit, and profit for the year (net profit). Statement of comprehensive income (profit and loss account): measuring profitability via calculation of gross profit margin (Gross Profit ÷ Revenue x 100%), operating profit margin (Operating Profit ÷ Revenue x 100%), and profit for the year (net profit) margin (Profit for the year ÷ Revenue x 100%); ways to improve profitability; distinction between profit and cash."
    },
    {
     "code": "2.3.2",
     "q": "Calculate a business's liquidity and evaluate ways to improve it and manage working capital.",
     "idea": "Liquidity",
     "content": "Statement of financial position (balance sheet): measuring liquidity via calculating the current ratio (Current assets ÷ Current liabilities) and the acid test ratio (Current assets minus Inventory, ÷ Current liabilities); ways to improve liquidity. Working capital and its management: the importance of cash."
    },
    {
     "code": "2.3.3",
     "q": "Analyse the internal and external causes of business failure.",
     "idea": "Business failure",
     "content": "Internal and external causes of business failure: financial factors; non-financial factors."
    }
   ]
  },
  {
   "id": "2.4",
   "component": "P2",
   "option": null,
   "name": "Resource management",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.4.1",
     "q": "Explain the methods of production a business can use and analyse its productivity and efficiency.",
     "idea": "Production, productivity and efficiency",
     "content": "Methods of production: job, batch, flow, cell. Productivity: output per unit of input per time period; factors influencing productivity; link between productivity and competitiveness. Efficiency: production at minimum average cost; factors influencing efficiency; distinction between labour and capital intensive production."
    },
    {
     "code": "2.4.2",
     "q": "Calculate a business's capacity utilisation and evaluate the implications of under- and over-utilisation.",
     "idea": "Capacity utilisation",
     "content": "Capacity utilisation: current output ÷ maximum possible output x 100. Implications of under- and over-utilisation of capacity; ways of improving capacity utilisation."
    },
    {
     "code": "2.4.3",
     "q": "Interpret a stock control diagram and evaluate a business's approach to stock control.",
     "idea": "Stock control",
     "content": "Interpretation of stock control diagram; buffer stocks; implications of poor stock control; just in time (JIT) management of stock; waste minimisation; competitive advantage from lean production."
    },
    {
     "code": "2.4.4",
     "q": "Evaluate how quality management can give a business competitive advantage.",
     "idea": "Quality management",
     "content": "Quality: control, assurance, circles, Total Quality Management (TQM); continuous improvement (Kaizen); competitive advantage from quality management."
    }
   ]
  },
  {
   "id": "2.5",
   "component": "P2",
   "option": null,
   "name": "External influences",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.5.1",
     "q": "Analyse the effect of economic influences and economic uncertainty on a business.",
     "idea": "Economic influences",
     "content": "The effect on businesses of changes in: inflation (the rate of inflation, the Consumer Prices Index), exchange rates (appreciation, depreciation), interest rates, taxation and government spending, the business cycle. The effect of economic uncertainty on the business environment."
    },
    {
     "code": "2.5.2",
     "q": "Analyse the effects of legislation on a business.",
     "idea": "Legislation",
     "content": "The effects on businesses of: consumer protection, employee protection, environmental protection, competition policy, health and safety."
    },
    {
     "code": "2.5.3",
     "q": "Analyse the effect of competition and market size on a business.",
     "idea": "The competitive environment",
     "content": "The competitive environment: the effect on a business of competition and market size."
    }
   ]
  },
  {
   "id": "3.1",
   "component": "P2",
   "option": null,
   "name": "Business objectives and strategy",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.1.1",
     "q": "Explain how corporate objectives are developed from a mission statement, and evaluate how meaningful mission statements/corporate aims are in practice.",
     "idea": "Corporate objectives",
     "content": "Development of corporate objectives from a mission statement/corporate aims; critical appraisal of mission statements/corporate aims. Standard gloss (not printed in the specification): critical appraisal typically examines how meaningful, measurable and achievable a mission statement or corporate aim is in practice."
    },
    {
     "code": "3.1.2",
     "q": "Analyse how a business develops corporate strategy using Ansoff's Matrix or Porter's Strategic Matrix, and evaluate the effect of such strategic and tactical decisions on its resources.",
     "idea": "Theories of corporate strategy",
     "content": "Development of corporate strategy: Ansoff's Matrix and Porter's Strategic Matrix; the aim of portfolio analysis; achieving competitive advantage through distinctive capabilities; the effect of strategic and tactical decisions on human, physical and financial resources."
    },
    {
     "code": "3.1.3",
     "q": "Use a SWOT analysis to assess a business's internal strengths and weaknesses and its external opportunities and threats.",
     "idea": "SWOT analysis",
     "content": "SWOT analysis: internal considerations of strengths and weaknesses, and external considerations of opportunities and threats, as a tool for assessing a business's strategic position."
    },
    {
     "code": "3.1.4",
     "q": "Analyse the PESTLE factors and Porter's Five Forces shaping a business's competitive environment, and evaluate their significance for its strategy.",
     "idea": "Impact of external influences",
     "content": "PESTLE analysis (political, economic, social, technological, legal and environmental); the changing competitive environment; Porter's Five Forces. Standard gloss (not printed in the specification): Porter's Five Forces is used as a framework for analysing the forces shaping competition within an industry."
    }
   ]
  },
  {
   "id": "3.2",
   "component": "P2",
   "option": null,
   "name": "Business growth",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.2.1",
     "q": "Assess the objectives of business growth and the problems that can arise from it.",
     "idea": "Growth",
     "content": "Objectives of growth: achieving economies of scale (internal and external), increased market power over customers and suppliers, increased market share and brand recognition, increased profitability. Problems arising from growth: diseconomies of scale, internal communication problems, overtrading."
    },
    {
     "code": "3.2.2",
     "q": "Evaluate the reasons for, and the financial risks and rewards of, mergers and takeovers, including horizontal and vertical integration.",
     "idea": "Mergers and takeovers",
     "content": "Reasons for mergers and takeovers; the distinction between mergers and takeovers; horizontal and vertical integration; financial risks and rewards; problems of rapid growth."
    },
    {
     "code": "3.2.3",
     "q": "Evaluate the advantages and disadvantages of organic growth compared with inorganic growth.",
     "idea": "Organic growth",
     "content": "Distinction between inorganic and organic growth; methods of growing organically; advantages and disadvantages of organic growth."
    },
    {
     "code": "3.2.4",
     "q": "Assess the strategies that allow small businesses to survive in competitive markets.",
     "idea": "Reasons for staying small",
     "content": "Small business survival in competitive markets through: product differentiation and unique selling points (USPs), flexibility in responding to customer needs, customer service, e-commerce."
    }
   ]
  },
  {
   "id": "3.3",
   "component": "P2",
   "option": null,
   "name": "Decision-making techniques",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.3.1",
     "q": "Calculate and interpret a moving-average time-series sales forecast, and evaluate the limitations of quantitative sales forecasting techniques.",
     "idea": "Quantitative sales forecasting",
     "content": "Calculation of time-series analysis: moving averages (three period/four quarter). Interpretation of scatter graphs and line of best fit — extrapolation of past data to future. Limitations of quantitative sales forecasting techniques. Standard gloss (not printed in the specification): a three-period/four-quarter moving average is the average of a fixed number of consecutive periods, recalculated as each new period is added, which smooths out random and seasonal variation."
    },
    {
     "code": "3.3.2",
     "q": "Calculate payback, Average Rate of Return and Net Present Value for an investment, and evaluate the limitations of these investment appraisal techniques.",
     "idea": "Investment appraisal",
     "content": "Simple payback. Average (Accounting) Rate of Return (ARR). Discounted Cash Flow (Net Present Value only). Calculation and interpretation of the figures generated by these techniques; limitations of these techniques. Standard forms (not printed in the specification): payback = time taken for cumulative net cash inflows to equal the initial investment; ARR = average annual profit ÷ initial investment cost x 100%; NPV = discounted future cash flows summed, less the initial outlay."
    },
    {
     "code": "3.3.3",
     "q": "Construct and interpret a decision tree, calculating expected values, to evaluate a strategic choice made under uncertainty.",
     "idea": "Decision trees",
     "content": "Construction and interpretation of simple decision tree diagrams; calculation and interpretation of the figures generated by these techniques; limitations of using decision trees. Standard gloss (not printed in the specification): the figures generated are the expected value at each outcome node, found from probability multiplied by financial result, compared against the cost of each option."
    },
    {
     "code": "3.3.4",
     "q": "Construct a network diagram to identify the critical path, calculating Earliest Start Time, Latest Finish Time and total float, and evaluate the usefulness of Critical Path Analysis.",
     "idea": "Critical Path Analysis",
     "content": "Nature and purpose of Critical Path Analysis (CPA); completing and interpreting simple networks to identify the critical path; calculation of Earliest Start Time (EST), Latest Finish Time (LFT) and total float; limitations of using Critical Path Analysis. Standard gloss (not printed in the specification): total float is the spare time an activity has without delaying the project."
    }
   ]
  },
  {
   "id": "3.4",
   "component": "P2",
   "option": null,
   "name": "Influences on business decisions",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.4.1",
     "q": "Discuss the extent to which businesses should favour short-termism over long-termism, and evidence-based over subjective, decision making.",
     "idea": "Corporate influences",
     "content": "Corporate timescales: short-termism versus long-termism in setting objectives and making decisions; evidence-based versus subjective decision making."
    },
    {
     "code": "3.4.2",
     "q": "Analyse how strong and weak corporate cultures form and are classified, and evaluate the difficulties of changing an established culture.",
     "idea": "Corporate culture",
     "content": "Strong and weak cultures; classification of company cultures into power, role, task and person cultures; how corporate culture is formed; difficulties in changing an established culture."
    },
    {
     "code": "3.4.3",
     "q": "Evaluate the extent to which a business should prioritise shareholder returns over the wider interests of its stakeholders.",
     "idea": "Shareholders versus stakeholders",
     "content": "Internal and external stakeholders; stakeholder objectives; stakeholder influence (the business considers all of its stakeholders in its decisions/objectives) versus shareholder influence (the business focuses purely on shareholder returns — increasing share price and dividends — in its decisions/objectives); the potential for conflict between profit-based (shareholder) and wider (stakeholder) objectives."
    },
    {
     "code": "3.4.4",
     "q": "Discuss the ethical trade-offs a business faces between profit and its treatment of pay, rewards and Corporate Social Responsibility.",
     "idea": "Business ethics",
     "content": "Ethics of strategic decisions, including trade-offs between profit and ethics; pay and rewards; Corporate Social Responsibility (CSR)."
    }
   ]
  },
  {
   "id": "3.5",
   "component": "P2",
   "option": null,
   "name": "Assessing competitiveness",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.5.1",
     "q": "Analyse the key information in a statement of comprehensive income and a statement of financial position, and assess their significance to different stakeholders.",
     "idea": "Interpretation of financial statements",
     "content": "Statement of comprehensive income (profit and loss account): key information and stakeholder interest. Statement of financial position (balance sheet): key information and stakeholder interest."
    },
    {
     "code": "3.5.2",
     "q": "Calculate and interpret gearing ratio and ROCE to support a business decision, and evaluate the limitations of ratio analysis.",
     "idea": "Ratio analysis",
     "content": "Calculate: gearing ratio (non-current liabilities divided by capital employed, x 100%) and Return on Capital Employed, ROCE (operating profit divided by capital employed, x 100%); interpret ratios to make business decisions; the limitations of ratio analysis."
    },
    {
     "code": "3.5.3",
     "q": "Calculate labour productivity, labour turnover/retention and absenteeism, and evaluate human resource strategies to improve them.",
     "idea": "Human resources",
     "content": "Calculate and interpret labour productivity, labour turnover and retention, and absenteeism to help make business decisions; human resource strategies to increase productivity and retention and reduce turnover and absenteeism: financial rewards, employee share ownership, consultation strategies, empowerment strategies."
    }
   ]
  },
  {
   "id": "3.6",
   "component": "P2",
   "option": null,
   "name": "Managing change",
   "caseStudies": [],
   "ideas": [
    {
     "code": "3.6.1",
     "q": "Analyse the causes of organisational change and evaluate its possible effects on competitiveness, productivity, financial performance and stakeholders.",
     "idea": "Causes and effects of change",
     "content": "Causes of change: changes in organisational size, poor business performance, new ownership, transformational leadership, the market and other external factors (PESTLE). Possible effects on: competitiveness, productivity, financial performance, stakeholders."
    },
    {
     "code": "3.6.2",
     "q": "Assess the key factors that determine how successfully a business manages change.",
     "idea": "Key factors in change",
     "content": "Organisational culture; size of organisation; time/speed of change; managing resistance to change."
    },
    {
     "code": "3.6.3",
     "q": "Evaluate how scenario planning through risk assessment and risk mitigation helps a business prepare for key risks.",
     "idea": "Scenario planning",
     "content": "Identifying key risks through risk assessment: natural disasters, IT systems failure, loss of key staff. Planning for risk mitigation: business continuity, succession planning."
    }
   ]
  },
  {
   "id": "4.1",
   "component": "P1",
   "option": null,
   "name": "Globalisation",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.1.1",
     "q": "Explain how the growth of emerging economies creates opportunities and challenges for individuals and businesses.",
     "idea": "Growing economies",
     "content": "Growth rate of the UK economy compared with emerging economies; the growing economic power of countries within Asia, Africa and other parts of the world; implications of economic growth for individuals and businesses, including trade opportunities for businesses and changing employment patterns; indicators used to measure growth: Gross Domestic Product (GDP) per capita, literacy, health, and the Human Development Index (HDI)."
    },
    {
     "code": "4.1.2",
     "q": "Analyse the links between exports, imports, specialisation and business growth.",
     "idea": "International trade and business growth",
     "content": "Exports and imports; the link between business specialisation and competitive advantage; foreign direct investment (FDI) and its link to business growth."
    },
    {
     "code": "4.1.3",
     "q": "Assess the factors that have contributed to increased globalisation.",
     "idea": "Factors contributing to increased globalisation",
     "content": "Reduction of international trade barriers/trade liberalisation; political change; reduced cost of transport and communication; the increased significance of global (transnational) companies; increased investment flows (FDI); migration (within and between economies); growth of the global labour force; structural change."
    },
    {
     "code": "4.1.4",
     "q": "Explain the methods of protectionism governments use and their effect on businesses.",
     "idea": "Protectionism",
     "content": "Tariffs; import quotas; other trade barriers, including government legislation and domestic subsidies."
    },
    {
     "code": "4.1.5",
     "q": "Assess the impact of trading blocs on businesses.",
     "idea": "Trading blocs",
     "content": "Expansion of trading blocs, including the EU and the single market, ASEAN and NAFTA; the impact on businesses of trading blocs."
    }
   ]
  },
  {
   "id": "4.2",
   "component": "P1",
   "option": null,
   "name": "Global markets and business expansion",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.2.1",
     "q": "Explain the push and pull factors that prompt a business to trade internationally.",
     "idea": "Conditions that prompt trade",
     "content": "Push factors: saturated markets, competition; pull factors: economies of scale, risk spreading; the possibility of off-shoring and outsourcing; extending the product life cycle by selling in multiple markets."
    },
    {
     "code": "4.2.2",
     "q": "Assess the factors a business should consider when evaluating a country as a potential market.",
     "idea": "Assessment of a country as a market",
     "content": "Factors to consider: levels and growth of disposable income, ease of doing business, infrastructure, political stability and the exchange rate."
    },
    {
     "code": "4.2.3",
     "q": "Assess the factors a business should consider when evaluating a country as a production location.",
     "idea": "Assessment of a country as a production location",
     "content": "Factors to consider: costs of production, skills and availability of the labour force, infrastructure, location in a trade bloc, government incentives, ease of doing business, political stability, natural resources and the likely return on investment."
    },
    {
     "code": "4.2.4",
     "q": "Evaluate the reasons why businesses pursue global mergers or joint ventures.",
     "idea": "Reasons for global mergers or joint ventures",
     "content": "Spreading risk over different countries/regions; entering new markets/trade blocs; acquiring national/international brand names/patents; securing resources/supplies; maintaining/increasing global competitiveness."
    },
    {
     "code": "4.2.5",
     "q": "Analyse the factors that determine a business's global competitiveness.",
     "idea": "Global competitiveness",
     "content": "The impact of movements in exchange rates on a business's competitiveness; competitive advantage through cost competitiveness and differentiation; skill shortages and their impact on international competitiveness. Standard gloss (not printed in the specification): an appreciation of the home currency raises the price of exports and lowers the price of imports, reducing cost competitiveness; a depreciation has the reverse effect."
    }
   ]
  },
  {
   "id": "4.3",
   "component": "P1",
   "option": null,
   "name": "Global marketing",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.3.1",
     "q": "Assess the marketing strategies a business can use to compete in global markets.",
     "idea": "Marketing",
     "content": "Global marketing strategy and global localisation (glocalisation); different marketing approaches, including domestic/ethnocentric, mixed/geocentric and international/polycentric; the application and adaptation of the marketing mix (4Ps) and Ansoff's Matrix to global markets."
    },
    {
     "code": "4.3.2",
     "q": "Explain how businesses target global niche markets.",
     "idea": "Niche markets",
     "content": "Cultural diversity: recognition that groups of people across the globe have different interests and values; features of global niche markets; the application and adaptation of the marketing mix (4Ps) to suit global niches."
    },
    {
     "code": "4.3.3",
     "q": "Assess the cultural and social factors a business must consider when marketing globally.",
     "idea": "Cultural/social factors",
     "content": "Considerations for businesses: cultural differences, different tastes, language, unintended meanings, inappropriate/inaccurate translations and inappropriate branding and promotion."
    }
   ]
  },
  {
   "id": "4.4",
   "component": "P1",
   "option": null,
   "name": "Global industries and companies (multinational corporations)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.4.1",
     "q": "Assess the impact of multinational corporations on the local and national economy.",
     "idea": "The impact of MNCs",
     "content": "Impact of MNCs on the local economy: local labour, wages, working conditions and job creation, local businesses, and the local community and environment; impact of MNCs on the national economy: FDI flows, the balance of payments, technology and skills transfer, consumers, business culture, and tax revenues and transfer pricing."
    },
    {
     "code": "4.4.2",
     "q": "Evaluate the ethical issues raised by the operations of multinational corporations.",
     "idea": "Ethics",
     "content": "Stakeholder conflicts; pay and working conditions; environmental considerations, including emissions and waste disposal; supply chain considerations, including exploitation of labour and child labour; marketing considerations, including misleading product labelling and inappropriate promotional activities."
    },
    {
     "code": "4.4.3",
     "q": "Assess the methods used to control the activities of multinational corporations.",
     "idea": "Controlling MNCs",
     "content": "Factors to consider: political influence, legal control, pressure groups and social media."
    }
   ]
  }
 ]
};
module.exports = { SPEC_9BS0 };
