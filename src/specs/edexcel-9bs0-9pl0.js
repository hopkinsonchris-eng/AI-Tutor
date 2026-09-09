/* Edexcel A level Business (9BS0) and Politics (9PL0) — spec maps, paraphrased.
   Structure and weightings from Pearson's published specifications; verify figures against
   qualifications.pearson.com before relying on them. Content statements are summarised, not copied. */

const SPEC_9BS0 = {
  id: 'EDX-9BS0', board: 'Pearson Edexcel', subject: 'Business', code: '9BS0', level: 'A level',
  version: 'Specification Issue 3 structure; verify against Pearson before relying on any figure', firstExam: 2017, essaySubject: true,
  components: [
    { id: 'P1', name: 'Marketing, people and global businesses', paperCode: '9BS0/01', marks: 100, weight: 35, minutes: 120, sections: ['A and B: data response on Themes 1 and 4', 'C: one essay from a choice of two'] },
    { id: 'P2', name: 'Business activities, decisions and strategy', paperCode: '9BS0/02', marks: 100, weight: 35, minutes: 120, sections: ['A and B: data response on Themes 2 and 3', 'C: one essay from a choice of two'] },
    { id: 'P3', name: 'Investigating business in a competitive environment', paperCode: '9BS0/03', marks: 100, weight: 30, minutes: 120, sections: ['A: questions on a broad context (pre-released)', 'B: questions on a specific business within that context'], preRelease: true, coversAll: true }
  ],
  options: [],
  ao: [
    { id: 'AO1', label: 'Knowledge', text: 'Demonstrate knowledge of terms, concepts, theories, methods and models.' },
    { id: 'AO2', label: 'Application', text: 'Apply knowledge and understanding to business contexts and problems.' },
    { id: 'AO3', label: 'Analysis', text: 'Analyse issues, showing an understanding of their impact on business.' },
    { id: 'AO4', label: 'Evaluation', text: 'Evaluate qualitative and quantitative evidence to make informed judgements and propose evidence-based solutions.' }
  ],
  markConventions: {
    style: 'levels',
    summary: 'Questions of 6 marks and above are marked in levels across AO1\u2013AO4; short questions are point-marked. Application to the given business is non-negotiable — a generic answer sits in the bottom level however accurate. Evaluation questions need a justified judgement that weighs it depends on factors.',
    commandWords: [
      { word: 'Define / What is meant by', means: '2 marks: a precise definition, ideally with a brief example.' },
      { word: 'Calculate', means: 'Show the formula, the working and the units. Method marks exist.' },
      { word: 'Explain', means: '4 marks: knowledge plus development plus application to the business.' },
      { word: 'Analyse', means: '6 marks: two developed chains of reasoning applied to the context.' },
      { word: 'Discuss', means: '8 marks: balanced points, developed and applied, no formal judgement required but welcome.' },
      { word: 'Assess', means: '10 or 12 marks: developed analysis both ways plus a supported judgement.' },
      { word: 'Evaluate', means: '20 marks: essay with balanced analysis, application throughout, a weighted judgement and recognition of what it depends on.' }
    ],
    essayShapes: [
      { marks: 20, minutes: 25, structure: 'Brief context-specific introduction; two or three arguments for, each a full chain applied to the business; counter-arguments; a weighted judgement that names the deciding factor (it depends on\u2026).' },
      { marks: 12, minutes: 15, structure: 'Two developed and applied points with a counterpoint; short justified judgement.' },
      { marks: 10, minutes: 12, structure: 'Two developed and applied points, one counterpoint, a clear judgement.' },
      { marks: 8, minutes: 10, structure: 'Two balanced, developed, applied points; a brief conclusion.' },
      { marks: 4, minutes: 5, structure: 'One point: knowledge \u2192 development \u2192 application.' }
    ]
  },
  topics: [
    { id: 'T1', component: 'P1', option: null, name: 'Theme 1: Marketing and people', caseStudies: ['Real businesses for every marketing and people concept, drawn from the news'],
      ideas: [
        { code: '1.1', q: 'How do businesses meet customer needs?', idea: 'Meeting customer needs', content: 'Mass and niche markets, dynamic markets, online retailing, market research (primary/secondary, quantitative/qualitative, sampling), market positioning and the marketing map, competitive advantage, product differentiation, adding value.' },
        { code: '1.2', q: 'How do demand, supply and price interact?', idea: 'The market', content: 'Factors shifting demand and supply, market equilibrium, price and income elasticity of demand and their business significance.' },
        { code: '1.3', q: 'How is the marketing mix used?', idea: 'Marketing mix and strategy', content: 'Product life cycle and extension strategies, Boston Matrix, Ansoff matrix, pricing strategies, distribution, promotion and branding, marketing strategies for mass and niche markets, consumer behaviour and loyalty.' },
        { code: '1.4', q: 'How are people managed?', idea: 'Managing people', content: 'Staffing approaches (flexible workforce, dismissal and redundancy), recruitment, selection, training, organisational structures, motivation theories (Taylor, Maslow, Herzberg), financial and non-financial motivation, leadership styles.' },
        { code: '1.5', q: 'What makes entrepreneurs and leaders?', idea: 'Entrepreneurs and leaders', content: 'Roles and characteristics of entrepreneurs, business objectives, forms of business (sole trader to plc, franchising, social enterprise), moving from entrepreneur to leader, intrapreneurship.' }
      ], skills: ['Elasticity calculations', 'Market research interpretation', 'Marketing map construction'] },
    { id: 'T2', component: 'P2', option: null, name: 'Theme 2: Managing business activities', caseStudies: ['Finance decisions and external shocks from real businesses'],
      ideas: [
        { code: '2.1', q: 'How do businesses raise finance?', idea: 'Raising finance', content: 'Internal and external sources, liability, planning and cash-flow forecasts, break-even analysis.' },
        { code: '2.2', q: 'How do businesses plan finance?', idea: 'Financial planning', content: 'Sales forecasting, sales revenue and costs, break-even, budgets and variances.' },
        { code: '2.3', q: 'How is finance managed?', idea: 'Managing finance', content: 'Profit (gross, operating, net), profit margins, statement of comprehensive income, liquidity (current and acid-test ratios), working capital, causes of business failure.' },
        { code: '2.4', q: 'How are resources managed?', idea: 'Resource management', content: 'Production methods, productivity, efficiency, capacity utilisation, stock control (JIT, buffer stocks), quality management (TQM, kaizen).' },
        { code: '2.5', q: 'What external influences affect business?', idea: 'External influences', content: 'Economic influences (inflation, exchange rates, interest rates, taxation, the business cycle), legislation (consumer protection, employee protection, environmental, competition), the competitive environment (Porter\u2019s five forces).' }
      ], skills: ['Break-even and margin of safety', 'Ratio calculation and interpretation', 'Variance analysis'] },
    { id: 'T3', component: 'P2', option: null, name: 'Theme 3: Business decisions and strategy', caseStudies: ['Strategic decisions of large real businesses'],
      ideas: [
        { code: '3.1', q: 'How do businesses set objectives and strategy?', idea: 'Business objectives and strategy', content: 'Corporate objectives, theories of corporate strategy (Ansoff, Porter\u2019s generic strategies, portfolio analysis), SWOT, impact of external influences (PESTLE, Porter\u2019s five forces).' },
        { code: '3.2', q: 'How do businesses grow?', idea: 'Business growth', content: 'Organic and inorganic growth, mergers and takeovers, economies and diseconomies of scale, overtrading, reasons for staying small.' },
        { code: '3.3', q: 'How do businesses make decisions?', idea: 'Decision-making techniques', content: 'Quantitative sales forecasting, investment appraisal (payback, ARR, NPV), decision trees, critical path analysis.' },
        { code: '3.4', q: 'What influences business decisions?', idea: 'Influences on business decisions', content: 'Corporate influences (short- versus long-termism, evidence-based versus subjective decisions), corporate culture, shareholders versus stakeholders, business ethics.' },
        { code: '3.5', q: 'How is competitiveness assessed?', idea: 'Assessing competitiveness', content: 'Interpreting financial statements (statement of financial position, gearing, ROCE), human resource measures (labour productivity, turnover, absenteeism).' },
        { code: '3.6', q: 'How is change managed?', idea: 'Managing change', content: 'Causes and effects of change, key factors in successful change, scenario planning, risk assessment, contingency planning.' }
      ], skills: ['Investment appraisal', 'Decision trees', 'Critical path', 'Gearing and ROCE'] },
    { id: 'T4', component: 'P1', option: null, name: 'Theme 4: Global business', caseStudies: ['Multinationals entering and operating in overseas markets'],
      ideas: [
        { code: '4.1', q: 'What is globalisation?', idea: 'Globalisation', content: 'Growing economies (BRICS, MINT), international trade and business growth, factors contributing to globalisation, protectionism, trading blocs.' },
        { code: '4.2', q: 'How do businesses expand globally?', idea: 'Global markets and business expansion', content: 'Conditions prompting trade, assessing a country as a market or production location, reasons for global mergers and joint ventures, global competitiveness.' },
        { code: '4.3', q: 'How is marketing adapted globally?', idea: 'Global marketing', content: 'Global marketing strategies (glocalisation, standardisation versus adaptation), global niche markets, cultural and social factors.' },
        { code: '4.4', q: 'How do global industries and companies behave?', idea: 'Global industries and companies (MNCs)', content: 'Impact of MNCs on the local and national economy, ethics (pay, conditions, environment, supply chains, marketing), controlling MNCs (political influence, legal control, pressure groups, social media).' }
      ], skills: ['Exchange-rate impact calculations', 'Interpreting trade data'] }
  ],
  skills: { quantitative: ['Elasticities', 'Break-even', 'Ratios', 'Investment appraisal', 'Decision trees', 'Critical path', 'Exchange rates'], qualitative: ['Reading a business case', 'Balancing stakeholder views'], geoLocated: [] }
};

