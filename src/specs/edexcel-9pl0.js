/* Pearson Edexcel A level Politics (9PL0) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_9PL0 = {
 "id": "EDX-9PL0",
 "board": "Pearson Edexcel",
 "subject": "Politics",
 "code": "9PL0",
 "level": "A level",
 "version": "Issue 4 – May 2026 (Pearson Edexcel Level 3 Advanced GCE in Politics (9PL0); First teaching from September 2017; First certification from 2019)",
 "firstExam": 2019,
 "essaySubject": true,
 "components": [
  {
   "id": "C1",
   "name": "Component 1: UK Politics",
   "contentHeading": "Component 1: UK Politics and Core Political Ideas",
   "paperCode": "9PL0/01",
   "marks": 84,
   "weight": 33.33,
   "weightAsPrinted": "33⅓% of the qualification",
   "minutes": 120,
   "sections": [
    "Section A: Political Participation",
    "Section B: Core Political Ideas"
   ],
   "sectionDetail": [
    "Section A – Political Participation: this section is worth 60 marks. One 30-mark question from a choice of two (each question uses a source) – students must complete one of these. Plus one 30-mark question from a choice of two – students must complete one of these. All questions assess AO1, AO2 and AO3.",
    "Section B – Core Political Ideas: this section is worth 24 marks. One 24-mark question from a choice of two, which assesses AO1, AO2 and AO3."
   ],
   "resourceBooklet": false
  },
  {
   "id": "C2",
   "name": "Component 2: UK Government",
   "contentHeading": "Component 2: UK Government and Non-core Political Ideas",
   "paperCode": "9PL0/02",
   "marks": 84,
   "weight": 33.33,
   "weightAsPrinted": "33⅓% of the qualification",
   "minutes": 120,
   "sections": [
    "Section A: UK Government",
    "Section B: Non-core Political Ideas"
   ],
   "sectionDetail": [
    "Section A – UK Government: this section is worth 60 marks. One 30-mark question from a choice of two (each question uses a source) – students must complete one of these. Plus one 30-mark question from a choice of two – students must complete one of these. All questions assess AO1, AO2 and AO3.",
    "Section B – Non-core Political Ideas: this section is worth 24 marks. Students have a choice of two questions from the non-core idea they have studied and they answer one. AO1, AO2 and AO3 are assessed."
   ],
   "resourceBooklet": false
  },
  {
   "id": "C3",
   "name": "Component 3: Comparative Politics",
   "contentHeading": "Component 3: Comparative Politics",
   "paperCode": "9PL0/3A or 3B",
   "paperCodes": [
    "9PL0/3A",
    "9PL0/3B"
   ],
   "marks": 84,
   "weight": 33.33,
   "weightAsPrinted": "33⅓% of the qualification",
   "minutes": 120,
   "sections": [
    "Section A",
    "Section B",
    "Section C"
   ],
   "sectionDetail": [
    "Section A: this section is worth 12 marks. One 12-mark question from a choice of two, which assesses AO1 and AO2.",
    "Section B: this section is worth 12 marks. One compulsory 12-mark question focused on comparative theories, which assesses AO1 and AO2.",
    "Section C: this section is worth 60 marks. Two 30-mark questions from a choice of three, which assess AO1, AO2 and AO3."
   ],
   "resourceBooklet": false
  }
 ],
 "options": [
  {
   "id": "nonCore",
   "label": "Non-core political idea (Component 2, Section B) — students study \"one idea from the following: anarchism, ecologism, feminism, multiculturalism, nationalism\"",
   "choose": 1,
   "from": [
    "C2.Anarchism",
    "C2.Ecologism",
    "C2.Feminism",
    "C2.Multiculturalism",
    "C2.Nationalism"
   ]
  },
  {
   "id": "comparative",
   "label": "Comparative Politics route (Component 3) — \"Students study either USA (9PL0/3A) or Global (9PL0/3B)\"",
   "choose": 1,
   "from": [
    "3A.1",
    "3A.2",
    "3A.3",
    "3A.4",
    "3A.5",
    "3A.6",
    "3B.1",
    "3B.2",
    "3B.3",
    "3B.4",
    "3B.5",
    "3B.6"
   ],
   "routes": {
    "3A": {
     "name": "Government and Politics of the USA (9PL0/3A)",
     "topics": [
      "3A.1",
      "3A.2",
      "3A.3",
      "3A.4",
      "3A.5",
      "3A.6"
     ]
    },
    "3B": {
     "name": "Global Politics (9PL0/3B)",
     "topics": [
      "3B.1",
      "3B.2",
      "3B.3",
      "3B.4",
      "3B.5",
      "3B.6"
     ]
    }
   },
   "note": "The choice is by route, not by individual topic: a student takes either all six USA content areas (paper 9PL0/3A) or all six Global Politics content areas (paper 9PL0/3B). `choose: 1` means one route; `from` lists every topic id of both routes because the validator requires option choices to be topic ids."
  }
 ],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge and understanding of political institutions, processes, concepts, theories and issues.",
   "weight": 35,
   "byComponent": {
    "C1": 11.1,
    "C2": 11.1,
    "C3": 12.7
   }
  },
  {
   "id": "AO2",
   "label": "Analysis",
   "text": "Analyse aspects of politics and political information, including in relation to parallels, connections, similarities and differences.",
   "weight": 35,
   "byComponent": {
    "C1": 11.1,
    "C2": 11.1,
    "C3": 12.7
   }
  },
  {
   "id": "AO3",
   "label": "Evaluation",
   "text": "Evaluate aspects of politics and political information, including to construct arguments, make substantiated judgements and draw conclusions.",
   "weight": 30,
   "byComponent": {
    "C1": 11.1,
    "C2": 11.1,
    "C3": 7.9
   }
  }
 ],
 "markConventions": {
  "style": "levels",
  "summary": "Every extended answer is marked against a levels-based mark scheme: Appendix 1 tells students to \"refer to the relevant levels-based mark schemes provided in the sample assessment booklet\". Component 1 Section A (Political Participation, 60 marks) and Component 2 Section A (UK Government, 60 marks) each set one 30-mark source question requiring comparative analysis from a choice of two, plus one 30-mark essay question from a choice of two; all of these assess AO1, AO2 and AO3, and the command word Evaluate is worth AO1 (10 marks), AO2 (10 marks) and AO3 (10 marks). Component 1 Section B (Core Political Ideas) and Component 2 Section B (Non-core Political Ideas) each set one 24-mark question from a choice of two assessing AO1, AO2 and AO3; the command word To what extent is worth AO1 (8 marks), AO2 (8 marks) and AO3 (8 marks). Those ideas questions \"will focus on content areas 1 and 2 and require students to use the key ideas of thinkers (content area 3) in their answers\", and in Component 1 they \"will cover either one core political idea or two core political ideas (1 socialism, 1 liberalism)\". Component 3 sets one 12-mark question from a choice of two in Section A (AO1 and AO2), one compulsory 12-mark question focused on comparative theories in Section B (AO1 and AO2) — the command words Analyse and Examine are each worth AO1 (6 marks) and AO2 (6 marks) — and two 30-mark questions from a choice of three in Section C (AO1, AO2 and AO3). Sources in Component 1 and Component 2 Section A \"will be a single written (text) source only or a single source that combines both text and data (pie chart, tables, simple graphs such as a bar chart)\"; contextual information about each source is supplied but \"will not be discretely assessed\". The comparative theories are the rational, cultural and structural approaches in Paper 3A and realism, liberalism and the anarchical society / society of states theory in Paper 3B. Synopticity is assessed in Component 2 Section A non-source questions (drawing on Component 1), in Paper 3A Sections A and B (drawing on Components 1 and 2) and in Paper 3B Section B (drawing on core political ideas from Component 1).",
  "commandWords": [
   {
    "word": "Evaluate",
    "means": "To review ideas, issues and/or information and make substantiated judgements and draw conclusions. AO assessed: AO1 (10 marks), AO2 (10 marks), AO3 (10 marks).",
    "aoAssessed": "AO1 (10 marks) / AO2 (10 marks) / AO3 (10 marks)",
    "usedFor": "the 30-mark questions (Components 1 and 2 Section A; Component 3 Section C)"
   },
   {
    "word": "To what extent",
    "means": "To review political ideas and make substantiated judgements and draw conclusions. AO assessed: AO1 (8 marks), AO2 (8 marks), AO3 (8 marks).",
    "aoAssessed": "AO1 (8 marks) / AO2 (8 marks) / AO3 (8 marks)",
    "usedFor": "the 24-mark political ideas questions (Components 1 and 2 Section B)"
   },
   {
    "word": "Analyse",
    "means": "To deconstruct ideas, issues and/or information in detail in order to find connections, similarities and/or differences and provide evidence of reasoned thinking. AO assessed: AO1 (6 marks), AO2 (6 marks).",
    "aoAssessed": "AO1 (6 marks) / AO2 (6 marks)",
    "usedFor": "the 12-mark questions (Component 3 Sections A and B)"
   },
   {
    "word": "Examine",
    "means": "To consider an idea/concept carefully and in detail to identify what the idea/concept is and why it exists and compare ideas/concepts. AO assessed: AO1 (6 marks), AO2 (6 marks).",
    "aoAssessed": "AO1 (6 marks) / AO2 (6 marks)",
    "usedFor": "the 12-mark questions (Component 3 Sections A and B)"
   },
   {
    "word": "Demonstrate knowledge and understanding",
    "means": "The assessment objective AO1, as the document words it: Demonstrate knowledge and understanding of political institutions, processes, concepts, theories and issues. (Every question carries AO1 marks alongside the analysis and evaluation the command word demands.)",
    "aoAssessed": "AO1",
    "usedFor": "every question"
   }
  ],
  "commandWordsNote": "Appendix 1: Question paper command words (spec.txt page 67 = document page 63) lists exactly these four command words and no others. The specification defines no fifth command word, so none has been added; src/spec-validator.js requires at least five commandWords entries, so the writer of the full spec must decide how to meet that without inventing board wording (for example by splitting Evaluate into its source and non-source uses as the assessment sections describe them).",
  "essayShapes": [
   {
    "marks": 30,
    "minutes": 43,
    "paper": "Components 1 and 2, Section A (source question)",
    "structure": "\"One 30-mark question from a choice of two (each question uses a source) – students must complete one of these.\" The document calls this \"one source question requiring comparative analysis from a choice of two\". The source is \"a single written (text) source only or a single source that combines both text and data (pie chart, tables, simple graphs such as a bar chart)\", with context supplied that is not discretely assessed. Sources \"are selected to ensure that they give students opportunities to bring in their own knowledge and understanding, to engage in comparative analysis and to evaluate by making judgements and drawing conclusions\". Command word Evaluate: AO1 (10 marks), AO2 (10 marks), AO3 (10 marks) — so the answer must review the ideas, issues and/or information in the source and make substantiated judgements and draw conclusions. (Time: about 43 minutes, pro rata from the two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 30,
    "minutes": 43,
    "paper": "Components 1 and 2, Section A (non-source essay)",
    "structure": "\"Plus one 30-mark question from a choice of two – students must complete one of these.\" All questions assess AO1, AO2 and AO3 equally (Evaluate: AO1 10 / AO2 10 / AO3 10). In Component 2 these non-source questions carry the paper's synoptic assessment: they \"require students to draw on relevant knowledge and understanding from Component 1: UK politics and core political ideas\". (Time: about 43 minutes, pro rata from the two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 24,
    "minutes": 34,
    "paper": "Components 1 and 2, Section B (political ideas)",
    "structure": "\"One 24-mark question from a choice of two, which assesses AO1, AO2 and AO3.\" Command word To what extent: AO1 (8 marks), AO2 (8 marks), AO3 (8 marks) — \"to review political ideas and make substantiated judgements and draw conclusions\". \"These questions will focus on content areas 1 and 2 and require students to use the key ideas of thinkers (content area 3) in their answers.\" In Component 1 they \"will cover either one core political idea or two core political ideas (1 socialism, 1 liberalism)\"; in Component 2 the two questions come from the non-core idea the student has studied. (Time: about 34 minutes, pro rata from the two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 12,
    "minutes": 17,
    "paper": "Component 3, Section A",
    "structure": "\"One 12-mark question from a choice of two, which assesses AO1 and AO2.\" No AO3, so no judgement is required: the command words are Analyse (AO1 6 / AO2 6) — \"deconstruct ideas, issues and/or information in detail in order to find connections, similarities and/or differences and provide evidence of reasoned thinking\" — and Examine (AO1 6 / AO2 6) — \"consider an idea/concept carefully and in detail to identify what the idea/concept is and why it exists and compare ideas/concepts\". In Paper 3A this section is synoptic, drawing on Components 1 and 2. (Time: about 17 minutes, pro rata from the two-hour paper; the document sets no per-question time.)"
   },
   {
    "marks": 12,
    "minutes": 17,
    "paper": "Component 3, Section B (comparative theories)",
    "structure": "\"One compulsory 12-mark question focused on comparative theories, which assesses AO1 and AO2\" — \"Students answer one compulsory question, which will focus on topics from the comparative theories section.\" In Paper 3A the theories are the rational, cultural and structural approaches (content area 6, 6.1) applied to the required UK/US comparisons; in Paper 3B they are realism, liberalism and the anarchical society and society of states theory (content area 6). Synoptic in both papers: 3A draws on Components 1 and 2, 3B on core political ideas from Component 1. (Time: about 17 minutes, pro rata from the two-hour paper; the document sets no per-question time.)"
   }
  ],
  "timingNote": "The specification states only that each paper \"is 2 hours\" and is \"out of 84 marks\"; it allocates no time to individual questions, so essayShapes[].minutes is null rather than invented. Each paper is 120 minutes for 84 marks."
 },
 "source": {
  "url": "https://qualifications.pearson.com/content/dam/pdf/A%20Level/Politics/2017/Specification%20and%20sample%20assessments/9781446933602-gce2017-al-politics-issue4.pdf",
  "etag": "W/\"f430f-65aac24589449\"",
  "lastModified": "Fri, 04 Sep 2026 18:07:30 GMT",
  "length": 1000207,
  "checkedAt": "2026-09-11T06:09:50.608Z"
 },
 "topics": [
  {
   "id": "C1.1",
   "component": "C1",
   "option": null,
   "name": "Democracy and participation",
   "caseStudies": [
    "Key milestones in the widening of the franchise in relation to class, gender, ethnicity and age, including the 1832 Great Reform Act and the 1918, 1928 and 1969 Representation of the People Acts",
    "The work of the suffragists/suffragettes to extend the franchise",
    "The work of a current movement to extend the franchise",
    "Case studies of two different pressure groups, highlighting examples of how their methods and influence vary",
    "Other collective organisations and groups including think tanks, lobbyists and corporations",
    "Major milestones in their development, including the significance of Magna Carta and more recent developments, including the Human Rights Act 1998 and Equality Act 2010",
    "the work of two contemporary civil liberties pressure groups"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "Evaluate the extent to which the UK would benefit from a wider use of direct democracy.",
     "idea": "Current systems of representative democracy and direct democracy",
     "content": "The features of direct democracy and representative democracy; the similarities and differences between them; advantages and disadvantages of direct democracy and representative democracy and consideration of the case for reform."
    },
    {
     "code": "1.2",
     "q": "Analyse the extent to which the franchise in the UK is now fully inclusive.",
     "idea": "A wider franchise and debates over suffrage",
     "content": "Key milestones in widening the franchise in relation to class, gender, ethnicity and age, including the 1832 Great Reform Act and the 1918, 1928 and 1969 Representation of the People Acts; the work of the suffragists/suffragettes; the work of a current movement to extend the franchise."
    },
    {
     "code": "1.3",
     "q": "Evaluate the view that pressure groups are effective in influencing government policy.",
     "idea": "Pressure groups and other influences",
     "content": "How different pressure groups exert influence and how their methods and influence vary in contemporary politics; case studies of two different pressure groups, highlighting examples of how their methods and influence vary; other collective organisations and groups including think tanks, lobbyists and corporations, and their influence on government and Parliament."
    },
    {
     "code": "1.4",
     "q": "To what extent does the UK have a strong rights-based culture?",
     "idea": "Rights in context",
     "content": "Major milestones in the development of rights, including the significance of Magna Carta and more recent developments including the Human Rights Act 1998 and Equality Act 2010; debates on the extent, limits and tensions within the UK's rights-based culture, including how individual and collective rights may conflict, and the contribution of civil liberties pressure groups, including the work of two contemporary civil liberties pressure groups."
    }
   ]
  },
  {
   "id": "C1.2",
   "component": "C1",
   "option": null,
   "name": "Political parties",
   "caseStudies": [
    "The origins and historical development of the Conservative Party, the Labour Party and Liberal Democrat Party, and how this has shaped their ideas and current policies on the economy, law and order, welfare and foreign affairs",
    "The ideas and policies of two other minor parties",
    "explanations of why political parties have succeeded or failed, including debates on the influence of leadership and the media"
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "Examine the functions performed by political parties in the UK political system.",
     "idea": "Political parties",
     "content": "The functions and features of political parties in the UK's representative democracy; how parties are currently funded and debates on the consequences of the current funding system."
    },
    {
     "code": "2.2",
     "q": "Evaluate the extent to which the main political parties remain ideologically distinct.",
     "idea": "Established political parties",
     "content": "The origins and historical development of the Conservative Party, the Labour Party and Liberal Democrat Party, and how this has shaped their ideas and current policies on the economy, law and order, welfare and foreign affairs."
    },
    {
     "code": "2.3",
     "q": "Analyse the impact that minor parties have had on UK politics.",
     "idea": "Emerging and minor UK political parties",
     "content": "The importance of other parties in the UK; the ideas and policies of two other minor parties."
    },
    {
     "code": "2.4",
     "q": "To what extent does the UK now operate as a multi-party system?",
     "idea": "UK political parties in context",
     "content": "The development of a multi-party system and its implications for government; various factors that affect party success, including explanations of why political parties have succeeded or failed and debates on the influence of leadership and the media."
    }
   ]
  },
  {
   "id": "C1.3",
   "component": "C1",
   "option": null,
   "name": "Electoral systems",
   "caseStudies": [
    "First-past-the-post (FPTP), Additional Member System (AMS), Single Transferable Vote (STV), and Closed Proportional List System (CPLS)",
    "Comparison of first-past-the-post (FPTP) to a different electoral system in a devolved parliament/assembly",
    "How referendums have been used in the UK and their impact on UK political life since 1997"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "Evaluate the view that first-past-the-post should be replaced with a more proportional electoral system.",
     "idea": "Different electoral systems",
     "content": "First-past-the-post (FPTP), Additional Member System (AMS), Single Transferable Vote (STV), and Closed Proportional List System (CPLS); the advantages and disadvantages of these different systems; comparison of FPTP to a different electoral system in a devolved parliament/assembly."
    },
    {
     "code": "3.2",
     "q": "Analyse the impact that referendums have had on UK political life since 1997.",
     "idea": "Referendums and how they are used",
     "content": "How referendums have been used in the UK and their impact on UK political life since 1997; the case for and against referendums in a representative democracy."
    },
    {
     "code": "3.3",
     "q": "To what extent do different electoral systems produce different types of government?",
     "idea": "Electoral system analysis",
     "content": "Debates on why different electoral systems are used in the UK; the impact of different electoral systems on voter choice, party representation and the government or type of government appointed."
    }
   ]
  },
  {
   "id": "C1.4",
   "component": "C1",
   "option": null,
   "name": "Voting behaviour and the media",
   "caseStudies": [
    "Case studies of three elections (one from the period 1945–92, the 1997 election, and one since 1997), the results and their impact on parties and government",
    "Analysis of the national voting-behaviour patterns for these elections, revealed by national data sources and how and why they vary",
    "The role and impact of the media on politics during and between general elections, including the importance and relevance of media bias",
    "The importance and relevance of opinion polls"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "Evaluate the extent to which class remains the most important influence on voting behaviour.",
     "idea": "Case studies of three key general elections",
     "content": "Case studies of three elections (one from the period 1945–92, the 1997 election, and one since 1997), the results and their impact on parties and government; the factors that explain the outcomes, including the reasons for and impact of party policies and manifestos, election campaign techniques, leadership and the wider political context; class-based voting and other factors such as partisanship and voting attachment; gender, age, ethnicity and region as factors influencing voting behaviour, turnout and trends; analysis of the national voting-behaviour patterns for these elections, revealed by national data sources and how and why they vary."
    },
    {
     "code": "4.2",
     "q": "Analyse the extent to which the media influences the outcome of general elections.",
     "idea": "The influence of the media",
     "content": "The role and impact of the media on politics during and between general elections, including the importance and relevance of media bias; the importance and relevance of opinion polls."
    }
   ]
  },
  {
   "id": "C1.Conservatism",
   "component": "C1",
   "option": null,
   "name": "Core political idea: Conservatism",
   "caseStudies": [
    "Thomas Hobbes (1588–1679) — Order; Human nature",
    "Edmund Burke (1729–1797) — Change; Tradition and empiricism",
    "Michael Oakeshott (1901–1990) — Human imperfection; Pragmatism",
    "Ayn Rand (1905–1982) — Objectivism; Freedom",
    "Robert Nozick (1938–2002) — Libertarianism; Self-ownership"
   ],
   "ideas": [
    {
     "code": "Conservatism — core ideas: pragmatism",
     "q": "To what extent do conservatives agree on the value of pragmatism?",
     "idea": "Pragmatism over ideological thinking",
     "content": "Pragmatism is \"flexible approach to society with decisions made on the basis of what works\" — to cover links between pragmatism and traditional conservative and one-nation philosophy."
    },
    {
     "code": "Conservatism — core ideas: tradition",
     "q": "To what extent do conservatives agree on the importance of tradition?",
     "idea": "Tradition as accumulated wisdom",
     "content": "Tradition is the \"accumulated wisdom of past societies and a connection between the generations\" — to cover how this creates stability, links with organic change, and enhances humans' security."
    },
    {
     "code": "Conservatism — core ideas: human imperfection",
     "q": "To what extent do conservatives agree on human imperfection?",
     "idea": "Humans as flawed decision-makers",
     "content": "Human imperfection: \"humans are flawed which makes them incapable of making good decisions for themselves\" — to cover the three aspects of psychological, moral and intellectual imperfection."
    },
    {
     "code": "Conservatism — core ideas: organic society/state",
     "q": "To what extent do conservatives agree on the organic society/state?",
     "idea": "The organic society over the individual",
     "content": "Organic society/state: \"society/state is more important than any individual parts\" — to cover how this links to the underpinning of the beliefs of authority and hierarchy, and a cohesive society."
    },
    {
     "code": "Conservatism — core ideas: paternalism",
     "q": "To what extent do conservatives agree on paternalism?",
     "idea": "Paternalism as benign power from above",
     "content": "Paternalism is \"benign power exerted from above by the state, that governs in the interests of the people\" — to cover the different interpretations by traditional conservatives (an authoritarian approach, the state knows what is best so the people must do what they are told) and one-nation conservatives (there is an obligation on the wealthy to look after those who are unable to look after themselves) and why it is rejected by new right conservatives."
    },
    {
     "code": "Conservatism — core ideas: libertarianism",
     "q": "To what extent do conservatives agree on libertarianism?",
     "idea": "Libertarianism (specifically neo-liberalism)",
     "content": "Libertarianism (specifically neo-liberalism) \"upholds liberty, seeking to maximise autonomy and free choice, mainly in the economy\" — to cover the moral and economic values associated with this idea."
    },
    {
     "code": "Conservatism — differing views: traditional",
     "q": "To what extent do traditional conservatives and other strands of conservatism agree?",
     "idea": "Traditional conservatism",
     "content": "Traditional conservative — \"commitment to hierarchical and paternalistic values\", as one of the differing views and tensions within conservatism."
    },
    {
     "code": "Conservatism — differing views: one-nation",
     "q": "To what extent do one-nation conservatives agree with traditional conservatives?",
     "idea": "One-nation conservatism",
     "content": "One-nation conservative — \"updating of traditional conservatism in response to the emergence of capitalism\", as one of the differing views and tensions within conservatism."
    },
    {
     "code": "Conservatism — differing views: new right",
     "q": "To what extent do New Right conservatives agree with traditional and one-nation conservatives?",
     "idea": "The New Right: neo-liberal and neo-conservative",
     "content": "New right — \"the combining of neo-liberal and neo-conservative ideas\": neo-liberal is \"principally concerned with free-market economics and atomistic individualism\"; neo-conservative is \"principally concerned with the fear of social fragmentation, tough on law and order and public morality\"."
    },
    {
     "code": "Conservatism — key thinkers",
     "q": "To what extent do conservative thinkers agree with one another?",
     "idea": "Conservative thinkers and their key ideas",
     "content": "The key ideas of Thomas Hobbes, Edmund Burke, Michael Oakeshott, Ayn Rand and Robert Nozick, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C1.Liberalism",
   "component": "C1",
   "option": null,
   "name": "Core political idea: Liberalism",
   "caseStudies": [
    "John Locke (1632-1704) — Social contract theory; Limited government",
    "Mary Wollstonecraft (1759–97) — Reason; Formal equality",
    "John Stuart Mill (1806-73) — Harm principle; Tolerance",
    "John Rawls (1921-2002) — Theory of justice; The veil of ignorance",
    "Betty Friedan (1921-2006) — Legal equality; Equal opportunity"
   ],
   "ideas": [
    {
     "code": "Liberalism — core ideas: individualism",
     "q": "To what extent do liberals agree on the primacy of the individual?",
     "idea": "Individualism over the group",
     "content": "Individualism — \"the primacy of the individual in society over any group\" — to cover egoistical individualism and developmental individualism."
    },
    {
     "code": "Liberalism — core ideas: freedom/liberty",
     "q": "To what extent do liberals agree on the meaning of freedom?",
     "idea": "Freedom/liberty under the law",
     "content": "Freedom/liberty — \"the ability and right to make decisions in your own interests based on your view of human nature\" — to cover how liberals guarantee individual freedom, the link between freedom and individualism, that freedom is 'under the law'."
    },
    {
     "code": "Liberalism — core ideas: state",
     "q": "To what extent do liberals agree on the role of the state?",
     "idea": "The state as necessary evil",
     "content": "The state: it is \"'necessary' to avoid disorder, but 'evil' as it has potential to remove individual liberty, thus should be limited\" — this is linked to the liberal view of the economy."
    },
    {
     "code": "Liberalism — core ideas: rationalism",
     "q": "To what extent do liberals agree on human rationalism?",
     "idea": "Rationalism and human reason",
     "content": "Rationalism — \"the belief that humans are rational creatures, capable of reason and logic\" — to cover how rationalism underpins an individual's ability to define their own best interests and make their own moral choices, creating a progressive society."
    },
    {
     "code": "Liberalism — core ideas: equality/social justice",
     "q": "To what extent do liberals agree on equality and social justice?",
     "idea": "Equality and social justice",
     "content": "Equality/social justice — \"the belief that individuals are of equal value and that they should be treated impartially and fairly by society\" — to cover foundational and formal equality, and equality of opportunity."
    },
    {
     "code": "Liberalism — core ideas: liberal democracy",
     "q": "To what extent do liberals agree on liberal democracy?",
     "idea": "Liberal democracy",
     "content": "Liberal democracy — \"a democracy that balances the will of the people, as shown through elections, with limited government (state) and a respect for civil liberties in society\" — to cover why liberals support it as well as why they are concerned about it."
    },
    {
     "code": "Liberalism — differing views: classical",
     "q": "To what extent do classical liberals agree with modern liberals on the role of the state?",
     "idea": "Classical liberalism",
     "content": "Classical liberalism — \"early liberals who believed that individual freedom would best be achieved with the state playing a minimal role\", as one of the differing views and tensions within liberalism."
    },
    {
     "code": "Liberalism — differing views: modern",
     "q": "To what extent do modern liberals agree with classical liberals on freedom?",
     "idea": "Modern liberalism",
     "content": "Modern liberalism — \"emerged as a reaction against free-market capitalism, believing this had led to many individuals not being free. Freedom could no longer simply be defined as 'being left alone'.\""
    },
    {
     "code": "Liberalism — key thinkers",
     "q": "To what extent do liberal thinkers agree with one another?",
     "idea": "Liberal thinkers and their key ideas",
     "content": "The key ideas of John Locke, Mary Wollstonecraft, John Stuart Mill, John Rawls and Betty Friedan, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C1.Socialism",
   "component": "C1",
   "option": null,
   "name": "Core political idea: Socialism",
   "caseStudies": [
    "Karl Marx (1818–83) and Friedrich Engels (1820–95) — The centrality of social class; Humans as social beings",
    "Beatrice Webb (1858–1943) — 'The inevitability of gradualness'; The expansion of the state",
    "Rosa Luxemburg (1871–1919) — Evolutionary socialism and revisionism; Struggle by the proletariat for reform and democracy",
    "Anthony Crosland (1918–77) — The inherent contradictions in capitalism; State-managed capitalism",
    "Anthony Giddens (1938– ) — The rejection of state intervention; The role of the state"
   ],
   "ideas": [
    {
     "code": "Socialism — core ideas: collectivism",
     "q": "To what extent do socialists agree on the value of collectivism?",
     "idea": "Collectivism over individual effort",
     "content": "Collectivism — to cover how collective human effort is both of greater practical value to the economy and moral value to society than the effort of individuals."
    },
    {
     "code": "Socialism — core ideas: common humanity",
     "q": "To what extent do socialists agree on human nature as a common humanity?",
     "idea": "Common humanity and sociability",
     "content": "Common humanity — to cover the nature of humans as social creatures with a tendency to co-operation, sociability and rationality, and how the individual cannot be understood without reference to society, as human behaviour is socially determined."
    },
    {
     "code": "Socialism — core ideas: equality",
     "q": "To what extent do socialists agree on the nature of equality?",
     "idea": "Equality as a fundamental value",
     "content": "Equality — \"is a fundamental value of socialism\" — to cover the disagreements among socialists about the nature of equality and how it is critical to the state, society, the economy and human nature."
    },
    {
     "code": "Socialism — core ideas: social class",
     "q": "To what extent do socialists agree on the significance of social class?",
     "idea": "Social class",
     "content": "Social class — \"a group of people in society who have the same socioeconomic status\" — to cover the extent to which class impacts on socialists' views of society, the state and the economy."
    },
    {
     "code": "Socialism — core ideas: workers' control",
     "q": "To what extent do socialists agree on the need for workers' control?",
     "idea": "Workers' control of the economy",
     "content": "Workers' control — to cover the importance and the extent of control over the economy and/or state and how it is to be achieved."
    },
    {
     "code": "Socialism — differing views: revolutionary socialism",
     "q": "To what extent do revolutionary socialists agree with social democrats?",
     "idea": "Revolutionary socialism",
     "content": "Revolutionary socialism — \"socialism can be brought about only by the overthrow of the existing political and societal structures\", as one of the differing views and tensions within socialism."
    },
    {
     "code": "Socialism — differing views: social democracy",
     "q": "To what extent do social democrats agree with revolutionary socialists?",
     "idea": "Social democracy",
     "content": "Social democracy — \"an ideological view that wishes to humanise capitalism in the interests of social justice\", as one of the differing views and tensions within socialism."
    },
    {
     "code": "Socialism — differing views: third way",
     "q": "To what extent does the Third Way represent a genuine socialism?",
     "idea": "The Third Way",
     "content": "Third Way — \"a middle-ground alternative route to socialism and free-market capitalism\", as one of the differing views and tensions within socialism."
    },
    {
     "code": "Socialism — key thinkers",
     "q": "To what extent do socialist thinkers agree with one another?",
     "idea": "Socialist thinkers and their key ideas",
     "content": "The key ideas of Karl Marx and Friedrich Engels, Beatrice Webb, Rosa Luxemburg, Anthony Crosland and Anthony Giddens, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C2.1",
   "component": "C2",
   "option": null,
   "name": "The constitution",
   "caseStudies": [
    "Magna Carta (1215)",
    "Bill of Rights (1689)",
    "Act of Settlement (1701)",
    "Acts of Union (1707)",
    "Parliament Acts (1911 and 1949)",
    "Human Rights Act 1998"
   ],
   "ideas": [
    {
     "code": "1.1",
     "q": "Evaluate the view that the UK Constitution's uncodified, unentrenched nature is its greatest weakness.",
     "idea": "The nature and sources of the UK Constitution",
     "content": "The Constitution's development through key historical documents (Magna Carta 1215; Bill of Rights 1689; Act of Settlement 1701; Acts of Union 1707; Parliament Acts 1911 and 1949); its nature as unentrenched, uncodified and unitary, with the 'twin pillars' of parliamentary sovereignty and the rule of law; and its five main sources: statute law, common law, conventions, authoritative works and treaties."
    },
    {
     "code": "1.2",
     "q": "Evaluate the view that Labour's constitutional reforms of 1997–2010 were more significant than those made since 2010.",
     "idea": "How the constitution has changed since 1997",
     "content": "Labour's reforms 1997–2010: House of Lords reforms, electoral reform, devolution, the Human Rights Act 1998 and the Supreme Court. Major reforms to the constitution since 2010, to include the House of Lords, devolution, electoral reform and human rights."
    },
    {
     "code": "1.3",
     "q": "Evaluate the view that devolution has undermined the unitary nature of the UK Constitution.",
     "idea": "The role and powers of devolved bodies, and the impact of devolution",
     "content": "The role and powers of devolved bodies and the impact of devolution on the UK: devolution in England; the Scottish Parliament and Government; the Welsh Assembly (Senedd) and Government; and the Northern Ireland Assembly and Executive."
    },
    {
     "code": "1.4",
     "q": "Evaluate the view that the UK Constitution should be codified and entrenched.",
     "idea": "Debates on further reform",
     "content": "An overview of the extent to which the reforms since 1997 listed in section 1.2 have been successful or should be taken further; the extent to which devolution should be extended in England; and whether the UK constitution should be changed to be entrenched and codified, including a bill of rights."
    }
   ]
  },
  {
   "id": "C2.2",
   "component": "C2",
   "option": null,
   "name": "Parliament",
   "caseStudies": [
    "The different types of Peers",
    "The Salisbury Convention",
    "Parliamentary privilege",
    "Select and public bill committees",
    "The Official Opposition",
    "Prime Minister's Questions"
   ],
   "ideas": [
    {
     "code": "2.1",
     "q": "Evaluate the view that the House of Lords no longer has a meaningful role in the UK Parliament.",
     "idea": "The structure and role of the House of Commons and House of Lords",
     "content": "The selection of members of the House of Commons and House of Lords, including the different types of Peers; the main functions of the House of Commons and House of Lords and the extent to which these functions are fulfilled."
    },
    {
     "code": "2.2",
     "q": "Evaluate the view that the House of Commons is significantly more powerful than the House of Lords.",
     "idea": "The comparative powers of the House of Commons and House of Lords",
     "content": "The exclusive powers of the House of Commons; the main powers of the House of Lords; and debates about the relative power of the two Houses."
    },
    {
     "code": "2.3",
     "q": "Evaluate the view that the House of Lords has little real influence over the legislative process.",
     "idea": "The legislative process",
     "content": "The different stages a bill must go through to become law, and the interaction between the Commons and the Lords during the legislative process, including the Salisbury Convention."
    },
    {
     "code": "2.4",
     "q": "Evaluate the view that backbench MPs are unable to hold the Executive effectively to account.",
     "idea": "The ways in which Parliament interacts with the Executive",
     "content": "The role and significance of backbenchers in both Houses, including the importance of parliamentary privilege; the work of select and public bill committees; the role and significance of the Official Opposition; and the purpose and nature of ministerial question time, including Prime Minister's Questions."
    }
   ]
  },
  {
   "id": "C2.3",
   "component": "C2",
   "option": null,
   "name": "Prime Minister and Executive",
   "caseStudies": [
    "Students must study the influence of one Prime Minister from 1945 to 1997 and one Prime Minister from 1997 to the present",
    "Students may choose any pre-1997 and any post-1997 Prime Minister, provided that they study them in an equivalent level of detail, covering both events and policy, with examples that illustrate both control and a lack of control"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "Evaluate the view that the powers of the Executive are too great.",
     "idea": "The structure, role, and powers of the Executive",
     "content": "Its structure, including Prime Minister, the Cabinet, junior ministers and government departments; its main roles, including proposing legislation, proposing a budget, and making policy decisions within laws and budget; and its main powers, including Royal Prerogative powers, initiation of legislation and secondary legislative power."
    },
    {
     "code": "3.2",
     "q": "Evaluate the view that collective ministerial responsibility no longer operates effectively in UK government.",
     "idea": "The concept of ministerial responsibility",
     "content": "The concept of individual ministerial responsibility and the concept of collective ministerial responsibility."
    },
    {
     "code": "3.3.1",
     "q": "Evaluate the view that the Prime Minister now dominates the Cabinet.",
     "idea": "The power of the Prime Minister and the Cabinet",
     "content": "The factors governing the Prime Minister's selection of ministers; the factors that affect the relationship between the Cabinet and the Prime Minister; and the changing balance of power between the Prime Minister and Cabinet."
    },
    {
     "code": "3.3.2",
     "q": "Evaluate the extent to which your two chosen Prime Ministers were able to dictate events and determine policy.",
     "idea": "The power of the Prime Minister and Cabinet to dictate events and determine policy",
     "content": "Case studies of the influence of one Prime Minister from 1945 to 1997 and one Prime Minister from 1997 to the present, studied in an equivalent level of detail, covering both events and policy, with examples that illustrate both control and a lack of control."
    }
   ]
  },
  {
   "id": "C2.4",
   "component": "C2",
   "option": null,
   "name": "Relations between the branches",
   "caseStudies": [
    "The doctrine of ultra vires and judicial review",
    "The 'four freedoms' of the EU single market"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "Evaluate the view that the Supreme Court has become too powerful in its relations with the Executive and Parliament.",
     "idea": "The Supreme Court and its interactions with, and influence over, the legislative and policy-making processes",
     "content": "The role and composition of the Supreme Court; the key operating principles of the Supreme Court, including judicial neutrality and judicial independence and their extent; and the degree to which the Supreme Court influences both the Executive and Parliament, including the doctrine of ultra vires and judicial review."
    },
    {
     "code": "4.2",
     "q": "Evaluate the view that the Executive dominates Parliament in the UK political system.",
     "idea": "The relationship between the Executive and Parliament",
     "content": "The influence and effectiveness of Parliament in holding the Executive to account; the influence and effectiveness of the Executive in attempting to exercise dominance over Parliament; and the extent to which the balance of power between Parliament and the Executive has changed."
    },
    {
     "code": "4.3",
     "q": "Evaluate the view that leaving the EU has significantly restored UK Parliamentary sovereignty.",
     "idea": "The aims, role and impact of the European Union (EU) on the UK government",
     "content": "The aims of the EU, including the 'four freedoms' of the single market, political and economic union, and the extent to which these have been achieved; and the impact of leaving the EU on UK Parliamentary sovereignty in relation to policy making."
    },
    {
     "code": "4.4",
     "q": "Evaluate the view that parliamentary sovereignty is no longer a reality in the UK political system.",
     "idea": "The location of sovereignty in the UK political system",
     "content": "The distinction between legal sovereignty and political sovereignty; the extent to which sovereignty has moved between different branches of government; and where sovereignty can now be said to lie in the UK."
    }
   ]
  },
  {
   "id": "C2.Anarchism",
   "component": "C2",
   "option": "nonCore",
   "name": "Non-core political idea: Anarchism",
   "caseStudies": [
    "Max Stirner (1806-1856) — The self-interested and rational individual; The future society will be the Union of Egoists (anarchy is order)",
    "Pierre-Joseph Proudhon (1809-1865) — Opposition to private property and collectivism; The rejection and overthrow of the state",
    "Mikhail Bakunin (1814-1876) — Propaganda by the deed; Strong belief in human sociability",
    "Peter Kropotkin (1842-1921) — The scientific basis for mutual aid; Revolution to abolish the state and private property",
    "Emma Goldman (1869-1940) — The state is a cold monster; All forms of political participation in the state and society are corrupting and futile"
   ],
   "ideas": [
    {
     "code": "Anarchism — core ideas: rejection of the state",
     "q": "To what extent do anarchists agree that the state should be rejected?",
     "idea": "Rejection of the state",
     "content": "The state is immoral as it rules by physical coercion and deceit, unjust in its defence of economic inequality, and must be rejected due to its impact on human nature — to cover the arguments against the state, power and political participation and how the state can be overthrown."
    },
    {
     "code": "Anarchism — core ideas: liberty",
     "q": "To what extent do anarchists agree on the nature and value of liberty?",
     "idea": "Liberty as incompatible with authority",
     "content": "Liberty is incompatible with any form of political authority in the state, society or the economy and is critical to human nature — to cover the differing views of liberty and human nature within anarchism."
    },
    {
     "code": "Anarchism — core ideas: anarchy is order",
     "q": "To what extent do anarchists agree that anarchy is order?",
     "idea": "Anarchy is order",
     "content": "Social order occurs naturally and spontaneously, emerging from human nature, and is the key to the belief in a peaceful, stable, stateless society."
    },
    {
     "code": "Anarchism — core ideas: economic freedom",
     "q": "To what extent do anarchists agree on how economic freedom should be achieved?",
     "idea": "Economic freedom",
     "content": "The economy should be a space where free individuals can manage their own affairs without state ownership or regulation — to cover the different criticisms of existing economic systems and different ways economic freedom can be achieved."
    },
    {
     "code": "Anarchism — differing views: collectivist anarchism",
     "q": "To what extent do collectivist anarchists agree with individualist anarchists?",
     "idea": "Collectivist anarchism",
     "content": "Collectivist anarchism is committed to common ownership to nurture rational, altruistic and cooperative human nature, taking the forms of anarcho-communism, mutualism and anarcho-syndicalism."
    },
    {
     "code": "Anarchism — differing views: individualist anarchism",
     "q": "To what extent do individualist anarchists agree with collectivist anarchists?",
     "idea": "Individualist anarchism",
     "content": "Individualist anarchism is committed to freedom where rational, autonomous, competitive and self-interested individuals can make judgements in their own best interests, taking the forms of anarcho-capitalism and egoism."
    },
    {
     "code": "Anarchism — key thinkers",
     "q": "To what extent do anarchist thinkers agree with one another?",
     "idea": "Anarchist thinkers and their key ideas",
     "content": "The key ideas of Max Stirner, Pierre-Joseph Proudhon, Mikhail Bakunin, Peter Kropotkin and Emma Goldman, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C2.Ecologism",
   "component": "C2",
   "option": "nonCore",
   "name": "Non-core political idea: Ecologism",
   "caseStudies": [
    "Aldo Leopold (1887–1948) — The land ethic; The failure of traditional conservation efforts",
    "Rachel Carson (1907–1964) — The state and society does not have the authority to dominate nature; Nature should be seen holistically",
    "E. F. Schumacher (1911–1977) — The need to move to a Buddhist economics; Criticisms of the economics of modern materialism",
    "Murray Bookchin (1921–2006) — The environmental crisis emerges from existing social structures of oppression; Lessons should be learned from ecology",
    "Carolyn Merchant (1936– ) — The oppression and death of nature are linked to gender oppression; Opposition to the mechanistic, patriarchal view of science and nature"
   ],
   "ideas": [
    {
     "code": "Ecologism — core ideas: ecology",
     "q": "To what extent do ecologists agree on the political implications of ecology as a science?",
     "idea": "Ecology",
     "content": "The extent to which the study of the relationship between living beings and the environment has implications for deep- and shallow-green views of the state, society and the economy."
    },
    {
     "code": "Ecologism — core ideas: holism",
     "q": "To what extent do ecologists agree on the value of holism?",
     "idea": "Holism against the mechanistic world view",
     "content": "The opposition to the mechanistic world view of post-Enlightenment science that dominates the state and society in its view of the natural world and the economy."
    },
    {
     "code": "Ecologism — core ideas: environmental ethics",
     "q": "To what extent do ecologists agree on the scope of environmental ethics?",
     "idea": "Environmental ethics",
     "content": "The extent to which ethical responsibility extends beyond humans to the natural world, as well as the value and rights of nature, and how a new ethics would change the state, society and economy."
    },
    {
     "code": "Ecologism — core ideas: environmental consciousness",
     "q": "To what extent do ecologists agree on the need for environmental consciousness?",
     "idea": "Environmental consciousness",
     "content": "A state of being where one's sense of self is fully realised by a deep identification with the natural world — to cover the extent to which there needs to be a radical change in human nature and society."
    },
    {
     "code": "Ecologism — core ideas: post-materialist and anti-consumerism",
     "q": "To what extent do ecologists agree on the criticisms of materialism and consumerism?",
     "idea": "Post-materialism and anti-consumerism",
     "content": "The criticisms of materialism and consumerism and how to move beyond them, as a core idea and principle of ecologism."
    },
    {
     "code": "Ecologism — core ideas: sustainability",
     "q": "To what extent do ecologists agree on what sustainability requires?",
     "idea": "Sustainability",
     "content": "The capacity of the ecological system to maintain its health over time — to cover the need for, type and way of delivering sustainability, which has implications for the state, society and the economy."
    },
    {
     "code": "Ecologism — differing views: deep green",
     "q": "To what extent do deep green ecologists agree with shallow green and social ecology?",
     "idea": "Deep green ecologism",
     "content": "Deep green is one of the different types of ecologism: environmental consciousness, ecocentrism and strong sustainability."
    },
    {
     "code": "Ecologism — differing views: shallow green",
     "q": "To what extent do shallow green ecologists agree with deep green and social ecology?",
     "idea": "Shallow green ecologism",
     "content": "Shallow green is one of the different types of ecologism: enlightened anthropocentrism and weak sustainability."
    },
    {
     "code": "Ecologism — differing views: social ecology",
     "q": "To what extent do social ecologists agree with deep green and shallow green ecologists?",
     "idea": "Social ecology",
     "content": "Environmental degradation can be linked to existing social structures and sustainability is linked to radical social change, taking the forms of eco-socialism, eco-anarchism and eco-feminism."
    },
    {
     "code": "Ecologism — key thinkers",
     "q": "To what extent do ecologist thinkers agree with one another?",
     "idea": "Ecologist thinkers and their key ideas",
     "content": "The key ideas of Aldo Leopold, Rachel Carson, E. F. Schumacher, Murray Bookchin and Carolyn Merchant, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C2.Feminism",
   "component": "C2",
   "option": "nonCore",
   "name": "Non-core political idea: Feminism",
   "caseStudies": [
    "Charlotte Perkins Gilman (1860–1935) — Sex and domestic economics are hand in hand; Societal pressure",
    "Simone de Beauvoir (1908–1986) — Sex versus gender, 'one is not born, but rather becomes, a woman'; 'Otherness'",
    "Kate Millett (1934–2017) — Family; Portrayal of women in art and literature",
    "Sheila Rowbotham (1943– ) — Capitalism; The family",
    "bell hooks (1952–2021) — Women of colour; Intersectionality"
   ],
   "ideas": [
    {
     "code": "Feminism — core ideas: sex and gender",
     "q": "To what extent do feminists agree on the distinction between sex and gender?",
     "idea": "Sex and gender",
     "content": "Sex refers to biological differences between men and women, whereas gender refers to the different roles that society ascribes to men and women — to cover how feminists believe this distinction to be important in their analysis of society."
    },
    {
     "code": "Feminism — core ideas: patriarchy",
     "q": "To what extent do feminists agree on the nature and importance of patriarchy?",
     "idea": "Patriarchy",
     "content": "Society, state and the economy are characterised by systematic, institutionalised and pervasive gender oppression — to cover how patriarchy is understood by different types of feminism and how they view its importance."
    },
    {
     "code": "Feminism — core ideas: the personal is political",
     "q": "To what extent do feminists agree that the personal is political?",
     "idea": "The personal is political",
     "content": "The idea that all relationships, both in society and in private relationships, between men and women are based on power and dominance — to cover why feminists think this goes to the essence of patriarchy, and why some feminists believe this distinction is crucial and others believe it is dangerous."
    },
    {
     "code": "Feminism — core ideas: equality feminism and difference feminism",
     "q": "To what extent do equality feminists agree with difference feminists?",
     "idea": "Equality feminism and difference feminism",
     "content": "Equality feminists seek equality for men and women in society, whereas difference feminists argue that men and women have a fundamentally different nature from one another — to cover the core differences between these two types of feminism and how significant they are."
    },
    {
     "code": "Feminism — core ideas: intersectionality",
     "q": "To what extent do feminists agree on the significance of intersectionality?",
     "idea": "Intersectionality",
     "content": "Black and working-class women's experiences of patriarchy in state, society and the economy are different from white, middle-class women — to cover the impact of this newer strand of feminist thinking."
    },
    {
     "code": "Feminism — differing views: liberal feminism",
     "q": "To what extent do liberal feminists agree with socialist, radical and post-modern feminists?",
     "idea": "Liberal feminism",
     "content": "Liberal feminism is one of the different types of feminism: it sees individualism as the basis of gender equality."
    },
    {
     "code": "Feminism — differing views: socialist feminism",
     "q": "To what extent do socialist feminists agree with liberal, radical and post-modern feminists?",
     "idea": "Socialist feminism",
     "content": "Socialist feminism is one of the different types of feminism: it believes that gender inequality stems from economics and that capitalism creates patriarchy."
    },
    {
     "code": "Feminism — differing views: radical feminism",
     "q": "To what extent do radical feminists agree with liberal, socialist and post-modern feminists?",
     "idea": "Radical feminism",
     "content": "Radical feminism is one of the different types of feminism: it believes that the biggest problem facing society is gender inequality."
    },
    {
     "code": "Feminism — differing views: post-modern feminism",
     "q": "To what extent do post-modern feminists agree with liberal, socialist and radical feminists?",
     "idea": "Post-modern feminism",
     "content": "Post-modern feminism is one of the different types of feminism: it argues that patriarchy manifests in different ways depending on a woman's race, class etc."
    },
    {
     "code": "Feminism — key thinkers",
     "q": "To what extent do feminist thinkers agree with one another?",
     "idea": "Feminist thinkers and their key ideas",
     "content": "The key ideas of Charlotte Perkins Gilman, Simone de Beauvoir, Kate Millett, Sheila Rowbotham and bell hooks, used \"to exemplify the content from areas 1 and 2\"; content area 3 \"should focus on the key ideas given, rather than on the study of detailed biographical information on each thinker\"."
    }
   ]
  },
  {
   "id": "C2.Multiculturalism",
   "component": "C2",
   "option": "nonCore",
   "name": "Non-core political idea: Multiculturalism",
   "caseStudies": [
    "Isaiah Berlin (1909–97) — Value pluralism – liberal views in society hold no more moral authority than illiberal beliefs, so the state and society need to move beyond shallow diversity; Only in a liberal society, which respects liberty, can you value pluralism.",
    "Charles Taylor (1931– ) — The politics of recognition – based on the universal right for all to have their identity recognised; The politics of recognition is based on the equalisation of all rights and entitlements and the politics of difference.",
    "Bhikhu Parekh (1935– ) — The rejection of the universalist liberalism – importance of the individual being culturally embedded; The justifications for minority rights and deep diversity – cross-cultural dialogue can be transformative for majority and minority cultures, creating common citizenship.",
    "Tariq Modood (1952– ) — Strong cultural identities are a good thing – they need a complement of a vibrant, national narrative that emerges from debate between cultures; All four views of integration (assimilation, individualist, multiculturalism and cosmopolitanism) may be valid – provided it is the preferred choice of the individual or group and not imposed by the state or society.",
    "Will Kymlicka (1962– ) — Group differentiated rights – provided by the state, including self-government rights, polyethnic rights and representation rights; The justification for these rights – to be provided by the state and how they ensure full and equal participation for, and integration of, all cultures."
   ],
   "ideas": [
    {
     "code": "Multiculturalism — core ideas: politics of recognition",
     "q": "To what extent is the politics of recognition central to multiculturalist thought?",
     "idea": "Politics of recognition",
     "content": "The positive endorsement and celebration of cultural differences – to cover how oppression/cultural marginalisation affects human nature and the importance of recognition for the human sense of self, which underpins integration and social cohesion."
    },
    {
     "code": "Multiculturalism — core ideas: culture and identity",
     "q": "To what extent is culture critical to human nature and identity?",
     "idea": "Culture and identity",
     "content": "How culture is critical to human nature and society as it shapes personal, political and social identity and why minority cultures should be protected, as well as critiques of this approach."
    },
    {
     "code": "Multiculturalism — core ideas: minority rights",
     "q": "To what extent should the state grant minority rights?",
     "idea": "Minority rights",
     "content": "Why the state should and how it can address the specific needs of particular groups in society or the economy by granting specific rights to them, based on their cultural needs, as well as criticisms of these rights."
    },
    {
     "code": "Multiculturalism — core ideas: diversity",
     "q": "To what extent is diversity in the state, society and the economy positive?",
     "idea": "Diversity",
     "content": "Including different ethnicities, cultures and religions in the state, society and the economy is possible, is positive and should be celebrated – to cover the different justifications for supporting diversity, the different types of diversity and the criticisms of this idea."
    },
    {
     "code": "Multiculturalism — differing views: liberal multiculturalism",
     "q": "To what extent do multiculturalists agree on the role of the liberal state?",
     "idea": "Liberal multiculturalism",
     "content": "Individuals have legitimate interests in their culture and identity, and public institutions must take that into account in a liberal democratic framework that respects individual autonomy."
    },
    {
     "code": "Multiculturalism — differing views: pluralist multiculturalism",
     "q": "To what extent do multiculturalists agree on the liberal/non-liberal divide?",
     "idea": "Pluralist multiculturalism",
     "content": "A political theory that moves beyond the liberal/non-liberal divide and is based on the cultural embeddedness of human beings, the desirability of diversity and the recognition of the pluralism of each culture."
    },
    {
     "code": "Multiculturalism — differing views: cosmopolitan multiculturalism",
     "q": "To what extent do multiculturalists agree on a global, one-world view?",
     "idea": "Cosmopolitan multiculturalism",
     "content": "Promotes diversity and identity politics to encourage hybridity and a global, one-world view."
    },
    {
     "code": "Multiculturalism — differing views: the conservative criticism",
     "q": "To what extent is the conservative criticism of multiculturalism justified?",
     "idea": "The conservative criticism",
     "content": "The conservative criticism of multiculturalism: there can be no diversity within unity."
    },
    {
     "code": "Multiculturalism — key thinkers",
     "q": "How do the key thinkers of multiculturalism exemplify its core ideas and principles?",
     "idea": "Multiculturalist thinkers and their ideas",
     "content": "The key ideas of Isaiah Berlin, Charles Taylor, Bhikhu Parekh, Tariq Modood and Will Kymlicka, used to exemplify the content from areas 1 and 2."
    }
   ]
  },
  {
   "id": "C2.Nationalism",
   "component": "C2",
   "option": "nonCore",
   "name": "Non-core political idea: Nationalism",
   "caseStudies": [
    "Jean-Jacques Rousseau (1712–1778) — General will – that government should be based on the indivisible collective will of the 'community' and that nations have the right to govern themselves; Civic nationalism – where the state is legitimate because it is based on the active participation of its citizens.",
    "Johann Gottfried von Herder (1744–1803) — Cultural nationalism – suggested that every nation was different, and that every nation had its own unique cultural character; Volk – identified the Volk (the people) as the root of national culture and special nature (Volksgeist), which each nation should try to express.",
    "Giuseppe Mazzini (1805–1872) — Nationhood – believed that humans could express themselves only via their nation and that human freedom rested on the creation of one's own nation-state; 'Action' – rejected intellectualism and rationalism, and created an idea known as 'thought and action'.",
    "Charles Maurras (1868-1952) — Integral nationalism – an intensely emotional form of nationalism where individuals were encouraged to submerge themselves into their nation; Militarism – integral nationalism encourages nations to have a strong military ethos.",
    "Marcus Garvey (1887–1940) — Black pride – encouraged Black empowerment, pride, unity and self-determination; Pan-Africanism – that African people, in every part of the world, were one people and that they would never progress if they did not put aside their cultural and ethnic differences."
   ],
   "ideas": [
    {
     "code": "Nationalism — core ideas: nations",
     "q": "To what extent do nationalists agree on what constitutes a nation?",
     "idea": "Nations",
     "content": "People who identify themselves as a cohesive group based on shared values in society – to cover the idea that there are very different ways of defining a nation."
    },
    {
     "code": "Nationalism — core ideas: self-determination",
     "q": "To what extent should nations have the right to self-determination?",
     "idea": "Self-determination",
     "content": "The belief that nations should decide how they are governed – to cover the idea of the nation as a genuine political community capable of self-government."
    },
    {
     "code": "Nationalism — core ideas: nation-state",
     "q": "To what extent do nationalists agree on the desirability of the nation-state?",
     "idea": "Nation-state",
     "content": "A nation that rules itself in its own state and controls its own economy – to cover the understanding that the nation-state, while supported by most nationalists, is not universally supported."
    },
    {
     "code": "Nationalism — core ideas: culturalism",
     "q": "To what extent is nationalism grounded in shared cultural values?",
     "idea": "Culturalism",
     "content": "Nationalism is based on shared cultural societal values – to cover the idea that some forms of nationalism are grounded in more mystical, emotional ties and also to reflect on the negative side of nationalism."
    },
    {
     "code": "Nationalism — core ideas: racialism",
     "q": "To what extent is nationhood determined by biological factors?",
     "idea": "Racialism",
     "content": "Humankind can be divided into separate 'races', which each possess different natures – to cover the view held by a very small group of nationalists who believe that nationhood is determined purely by biological factors."
    },
    {
     "code": "Nationalism — core ideas: internationalism",
     "q": "To what extent is nationalism compatible with internationalism?",
     "idea": "Internationalism",
     "content": "The world should unite across boundaries to advance their common interests in society – to cover the idea that some forms of nationalism also have an internationalist perspective, whereas other internationalists reject nationalism."
    },
    {
     "code": "Nationalism — differing views: liberal nationalism",
     "q": "To what extent do nationalists agree on liberal nationalism?",
     "idea": "Liberal nationalism",
     "content": "Liberal nationalism seeks a world of autonomous nation-states."
    },
    {
     "code": "Nationalism — differing views: conservative nationalism",
     "q": "To what extent do nationalists agree on conservative nationalism?",
     "idea": "Conservative nationalism",
     "content": "Conservative nationalism exists to forge a sense of cohesion and unity within society."
    },
    {
     "code": "Nationalism — differing views: anti/post-colonialism",
     "q": "To what extent do nationalists agree on anti/post-colonialism?",
     "idea": "Anti/post-colonialism",
     "content": "Anti/post-colonialism rejects colonial rule and seeks to have governance returned to indigenous peoples."
    },
    {
     "code": "Nationalism — differing views: expansionist nationalism",
     "q": "To what extent do nationalists agree on expansionist nationalism?",
     "idea": "Expansionist nationalism",
     "content": "Expansionist nationalism rejects the right of all nations to self-determination, usually linked to chauvinism."
    },
    {
     "code": "Nationalism — key thinkers",
     "q": "How do the key thinkers of nationalism exemplify its core ideas and principles?",
     "idea": "Nationalist thinkers and their ideas",
     "content": "The key ideas of Jean-Jacques Rousseau, Johann Gottfried von Herder, Giuseppe Mazzini, Charles Maurras and Marcus Garvey, used to exemplify the content from areas 1 and 2."
    }
   ]
  },
  {
   "id": "3A.1",
   "component": "C3",
   "option": "comparative",
   "name": "USA: US Constitution and federalism",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1.1",
     "q": "Analyse the nature of the US Constitution as a codified, entrenched but vague document.",
     "idea": "The nature of the US Constitution",
     "content": "Vagueness of the document, codification and entrenchment; the constitutional framework (powers) of the US branches of government; the amendment process, including advantages and disadvantages of the formal process."
    },
    {
     "code": "1.2",
     "q": "Evaluate the effectiveness of the key features of the US Constitution today.",
     "idea": "The key features of the US Constitution",
     "content": "The key features of the US Constitution and an evaluation of their effectiveness today: federalism; separation of powers and checks and balances; bipartisanship; limited government."
    },
    {
     "code": "1.3",
     "q": "Examine the main characteristics of US federalism.",
     "idea": "The main characteristics of US federalism",
     "content": "The nature of the federal system of government and its relationship with the states."
    },
    {
     "code": "1.4",
     "q": "To what extent has the US Constitution achieved its aims, and does the USA remain federal today?",
     "idea": "Interpretations and debates around the US Constitution and federalism",
     "content": "The effectiveness of the US Constitution, its strengths and weaknesses and its impact on the US government today; the extent to which the USA remains federal today."
    }
   ]
  },
  {
   "id": "3A.2",
   "component": "C3",
   "option": "comparative",
   "name": "USA: US Congress",
   "caseStudies": [],
   "ideas": [
    {
     "code": "2.1",
     "q": "Analyse the structure of Congress.",
     "idea": "The structure of Congress",
     "content": "The structure of Congress: bicameral nature, the membership of Congress and the election cycle."
    },
    {
     "code": "2.1.1",
     "q": "Examine the distribution of powers within Congress.",
     "idea": "The distribution of powers within Congress",
     "content": "The distribution of powers within Congress: powers given to Congress in the Constitution, the exclusive powers of each House and the concurrent powers of Congress."
    },
    {
     "code": "2.2",
     "q": "Analyse the functions of Congress.",
     "idea": "The functions of Congress",
     "content": "The functions of Congress: representation, legislative and oversight, addressed in turn below."
    },
    {
     "code": "2.2.1",
     "q": "Evaluate the adequacy of Congress's representative role.",
     "idea": "Representation",
     "content": "Factors that affect voting behaviour of elected representatives within Congress: parties and caucuses, constituency, interest groups and lobbyists."
    },
    {
     "code": "2.2.2",
     "q": "Evaluate the effectiveness of the legislative process in Congress.",
     "idea": "Legislative",
     "content": "The legislative process, including the strengths and weaknesses of this process; the differences between the legislative process in each chamber; the policy significance of Congress – impact and effectiveness of laws passed."
    },
    {
     "code": "2.2.3",
     "q": "Examine Congress's oversight of the presidency and the Supreme Court.",
     "idea": "Oversight",
     "content": "Factors that influence the relationship between Congress and the presidency; Congress's role as a check on the other branches of government (presidency and Supreme Court) and the extent of its institutional effectiveness."
    },
    {
     "code": "2.3",
     "q": "To what extent has the role and power of Congress changed?",
     "idea": "Interpretations and debates around Congress",
     "content": "Changing roles and powers of Congress and their relative importance; the adequacy of its representative role; changing significance of parties in Congress; significance and effectiveness of the powers outlined in the Constitution."
    }
   ]
  },
  {
   "id": "3A.3",
   "component": "C3",
   "option": "comparative",
   "name": "USA: US presidency",
   "caseStudies": [
    "The significance of these powers with reference to presidents since 2000 (formal sources of presidential power)",
    "The significance of these powers with reference to presidents since 2000 (informal sources of presidential power)",
    "The significance of these limitations with reference to presidents since 2000",
    "With reference to presidents since 2000 — imperial and imperilled presidencies"
   ],
   "ideas": [
    {
     "code": "3.1",
     "q": "Evaluate the significance of the formal sources of presidential power with reference to presidents since 2000.",
     "idea": "Formal sources of presidential power",
     "content": "Formal sources of presidential power as outlined in the US Constitution and their use; the role as the Head of State and as the Head of Government; the significance of these powers with reference to presidents since 2000."
    },
    {
     "code": "3.2",
     "q": "Evaluate the significance of the informal sources of presidential power with reference to presidents since 2000.",
     "idea": "Informal sources of presidential power",
     "content": "The electoral mandate, executive orders, national events and the cabinet; powers of persuasion; the Executive Office of the President (EXOP), including the National Security Council (NSC), Office of Management and Budget (OMB) and the White House Office (WHO); the significance of these powers with reference to presidents since 2000."
    },
    {
     "code": "3.3",
     "q": "Analyse the presidency's relationships with, and limitations from, other institutions of government.",
     "idea": "The presidency",
     "content": "The presidency's relationships with other institutions of government and why these vary, and the limitations on presidential power and why these vary, addressed in 3.3.1 and 3.3.2."
    },
    {
     "code": "3.3.1",
     "q": "Analyse why the relationship between the presidency, Congress and the Supreme Court varies.",
     "idea": "Relationships between the presidency and Congress and the Supreme Court",
     "content": "Relationships between the presidency and the following institutions and why this varies: Congress and the Supreme Court."
    },
    {
     "code": "3.3.2",
     "q": "Evaluate the limitations on presidential power with reference to presidents since 2000.",
     "idea": "Limitations on presidential power",
     "content": "Limitations on presidential power and why this varies between presidents: changing nature of power over their term in office; Congress, the Supreme Court and the Constitution; the election cycle and divided government; the significance of these limitations with reference to presidents since 2000."
    },
    {
     "code": "3.4",
     "q": "To what extent is the US presidency imperial or imperilled, with reference to presidents since 2000?",
     "idea": "Interpretations and debates of the US presidency",
     "content": "How effectively presidents have achieved their aims; imperial and imperilled presidencies; the extent of presidential accountability to Congress; the role and power of the president in foreign policy, with reference to presidents since 2000."
    }
   ]
  },
  {
   "id": "3A.4",
   "component": "C3",
   "option": "comparative",
   "name": "USA: US Supreme Court and civil rights",
   "caseStudies": [
    "The judicial review process (Marbury vs Madison 1803 and Fletcher vs Peck 1810)",
    "The impact of the Supreme Court on public policy in the US, with a range of examples, including examples post-2005",
    "Political significance debate: the Living Constitution vs originalism; the role of judicial activism and judicial restraint and criticisms of each",
    "Rights protected by the Constitution, by the Bill of Rights, by subsequent constitutional amendments and by rulings of the Supreme Court",
    "The methods, influence and effectiveness of racial rights campaigns and the impact on current domestic policy: voting rights, affirmative action and representation",
    "The successes and failures of measures to promote equality, including affirmative action and immigration reform"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "Analyse the extent to which the Supreme Court's independence is secured by the judicial review process.",
     "idea": "The nature and role of the Supreme Court",
     "content": "The US Constitution; the independent nature of the Supreme Court; the judicial review process (Marbury vs Madison 1803 and Fletcher vs Peck 1810)."
    },
    {
     "code": "4.2",
     "q": "Evaluate the extent to which the appointment process produces a Supreme Court fit for purpose.",
     "idea": "The appointment process for the Supreme Court",
     "content": "Strengths and weaknesses of the appointment process; factors influencing the president's choice of nominee; the current composition and ideological balance of the Court."
    },
    {
     "code": "4.3",
     "q": "To what extent has the Supreme Court shaped public policy since 2005?",
     "idea": "The Supreme Court and public policy",
     "content": "The impact of the Supreme Court on public policy in the US, with a range of examples, including examples post-2005; the political significance debate between the Living Constitution and originalism; the role of judicial activism and judicial restraint and criticisms of each."
    },
    {
     "code": "4.4",
     "q": "Examine how civil liberties and rights are protected in the US today.",
     "idea": "The protection of civil liberties and rights in the US today",
     "content": "Rights protected by the Constitution, by the Bill of Rights, by subsequent constitutional amendments and by rulings of the Supreme Court."
    },
    {
     "code": "4.5",
     "q": "Evaluate the effectiveness of racial rights campaigns in shaping current US domestic policy.",
     "idea": "Race and rights in contemporary US politics",
     "content": "The methods, influence and effectiveness of racial rights campaigns and the impact on current domestic policy: voting rights, affirmative action and representation."
    },
    {
     "code": "4.6",
     "q": "Evaluate the view that the Supreme Court is a political rather than a judicial institution.",
     "idea": "Interpretations and debates of the US Supreme Court and civil rights",
     "content": "The political versus judicial nature of the Supreme Court; Living Constitution ideology as against originalism; how effectively civil and constitutional rights have been upheld by the Supreme Court and the effectiveness of this protection; the extent of their powers and the effectiveness of checks and balances; the successes and failures of measures to promote equality, including affirmative action and immigration reform."
    }
   ]
  },
  {
   "id": "3A.5",
   "component": "C3",
   "option": "comparative",
   "name": "USA: US democracy and participation",
   "caseStudies": [
    "The main processes to elect a US president, including the constitutional requirements, the invisible primary, primaries and caucuses, the role of National Party Conventions and the electoral college, and the resulting party system",
    "The role of campaign finance, the current legislation on campaign finance and the implications of Supreme Court Rulings",
    "Democrat and Republican attitudes towards: social and moral issues, including crime; government intervention in the economy; social welfare; immigration",
    "Democrats: liberals, moderates and conservatives. Republicans: moderates, social conservatives and fiscal conservatives",
    "Voters: how the following factors are likely to influence voting patterns and why, in relation to one recent presidential election campaign (since 2000) – race, religion, gender and education",
    "The influence, methods and power of at least one single interest group, professional group or policy group"
   ],
   "ideas": [
    {
     "code": "5.1.1",
     "q": "Analyse the significance of incumbency in US presidential and congressional elections.",
     "idea": "Elections and their significance",
     "content": "The main processes to elect a US president, including the constitutional requirements, the invisible primary, primaries and caucuses, the role of National Party Conventions and the electoral college, and the resulting party system; the importance of incumbency on a president seeking a second term; congressional elections and the significance of incumbency."
    },
    {
     "code": "5.1.2",
     "q": "Evaluate the extent to which campaign finance legislation limits the influence of money on US elections.",
     "idea": "Campaign finance",
     "content": "The role of campaign finance, the current legislation on campaign finance and the implications of Supreme Court Rulings."
    },
    {
     "code": "5.2.1",
     "q": "Analyse the differences between Democrat and Republican attitudes towards social welfare and immigration.",
     "idea": "The distribution of power and changing significance of the parties",
     "content": "Democrat and Republican attitudes towards: social and moral issues, including crime; government intervention in the economy; social welfare; immigration."
    },
    {
     "code": "5.2.2",
     "q": "Examine the extent of factionalism within the Democratic and Republican parties.",
     "idea": "The current conflicts and tendencies and the changing power and influence that exist within the parties",
     "content": "Democrats: liberals, moderates and conservatives; Republicans: moderates, social conservatives and fiscal conservatives."
    },
    {
     "code": "5.2.3",
     "q": "Evaluate the extent to which race, religion, gender and education explain voting patterns in a recent US presidential election.",
     "idea": "Coalition of supporters for each party",
     "content": "Voters: how race, religion, gender and education are likely to influence voting patterns and why, in relation to one recent presidential election campaign since 2000."
    },
    {
     "code": "5.3",
     "q": "Evaluate the influence of interest groups on US democracy.",
     "idea": "Interest groups in the USA – their significance, resources, tactics and debates about their impact on democracy",
     "content": "The influence, methods and power of at least one single interest group, professional group or policy group."
    },
    {
     "code": "5.4",
     "q": "To what extent is the Electoral College in need of reform?",
     "idea": "Interpretations and debates of US democracy and participation",
     "content": "Advantages and disadvantages of the electoral process and the Electoral College and the debate around reform; the role of campaign finance and difficulty in achieving effective reform; the role of incumbency in elections; the role and influence of interest groups."
    }
   ]
  },
  {
   "id": "3A.6",
   "component": "C3",
   "option": "comparative",
   "name": "USA: Comparative approaches",
   "caseStudies": [
    "Theoretical approaches – Rational, Cultural and Structural, and the different ways they explain similarities and differences between the government and politics of different countries",
    "6.2.1 Compare and debate the UK and US Constitutions: their nature (codified/uncodified) and their sources, provisions and principles, including separation of powers and checks and balances; the similarities and differences between the US federal system and the UK system of devolution",
    "6.2.3 Compare and debate the UK and US legislative branches: powers, strengths and weaknesses of each of the Houses; the extent to which each of the Houses are equal",
    "6.2.5 Compare and debate the UK and US executive branches: key similarities and differences between the role and powers of the US President and the UK Prime Minister; extent of accountability to the US and UK legislature",
    "6.2.7 Compare and debate the UK and US Supreme Courts and civil rights: basis for and relative extent of their powers; relative independence; effectiveness of the protection of rights; effectiveness of interest groups in the protection of civil rights in the USA and the UK",
    "6.2.9 Compare and debate the UK and US democracy and participation: the different nature of the party systems (two-party and multi-party); degree of internal unity within parties; the policy profiles of the two main parties in each country; debates around campaign finance and party funding; the relative power, methods and influence of pressure/interest groups",
    "6.2.2, 6.2.4, 6.2.6, 6.2.8, 6.2.10 The extent to which rational, cultural and structural approaches can be used to account for these similarities and differences"
   ],
   "ideas": [
    {
     "code": "6.1",
     "q": "Examine the differences between rational, cultural and structural approaches to comparative politics.",
     "idea": "Theoretical approaches to comparative politics",
     "content": "Rational approach – focuses on individuals, who act rationally to secure a beneficial outcome; Cultural approach – focuses on groups (voters, parties, pressure/interest groups), whose shared ideas, beliefs and values determine their actions; Structural approach – focuses on institutions and processes, where political outcomes are largely determined by formal processes."
    },
    {
     "code": "6.2.1",
     "q": "Analyse the similarities and differences between the UK and US Constitutions and their impact on politics and government.",
     "idea": "The UK and US Constitutions compared",
     "content": "Their nature (codified/uncodified) and their sources, provisions and principles, including separation of powers and checks and balances; the similarities and differences between the US federal system and the UK system of devolution."
    },
    {
     "code": "6.2.2",
     "q": "Evaluate the extent to which structural approaches best explain the differences between the UK and US Constitutions.",
     "idea": "Explaining UK–US constitutional similarities and differences",
     "content": "The extent to which rational, cultural and structural approaches can be used to account for the similarities and differences between the UK and US Constitutions and their impact on politics and government."
    },
    {
     "code": "6.2.3",
     "q": "Analyse the similarities and differences between the UK and US legislative branches and their impact on politics and government.",
     "idea": "The UK and US legislative branches compared",
     "content": "Powers, strengths and weaknesses of each of the Houses; the extent to which each of the Houses are equal."
    },
    {
     "code": "6.2.4",
     "q": "Evaluate the extent to which cultural approaches best explain the differences between the UK and US legislatures.",
     "idea": "Explaining UK–US legislative similarities and differences",
     "content": "The extent to which rational, cultural and structural approaches can be used to account for the similarities and differences between the UK and US legislative branches and their impact on politics and government."
    },
    {
     "code": "6.2.5",
     "q": "Analyse the similarities and differences between the US President and the UK Prime Minister.",
     "idea": "The UK and US executive branches compared",
     "content": "Key similarities and differences between the role and powers of the US President and the UK Prime Minister and their impact on politics and government; extent of accountability to the US and UK legislature."
    },
    {
     "code": "6.2.6",
     "q": "To what extent do structural approaches explain the differences between the US and UK executive branches?",
     "idea": "Explaining UK–US executive similarities and differences",
     "content": "The extent to which rational, cultural and structural approaches can be used to account for the similarities and differences between the UK and US executive branches and their impact on politics and government."
    },
    {
     "code": "6.2.7",
     "q": "Evaluate the extent to which the US Supreme Court protects rights more effectively than the UK Supreme Court.",
     "idea": "The UK and US Supreme Courts and civil rights compared",
     "content": "Basis for and relative extent of their powers; relative independence of the Supreme Court in the US and UK; effectiveness of the protection of rights in each country; effectiveness of interest groups in the protection of civil rights in the USA and the UK."
    },
    {
     "code": "6.2.8",
     "q": "Examine the extent to which rational approaches explain differences between the US and UK Supreme Courts.",
     "idea": "Explaining UK–US Supreme Court and civil rights similarities and differences",
     "content": "The extent to which rational, cultural and structural approaches can be used to account for the similarities and differences between the UK and US Supreme Courts and civil rights and their impact on politics and government."
    },
    {
     "code": "6.2.9",
     "q": "Analyse the differences between the US and UK party systems.",
     "idea": "UK and US democracy and participation compared",
     "content": "The different nature of the party systems (two-party and multi-party); degree of internal unity within parties; the policy profiles of the two main parties in each country; debates around campaign finance and party funding; the relative power, methods and influence of pressure/interest groups."
    },
    {
     "code": "6.2.10",
     "q": "Evaluate the extent to which cultural approaches explain differences between US and UK democracy and participation.",
     "idea": "Explaining UK–US democracy and participation similarities and differences",
     "content": "The extent to which rational, cultural and structural approaches can be used to account for the similarities and differences between UK and US democracy and participation and their impact on politics and government."
    }
   ]
  },
  {
   "id": "3B.1",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: The state and globalisation",
   "caseStudies": [
    "Nation-state – political community bound together by citizenship and nationality",
    "National sovereignty – the state's absolute power over citizens and subjects",
    "The debate between hyperglobalisers, globalisation sceptics and transformationalists, including the realist and liberal views",
    "The ways and extent to which globalisation addresses and resolves contemporary issues, such as poverty, conflict, human rights and the environment"
   ],
   "ideas": [
    {
     "code": "1.1.1",
     "q": "Examine the characteristics of the nation-state and of national sovereignty.",
     "idea": "Characteristics of a nation state and of national sovereignty",
     "content": "Nation-state — political community bound together by citizenship and nationality; national sovereignty — the state's absolute power over citizens and subjects; challenges to state sovereignty, and the advantages and disadvantages of state sovereignty."
    },
    {
     "code": "1.2.1",
     "q": "Analyse the process of globalisation.",
     "idea": "The process of globalisation",
     "content": "Globalisation as a complex web of interconnectedness — the factors driving globalisation are the interlinking of people (social), countries, institutions, culture, economics, technology and politics."
    },
    {
     "code": "1.2.2",
     "q": "Evaluate the impact of globalisation on the state system.",
     "idea": "The impact of globalisation on the state system",
     "content": "Widening and deepening interconnectedness and interdependence; challenge to state control over citizens in areas such as law; the development of international law; humanitarian and forcible intervention; the debate between hyperglobalisers, globalisation sceptics and transformationalists, including the realist and liberal views."
    },
    {
     "code": "1.3",
     "q": "Evaluate the view that globalisation has undermined the nation state and national sovereignty.",
     "idea": "Debates about the impact of globalisation, including its advantages and disadvantages",
     "content": "The impact of globalisation, and its implications for the nation state and national sovereignty, weighing its advantages and disadvantages."
    },
    {
     "code": "1.4",
     "q": "To what extent does globalisation address and resolve contemporary global issues?",
     "idea": "Globalisation and the resolution of contemporary issues",
     "content": "The ways and extent to which globalisation addresses and resolves contemporary issues, such as poverty, conflict, human rights and the environment."
    }
   ]
  },
  {
   "id": "3B.2",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: Global governance: political and economic",
   "caseStudies": [
    "The United Nations (UN) — origins and development, including its 1945 charter; the Security Council, General Assembly, Economic and Social Council, International Court of Justice",
    "North Atlantic Treaty Organisation (NATO) — its changing role, particularly since the end of the Cold War",
    "International Monetary Fund (IMF) and the World Bank",
    "The World Trade Organisation (WTO) and G7/G8 and G20",
    "The North-South divide and other measurements to include world-systems theory, dependency, orthodox and alternative measurements of poverty; classical economic development theory, structural theory, neo-classical development theory",
    "the legacy and impact of Structural Adjustment Programmes (SAPs); Poverty Reduction Strategy Papers (PRSPs); global economic conditions",
    "The role and significance of the global civil society and non-state actors, including non-governmental organisations (NGOs)"
   ],
   "ideas": [
    {
     "code": "2.1.1",
     "q": "Evaluate the role and significance of the United Nations.",
     "idea": "The United Nations (UN)",
     "content": "Origins and development of the UN, including its 1945 charter; role and significance of the UN to include the Security Council, General Assembly, Economic and Social Council, International Court of Justice, including their strengths and weaknesses."
    },
    {
     "code": "2.1.2",
     "q": "Examine the changing role and significance of NATO.",
     "idea": "North Atlantic Treaty Organisation (NATO)",
     "content": "Role and significance of NATO including its changing role, particularly since the end of the Cold War, and its strengths and weaknesses."
    },
    {
     "code": "2.2.1",
     "q": "Evaluate the role and significance of the IMF and the World Bank.",
     "idea": "International Monetary Fund (IMF) and the World Bank",
     "content": "Role and significance of the International Monetary Fund and the World Bank, including their strengths and weaknesses."
    },
    {
     "code": "2.2.2",
     "q": "Analyse the role and significance of the WTO and the G7/G8 and G20.",
     "idea": "The World Trade Organisation (WTO) and G7/G8 and G20",
     "content": "Role and significance of the World Trade Organisation and the G7/G8 and G20, including their strengths and weaknesses."
    },
    {
     "code": "2.2.3",
     "q": "Examine the significance of global economic governance for the issue of poverty.",
     "idea": "Significance of global economic governance for the issue of poverty",
     "content": "The North-South divide and other measurements to include world-systems theory, dependency, orthodox and alternative measurements of poverty; classical economic development theory, structural theory, neo-classical development theory."
    },
    {
     "code": "2.3",
     "q": "To what extent do the UN Security Council, IMF and World Bank effectively address and resolve contemporary global issues?",
     "idea": "The ways and extent to which these institutions address and resolve contemporary global issues",
     "content": "In particular: how the membership and structure of the UN Security Council, and the use of veto, prevent it from effectively addressing and resolving issues such as conflict, poverty, human rights and the environment; presure for reform and criticism, including how the legacy and impact of Structural Adjustment Programmes (SAPs), Poverty Reduction Strategy Papers (PRSPs) and global economic conditions affect the ability of the IMF and World Bank to address and resolve these issues."
    },
    {
     "code": "2.3.2",
     "q": "Evaluate the role and significance of global civil society and non-state actors in addressing global issues.",
     "idea": "The role and significance of global civil society and non-state actors",
     "content": "The role and significance of the global civil society and non-state actors, including non-governmental organisations (NGOs), in addressing and resolving the issues above."
    }
   ]
  },
  {
   "id": "3B.3",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: Global governance: human rights and environmental",
   "caseStudies": [
    "Origins and development of international law and institutions (International Court of Justice, International Criminal Court, special UN tribunals and European Court of Human Rights (ECHR))",
    "Sources of authority, including the 1948 Universal Declaration of Human Rights",
    "rise of humanitarian interventions and growth in 1990s, with examples of successful and unsuccessful intervention; reasons for selective interventionism; examples of alleged Western double standards/hypocrisy",
    "development of Responsibility to Protect (R2P) and how this may conflict with state sovereignty",
    "The role and significance of the United Nations Framework Convention on Climate Change (UNFCCC); the creation of the Intergovernmental Panel on Climate Change (IPCC)",
    "shallow-green ecology versus deep-green ecology; sustainable development and tragedy of the commons",
    "Strengths and weaknesses of international agreements, including key highlights from Rio, Kyoto, Paris",
    "The role and significance of the global civil society and non-state actors, including non-governmental organisations (NGOs)"
   ],
   "ideas": [
    {
     "code": "3.1.1",
     "q": "Examine the origins and development of international law and institutions in creating the concept of global politics.",
     "idea": "Origins and development of international law and institutions",
     "content": "Origins and development of international law and institutions — International Court of Justice, International Criminal Court, special UN tribunals and European Court of Human Rights (ECHR) — in creating the concept of global politics; sources of authority, including the 1948 Universal Declaration of Human Rights."
    },
    {
     "code": "3.1.2",
     "q": "Evaluate the key issues facing institutions dealing with human rights.",
     "idea": "Key issues facing institutions dealing with human rights",
     "content": "Impact on state sovereignty; rise of humanitarian interventions and growth in the 1990s, with examples of successful and unsuccessful intervention; reasons for selective interventionism; development of Responsibility to Protect (R2P) and how this may conflict with state sovereignty; examples of alleged Western double standards/hypocrisy."
    },
    {
     "code": "3.2.1",
     "q": "Analyse the role and significance of the UNFCCC and the IPCC.",
     "idea": "The United Nations Framework Convention on Climate Change (UNFCCC)",
     "content": "The role and significance of the United Nations Framework Convention on Climate Change; the creation of the Intergovernmental Panel on Climate Change (IPCC) and its role and significance."
    },
    {
     "code": "3.3.1",
     "q": "To what extent does international law effectively address and resolve contemporary global issues?",
     "idea": "How issues affect international law's effectiveness",
     "content": "Debate about the effectiveness and implications for state sovereignty, and the extent to which international law is accepted and enforced; performance of the international courts, including controversies."
    },
    {
     "code": "3.3.2",
     "q": "Evaluate the effectiveness of global environmental governance in addressing and resolving contemporary global issues.",
     "idea": "How issues affect global environmental governance",
     "content": "Competing views about how to tackle environmental issues, including shallow-green ecology versus deep-green ecology, and sustainable development and tragedy of the commons; strengths and weaknesses of international agreements, including key highlights from Rio, Kyoto, Paris; obstacles to international co-operation and agreement, including sovereignty, developed versus developing world division and disagreement over responsibility and measurement."
    },
    {
     "code": "3.3.3",
     "q": "Evaluate the role and significance of global civil society and non-state actors in addressing human rights and environmental issues.",
     "idea": "The role and significance of global civil society and non-state actors",
     "content": "The role and significance of the global civil society and non-state actors, including non-governmental organisations (NGOs), in addressing and resolving the issues above."
    }
   ]
  },
  {
   "id": "3B.4",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: Power and developments",
   "caseStudies": [
    "Great powers; superpowers, including the USA",
    "Emerging powers, including BRICS (Brazil, Russia, India, China and South Africa)",
    "The shift from US unipolarity to multipolarity since 2000",
    "Return of spheres of influece (e.g. Russia, USA, China)"
   ],
   "ideas": [
    {
     "code": "4.1",
     "q": "Analyse the use and effectiveness of hard and soft power.",
     "idea": "Different types of power",
     "content": "The use and effectiveness of hard power — military and economic — and soft power — diplomatic and cultural."
    },
    {
     "code": "4.2",
     "q": "Examine how and why state power is classified.",
     "idea": "Differing significance of states and state power classifications",
     "content": "Differing significance of states in global affairs and how and why state power is classified: great powers; superpowers, including the USA; emerging powers, including BRICS (Brazil, Russia, India, China and South Africa)."
    },
    {
     "code": "4.3",
     "q": "Evaluate the view that the world order has shifted decisively from unipolarity to multipolarity since 2000.",
     "idea": "Polarity and the changing world order since 2000",
     "content": "The implications of unipolarity/hegemony, bipolarity and multipolarity. Consideration of the changing nature of world order since 2000 to include: the shift from US unipolarity to multipolarity; return of spheres of influece (e.g. Russia, USA, China); decline of global institutions/rise of bilateralism and nationalism."
    },
    {
     "code": "4.4",
     "q": "Examine the consequences for global order of different systems of government.",
     "idea": "Different systems of government",
     "content": "The characteristics, examples and consequences for global order of: democratic, semi-democratic, non-democratic, autocratic states, failed states and rogue states."
    },
    {
     "code": "4.5",
     "q": "Analyse the development and spread of liberal economies, the rule of law and democracy.",
     "idea": "Development and spread of liberal economies, rule of law and democracy",
     "content": "Development and spread of: liberal economies; rule of law; democracy."
    },
    {
     "code": "4.6",
     "q": "Evaluate the extent to which the changing relationships and actions of states in relation to power and developments address and resolve contemporary global issues.",
     "idea": "Power, developments and contemporary global issues",
     "content": "The ways and extent to which the changing relationships and actions of states in relation to power and developments address and resolve contemporary global issues, such as those involving conflict, poverty, human rights and the environment."
    }
   ]
  },
  {
   "id": "3B.5",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: Regionalism and the EU",
   "caseStudies": [
    "North American Free Trade Association (NAFTA)/United States Mexico Canada Agreement (USMCA)",
    "African Union (AU)",
    "Arab League",
    "Association of South East Asian Nations (ASEAN)",
    "The European Union (EU)"
   ],
   "ideas": [
    {
     "code": "5.1.1",
     "q": "Examine the different forms of regionalism.",
     "idea": "The different forms of regionalism",
     "content": "Growth of regionalism and regionalism in different forms, including economic, security and political."
    },
    {
     "code": "5.1.2",
     "q": "Analyse the debates about and the reasons for and significance of regionalism.",
     "idea": "Debates about, and reasons for, regionalism",
     "content": "Debates about and the reasons for and significance of regionalism: the relationship between regionalism and globalisation; prospects for political regionalism and regional governance; the impact on state sovereignty."
    },
    {
     "code": "5.2",
     "q": "Examine the development of regional organisations excluding the EU.",
     "idea": "Regional organisations excluding the EU",
     "content": "Development of regional organisations, excluding the EU: North American Free Trade Association (NAFTA)/United States Mexico Canada Agreement (USMCA); African Union (AU); Arab League; Association of South East Asian Nations (ASEAN)."
    },
    {
     "code": "5.3",
     "q": "Analyse the factors that have fostered European integration and the major developments through which this has occurred.",
     "idea": "Factors fostering European integration",
     "content": "Factors that have fostered European integration and the major developments through which this has occurred: role and objectives of the European Union (EU); powers of its key institutions and the process of enlargement; key treaties and agreements; economic and monetary union; debates about supranational versus intergovernmental approaches."
    },
    {
     "code": "5.4",
     "q": "Evaluate the significance of the EU as an international body/global actor.",
     "idea": "Significance of the EU as a global actor",
     "content": "Significance of the EU as an international body/global actor, including the constraints and obstacles affecting its political, economic, structural and military influence in global politics."
    },
    {
     "code": "5.5",
     "q": "Evaluate the ways and extent to which regionalism addresses and resolves contemporary global issues.",
     "idea": "Regionalism and contemporary global issues",
     "content": "The ways and extent to which regionalism addresses and resolves contemporary global issues involving conflict, poverty, human rights and the environment."
    }
   ]
  },
  {
   "id": "3B.6",
   "component": "C3",
   "option": "comparative",
   "name": "Global politics: Comparative theories",
   "caseStudies": [
    "the state and globalisation",
    "global governance: political and economic",
    "global governance: human rights and environmental",
    "power and developments",
    "regionalism and the EU"
   ],
   "ideas": [
    {
     "code": "6.1",
     "q": "Analyse the main ideas of realism.",
     "idea": "Main ideas of realism",
     "content": "States as key actors in global politics and the balance of power (state sovereignty); international anarchy and its implications; inevitability of war; the security dilemma."
    },
    {
     "code": "6.2",
     "q": "Analyse the main ideas of liberalism.",
     "idea": "Main ideas of liberalism",
     "content": "The significance of morality and optimism on human nature; possibility of harmony and balance; complex interdependence; likelihood of global governance; impact and growth of international organisations."
    },
    {
     "code": "6.3",
     "q": "Examine the divisions between realism and liberalism.",
     "idea": "Divisions between realism and liberalism",
     "content": "Divisions between realism and liberalism in relation to: human nature and power; order and security and the likelihood of conflict; impact of international organisations and the significance of states."
    },
    {
     "code": "6.4",
     "q": "Analyse the main ideas of the anarchical society and society of states theory.",
     "idea": "The anarchical society and society of states theory",
     "content": "Main ideas of the anarchical society and society of states theory: acceptance that there is anarchy in the global system — absence of overarching authority; states have an informal understanding that ensures a degree of co-operation — based on norms and rules that increase levels of trust and reciprocal behaviour."
    },
    {
     "code": "6.5",
     "q": "Evaluate the extent to which realism and liberalism explain recent developments (since 2000) in global politics.",
     "idea": "Evaluating realism and liberalism against recent developments",
     "content": "An evaluation of the extent to which realism and liberalism explain recent developments (since 2000) in global politics, through the study of relevant case studies that cover each of the other content sections: the state and globalisation; global governance: political and economic; global governance: human rights and environmental; power and developments; regionalism and the EU."
    }
   ]
  }
 ]
};
module.exports = { SPEC_9PL0 };