const SPEC_9PL0 = {
  id: 'EDX-9PL0', board: 'Pearson Edexcel', subject: 'Politics', code: '9PL0', level: 'A level',
  version: 'Specification Issue 3 structure; verify against Pearson before relying on any figure', firstExam: 2019, essaySubject: true,
  components: [
    { id: 'C1', name: 'UK Politics (with core political ideas)', paperCode: '9PL0/01', marks: 84, weight: 33.34, minutes: 120, sections: ['A: UK politics — one 30-mark source question and one 30-mark essay', 'B: Core political ideas — one 24-mark question'] },
    { id: 'C2', name: 'UK Government (with a non-core idea)', paperCode: '9PL0/02', marks: 84, weight: 33.33, minutes: 120, sections: ['A: UK government — one 30-mark source question and one 30-mark essay', 'B: Non-core political idea — one 24-mark question'] },
    { id: 'C3', name: 'Comparative politics', paperCode: '9PL0/3A or 3B', marks: 84, weight: 33.33, minutes: 120, sections: ['A: one 12-mark question', 'B: one 12-mark comparative question', 'C: two 30-mark essays'] }
  ],
  options: [
    { id: 'nonCore', label: 'Non-core political idea (Component 2)', choose: 1, from: ['2.5a', '2.5b', '2.5c', '2.5d', '2.5e'] },
    { id: 'comparative', label: 'Comparative route (Component 3)', choose: 1, from: ['3A', '3B'] }
  ],
  ao: [
    { id: 'AO1', label: 'Knowledge and understanding', text: 'Demonstrate knowledge and understanding of political institutions, processes, concepts, theories and issues.' },
    { id: 'AO2', label: 'Analysis', text: 'Analyse aspects of politics and political information, including in relation to parallels, connections, similarities and differences.' },
    { id: 'AO3', label: 'Evaluation', text: 'Evaluate aspects of politics and political information, including to construct arguments, make substantiated judgements and draw conclusions.' }
  ],
  markConventions: {
    style: 'levels',
    summary: 'All three AOs are equally weighted and every extended answer is marked in levels. Evaluation must run through the essay, not appear only in the conclusion. Source questions require both sources to be used and their arguments analysed and evaluated; ideas questions need the key thinkers and the tensions within the ideology.',
    commandWords: [
      { word: 'Evaluate the view that', means: '30 marks: a sustained argument reaching a substantiated judgement; both sides analysed, one preferred, with reasons.' },
      { word: 'Using the source, evaluate', means: '30 marks: the arguments must come from the source, then be analysed and evaluated with your own knowledge. Ignore the source and the answer fails.' },
      { word: 'To what extent', means: '24 marks (ideas): weigh agreement and disagreement within the ideology, citing key thinkers, and reach a qualified judgement.' },
      { word: 'Examine', means: '12 marks (comparative, Component 3): analyse similarities and differences with explanation, no judgement required.' },
      { word: 'Analyse the differences / similarities', means: '12 marks: comparative theories (rational, cultural, structural) must be used explicitly.' },
      { word: 'Explain', means: 'Reasons and mechanisms, illustrated with examples.' }
    ],
    essayShapes: [
      { marks: 30, minutes: 45, structure: 'Introduction stating the line of argument; three themes, each analysing the argument for, the counter-argument, and a mini-judgement with recent examples; a conclusion that answers the exact question and says which side wins and why.' },
      { marks: 24, minutes: 30, structure: 'Ideas essay: identify the tensions, use named thinkers on each side, reach a judgement on the extent of agreement.' },
      { marks: 12, minutes: 15, structure: 'Comparative: three points of similarity or difference, each explained with an example from both systems; theory named where required.' }
    ]
  },
  topics: [
    { id: '1.1', component: 'C1', option: null, name: 'Democracy and participation', caseStudies: ['Recent UK examples of participation, pressure groups and rights cases'],
      ideas: [
        { code: '1.1.1', q: 'How democratic is the UK?', idea: 'Representative and direct democracy', content: 'Features, similarities and differences; advantages and disadvantages of each; the case for reform and the claim of a participation crisis.' },
        { code: '1.1.2', q: 'How democratic is the UK?', idea: 'A wider franchise and debates over suffrage', content: 'Key milestones in extending the vote; the suffragists and suffragettes; current debates such as votes at 16 and prisoner voting.' },
        { code: '1.1.3', q: 'How democratic is the UK?', idea: 'Pressure groups and other influences', content: 'Types, methods and case studies of pressure groups; think tanks, lobbyists and corporations; what makes a group successful.' },
        { code: '1.1.4', q: 'How democratic is the UK?', idea: 'Rights in context', content: 'Development of rights, the Human Rights Act and Equality Act, collective versus individual rights, how well rights are protected.' }
      ], skills: [] },
    { id: '1.2', component: 'C1', option: null, name: 'Political parties', caseStudies: ['Party policies and factions since 2010'],
      ideas: [
        { code: '1.2.1', q: 'What do the parties stand for and how do they compete?', idea: 'Functions, features and funding of parties', content: 'What parties do in a democracy; how they are funded and the debates about reform.' },
        { code: '1.2.2', q: 'What do the parties stand for and how do they compete?', idea: 'Established parties', content: 'Origins, ideas, factions and current policies of the Conservative, Labour and Liberal Democrat parties on the economy, law and order, welfare and foreign policy.' },
        { code: '1.2.3', q: 'What do the parties stand for and how do they compete?', idea: 'Emerging and minor parties', content: 'The importance of other parties and the case studies the school chooses.' },
        { code: '1.2.4', q: 'What do the parties stand for and how do they compete?', idea: 'The party system and party success', content: 'One-, two- and multi-party systems in the UK; factors affecting success including leadership, unity and the media.' }
      ], skills: [] },
    { id: '1.3', component: 'C1', option: null, name: 'Electoral systems', caseStudies: ['General elections since 1997; devolved assembly elections'],
      ideas: [
        { code: '1.3.1', q: 'Which electoral system serves the UK best?', idea: 'Different electoral systems', content: 'First past the post, additional member system, single transferable vote and supplementary vote: how each works and its advantages and disadvantages.' },
        { code: '1.3.2', q: 'Which electoral system serves the UK best?', idea: 'Referendums and how they are used', content: 'Referendums since 1997 and their impact on politics; the case for and against their use.' },
        { code: '1.3.3', q: 'Which electoral system serves the UK best?', idea: 'Electoral system analysis', content: 'The effect of different systems on government type, party representation and voter choice; the debate over replacing first past the post.' }
      ], skills: [] },
    { id: '1.4', component: 'C1', option: null, name: 'Voting behaviour and the media', caseStudies: ['Three general elections including 1979, 1997 and one since 2010'],
      ideas: [
        { code: '1.4.1', q: 'Why do people vote as they do?', idea: 'Case studies of three general elections', content: 'One from 1945–92, 1997, and one since 2010: the results, the influence of factors and of the campaign, and what each shows about voting behaviour.' },
        { code: '1.4.2', q: 'Why do people vote as they do?', idea: 'Factors explaining voting', content: 'Class and partisan alignment and dealignment, age, gender, ethnicity, region and education; rational choice, issue voting, valence and leadership.' },
        { code: '1.4.3', q: 'Why do people vote as they do?', idea: 'The influence of the media', content: 'Press bias and persuasion, broadcasting rules, opinion polls, social media and their effect on outcomes.' }
      ], skills: [] },
    { id: '1.5', component: 'C1', option: null, name: 'Core political ideas: conservatism, liberalism, socialism', caseStudies: ['Key thinkers named in the specification for each ideology'],
      ideas: [
        { code: '1.5.1', q: 'What do conservatives believe and where do they disagree?', idea: 'Conservatism', content: 'Core ideas (pragmatism, tradition, human imperfection, organic society, paternalism, libertarianism), traditional and one-nation conservatism and the New Right, key thinkers Hobbes, Burke, Oakeshott, Rand, Nozick.' },
        { code: '1.5.2', q: 'What do liberals believe and where do they disagree?', idea: 'Liberalism', content: 'Core ideas (individualism, freedom, the state, rationalism, equality, liberal democracy), classical and modern liberalism, key thinkers Locke, Wollstonecraft, Mill, Rawls, Friedan.' },
        { code: '1.5.3', q: 'What do socialists believe and where do they disagree?', idea: 'Socialism', content: 'Core ideas (collectivism, common humanity, equality, social class, workers\u2019 control), revolutionary socialism, social democracy, the Third Way, key thinkers Marx and Engels, Webb, Luxemburg, Crosland, Giddens.' }
      ], skills: [] },
    { id: '2.1', component: 'C2', option: null, name: 'The constitution', caseStudies: ['Constitutional reforms since 1997 and their outcomes'],
      ideas: [
        { code: '2.1.1', q: 'Should the UK constitution be codified?', idea: 'Nature and sources', content: 'Uncodified, unentrenched and unitary; parliamentary sovereignty and the rule of law; statute law, common law, conventions, authoritative works, treaties.' },
        { code: '2.1.2', q: 'Should the UK constitution be codified?', idea: 'Change since 1997', content: 'Reforms under Labour, the coalition and since 2015, and their effects.' },
        { code: '2.1.3', q: 'Should the UK constitution be codified?', idea: 'Devolution', content: 'Roles, powers and responsibilities of the devolved bodies; the debate about devolution to England and further change.' },
        { code: '2.1.4', q: 'Should the UK constitution be codified?', idea: 'Debates on further reform', content: 'The extent to which reform has gone far enough; the case for and against codification and an entrenched bill of rights.' }
      ], skills: [] },
    { id: '2.2', component: 'C2', option: null, name: 'Parliament', caseStudies: ['Recent legislation, select committee inquiries and backbench rebellions'],
      ideas: [
        { code: '2.2.1', q: 'How effective is Parliament?', idea: 'Structure and role of the Commons and Lords', content: 'Membership, functions and the debate over Lords reform.' },
        { code: '2.2.2', q: 'How effective is Parliament?', idea: 'Comparative powers of the two Houses', content: 'Exclusive powers of the Commons, the Salisbury convention, the Parliament Acts, the Lords\u2019 growing assertiveness.' },
        { code: '2.2.3', q: 'How effective is Parliament?', idea: 'The legislative process', content: 'Stages of a bill; the interaction between Houses; private members\u2019 bills.' },
        { code: '2.2.4', q: 'How effective is Parliament?', idea: 'Parliament and the executive', content: 'Backbenchers and rebellions, select and public bill committees, the opposition, Prime Minister\u2019s Questions, the effectiveness of scrutiny.' }
      ], skills: [] },
    { id: '2.3', component: 'C2', option: null, name: 'Prime Minister and executive', caseStudies: ['Two prime ministers including one from 1945\u201397 and one since 1997'],
      ideas: [
        { code: '2.3.1', q: 'How powerful is the Prime Minister?', idea: 'Structure, role and powers of the executive', content: 'PM, cabinet, ministers and the civil service; proposing legislation and the budget; prerogative and statutory powers.' },
        { code: '2.3.2', q: 'How powerful is the Prime Minister?', idea: 'Ministerial responsibility', content: 'Individual and collective responsibility and their erosion, with examples.' },
        { code: '2.3.3', q: 'How powerful is the Prime Minister?', idea: 'The Prime Minister and the cabinet', content: 'Sources of PM power, factors that constrain it, cabinet management, the presidential-PM debate.' },
        { code: '2.3.4', q: 'How powerful is the Prime Minister?', idea: 'Case studies of two prime ministers', content: 'One from 1945\u201397 and one since 1997: the extent of their power and their effect on events and policy.' }
      ], skills: [] },
    { id: '2.4', component: 'C2', option: null, name: 'Relationships between the branches', caseStudies: ['Landmark Supreme Court cases; the EU relationship and its aftermath'],
      ideas: [
        { code: '2.4.1', q: 'Where does power lie between the branches?', idea: 'The Supreme Court', content: 'Role and composition, judicial neutrality and independence, ultra vires and judicial review, key cases and their effect on government and Parliament.' },
        { code: '2.4.2', q: 'Where does power lie between the branches?', idea: 'Executive and Parliament', content: 'The influence of each on the other, the balance of power over time, and whether Parliament is dominated.' },
        { code: '2.4.3', q: 'Where does power lie between the branches?', idea: 'The EU and the UK', content: 'Aims and role of the EU, its past impact on UK politics and policy, and the consequences of leaving.' },
        { code: '2.4.4', q: 'Where does power lie between the branches?', idea: 'The location of sovereignty', content: 'Legal and political sovereignty; how far it has moved between Parliament, the executive, devolved bodies, courts and the people.' }
      ], skills: [] },
    { id: '2.5a', component: 'C2', option: 'nonCore', name: 'Non-core idea: Anarchism', caseStudies: ['Key thinkers named in the specification'],
      ideas: [
        { code: '2.5a.1', q: 'What do anarchists believe?', idea: 'Core ideas and principles', content: 'Rejection of the state, liberty, order, economic freedom, utopianism.' },
        { code: '2.5a.2', q: 'Where do they disagree?', idea: 'Differing views and tensions', content: 'Collectivist strands (anarcho-communism, mutualism) versus individualist strands (egoism, anarcho-capitalism); key thinkers Bakunin, Kropotkin, Goldman, Stirner, Rothbard.' }
      ], skills: [] },
    { id: '2.5b', component: 'C2', option: 'nonCore', name: 'Non-core idea: Ecologism', caseStudies: ['Key thinkers named in the specification'],
      ideas: [
        { code: '2.5b.1', q: 'What do ecologism thinkers believe?', idea: 'Core ideas and principles', content: 'Ecology, holism, environmental ethics, environmental consciousness, post-materialism and anti-consumerism, sustainability.' },
        { code: '2.5b.2', q: 'Where do they disagree?', idea: 'Differing views and tensions', content: 'Deep ecology, shallow ecology and social ecology (eco-socialism, eco-anarchism, eco-feminism); key thinkers Leopold, Schumacher, Carson, Bookchin, N\u00e6ss.' }
      ], skills: [] },
    { id: '2.5c', component: 'C2', option: 'nonCore', name: 'Non-core idea: Feminism', caseStudies: ['Key thinkers named in the specification'],
      ideas: [
        { code: '2.5c.1', q: 'What do feminism thinkers believe?', idea: 'Core ideas and principles', content: 'Sex and gender, patriarchy, the personal is political, equality and difference feminism, intersectionality.' },
        { code: '2.5c.2', q: 'Where do they disagree?', idea: 'Differing views and tensions', content: 'Liberal, socialist, radical and post-modern feminism and their disagreements; key thinkers Gilman, de Beauvoir, Millett, Rowbotham, hooks.' }
      ], skills: [] },
    { id: '2.5d', component: 'C2', option: 'nonCore', name: 'Non-core idea: Multiculturalism', caseStudies: ['Key thinkers named in the specification'],
      ideas: [
        { code: '2.5d.1', q: 'What do multiculturalism thinkers believe?', idea: 'Core ideas and principles', content: 'The politics of recognition, culture and identity, minority rights, diversity.' },
        { code: '2.5d.2', q: 'Where do they disagree?', idea: 'Differing views and tensions', content: 'Liberal, pluralist and cosmopolitan multiculturalism and the conservative critique; key thinkers Berlin, Taylor, Kymlicka, Parekh, Modood.' }
      ], skills: [] },
    { id: '2.5e', component: 'C2', option: 'nonCore', name: 'Non-core idea: Nationalism', caseStudies: ['Key thinkers named in the specification'],
      ideas: [
        { code: '2.5e.1', q: 'What do nationalism thinkers believe?', idea: 'Core ideas and principles', content: 'Nations, self-determination, nation-states, culturalism, racialism, internationalism.' },
        { code: '2.5e.2', q: 'Where do they disagree?', idea: 'Differing views and tensions', content: 'Liberal, conservative, expansionist and anti-/post-colonial nationalism; key thinkers Rousseau, Herder, Mazzini, Maurras, Garvey.' }
      ], skills: [] },
    { id: '3A', component: 'C3', option: 'comparative', name: 'Comparative: USA', caseStudies: ['Recent presidencies, Congresses and Supreme Court terms'],
      ideas: [
        { code: '3A.1', q: 'How does the US constitution shape politics?', idea: 'US Constitution and federalism', content: 'Nature, principles, amendment, federalism and its evolution; comparison with the UK.' },
        { code: '3A.2', q: 'How effective is Congress?', idea: 'US Congress', content: 'Structure, powers, legislative process, oversight, representation; comparison with Parliament.' },
        { code: '3A.3', q: 'How powerful is the president?', idea: 'US presidency', content: 'Formal and informal powers, relations with Congress and the courts, the imperial presidency debate; comparison with the PM.' },
        { code: '3A.4', q: 'What role does the Supreme Court play?', idea: 'US Supreme Court and civil rights', content: 'Appointment, judicial review, activism and restraint, rights protection; comparison with the UK Supreme Court.' },
        { code: '3A.5', q: 'How democratic are US elections and parties?', idea: 'Democracy and participation', content: 'Electoral process, campaign finance, parties and their factions, interest groups; comparison with the UK.' },
        { code: '3A.6', q: 'How do we compare political systems?', idea: 'Comparative theories', content: 'Rational, cultural and structural approaches applied to every comparison.' }
      ], skills: [] },
    { id: '3B', component: 'C3', option: 'comparative', name: 'Comparative: Global politics', caseStudies: ['Recent interventions, treaties, IGO decisions and regional developments'],
      ideas: [
        { code: '3B.1', q: 'What is the state system and how is it changing?', idea: 'Sovereignty and globalisation', content: 'Nation-states and sovereignty, globalisation in its forms, realist and liberal views, the debate over the state.' },
        { code: '3B.2', q: 'How effective is political and economic global governance?', idea: 'Global governance: political and economic', content: 'UN, NATO, ICC; IMF, World Bank, WTO, G7/G20; poverty and development.' },
        { code: '3B.3', q: 'How effective is human rights and environmental governance?', idea: 'Global governance: human rights and environment', content: 'International law and courts, humanitarian intervention; UNFCCC, IPCC, climate agreements and their effectiveness.' },
        { code: '3B.4', q: 'How is power distributed and changing?', idea: 'Power and developments', content: 'Hard and soft power, polarity, emerging powers, systems and stability.' },
        { code: '3B.5', q: 'What is the role of regionalism and the EU?', idea: 'Regionalism and the EU', content: 'Forms and causes of regionalism, the EU\u2019s development and debates, other regional organisations.' },
        { code: '3B.6', q: 'How do we compare approaches?', idea: 'Comparative theories', content: 'Realism versus liberalism applied across the topics.' }
      ], skills: [] }
  ],
  skills: { quantitative: ['Reading election and turnout data'], qualitative: ['Source analysis and evaluation', 'Using key thinkers accurately'], geoLocated: [] }
};

if (typeof module !== 'undefined') module.exports = { SPEC_9BS0, SPEC_9PL0 };
