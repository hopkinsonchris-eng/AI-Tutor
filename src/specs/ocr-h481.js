/* Platform spec model.
   A SPEC describes one qualification: components (papers), their weighting and timing,
   the assessment objectives and mark conventions, and the topics with their key ideas —
   each key idea carrying the board's own code so generated material can cite it.
   Text is paraphrased from the board's published specification, not reproduced. */

const SPEC_H481 = {
  id: 'OCR-H481', board: 'OCR', subject: 'Geography', code: 'H481', level: 'A level',
  version: 'Specification v1.4 (June 2023); verify against ocr.org.uk before relying on any figure',
  firstExam: 2018, essaySubject: true,
  components: [
    { id: 'C1', name: 'Physical systems', paperCode: 'H481/01', marks: 66, weight: 22, minutes: 90,
      sections: ['A: Landscape systems (the chosen option)', 'B: Earth\u2019s life support systems'], resourceBooklet: true },
    { id: 'C2', name: 'Human interactions', paperCode: 'H481/02', marks: 66, weight: 22, minutes: 90,
      sections: ['A: Changing spaces; making places', 'B: Global connections (one of A/B and one of C/D)'], resourceBooklet: true },
    { id: 'C3', name: 'Geographical debates', paperCode: 'H481/03', marks: 108, weight: 36, minutes: 150,
      sections: ['A: Short and medium questions on both chosen debates', 'B: Synoptic questions', 'C: Extended responses'], resourceBooklet: true, synoptic: true },
    { id: 'C4', name: 'Investigative geography (NEA)', paperCode: 'H481/04-05', marks: 60, weight: 20, minutes: null,
      nea: true, notes: 'Independent investigation, 3,000\u20134,000 words, marked by the school and moderated by OCR. The app supports planning and drafting; the school owns supervision and marking.' }
  ],
  options: [
    { id: 'landscape', label: 'Landscape system (Component 1, Section A)', choose: 1, from: ['1.1.1', '1.1.2', '1.1.3'] },
    { id: 'globalSystems', label: 'Global systems (Component 2)', choose: 1, from: ['2.2.1', '2.2.2'] },
    { id: 'globalGovernance', label: 'Global governance (Component 2)', choose: 1, from: ['2.2.3', '2.2.4'] },
    { id: 'debates', label: 'Geographical debates (Component 3)', choose: 2, from: ['3.1', '3.2', '3.3', '3.4', '3.5'] }
  ],
  ao: [
    { id: 'AO1', label: 'Knowledge and understanding', text: 'Demonstrate knowledge and understanding of places, environments, concepts, processes, interactions and change at a variety of scales.' },
    { id: 'AO2', label: 'Application', text: 'Apply knowledge and understanding in different contexts to interpret, analyse and evaluate geographical information and issues.' },
    { id: 'AO3', label: 'Skills', text: 'Use a variety of quantitative, qualitative and fieldwork skills to investigate questions and issues, interpret and analyse evidence, construct arguments and draw conclusions.' }
  ],
  markConventions: {
    style: 'levels',
    summary: 'Extended responses are marked in levels against AO descriptors, not point-by-point. A level is chosen for the quality of the whole answer, then a mark within it. Case-study detail lifts AO1; evaluation that reaches a supported judgement lifts AO2; using the resource booklet\u2019s data lifts AO3.',
    commandWords: [
      { word: 'Describe', means: 'Say what is there or what the pattern is. No reasons needed.' },
      { word: 'Explain', means: 'Give reasons and mechanisms. Cause \u2192 effect chains, with connectives.' },
      { word: 'Suggest', means: 'Offer plausible reasons where certainty isn\u2019t expected; still needs geography, not guesswork.' },
      { word: 'Analyse', means: 'Break the information down and interpret it; use the resource\u2019s figures and patterns.' },
      { word: 'Assess', means: 'Weigh the importance or success of something and reach a judgement.' },
      { word: 'Evaluate', means: 'Weigh strengths and weaknesses of evidence or a view, and conclude.' },
      { word: 'To what extent', means: 'Argue how far the statement holds, with a clear, qualified conclusion.' },
      { word: 'Examine', means: 'Investigate closely, showing complexity and inter-relationships.' },
      { word: 'With reference to', means: 'You must use the named resource or case study; marks depend on it.' }
    ],
    essayShapes: [
      { marks: 33, minutes: 45, structure: 'Component 3 Section C extended response: introduction defining terms and signalling the argument; 3\u20134 developed paragraphs each with point, case-study evidence, analysis and a mini-judgement; a conclusion that answers the question with a qualified position.' },
      { marks: 16, minutes: 20, structure: 'Long answer: brief framing, 2\u20133 developed points with evidence, an evaluative conclusion.' },
      { marks: 12, minutes: 15, structure: 'Medium answer: 2 developed points with exemplification and a judgement.' },
      { marks: 8, minutes: 10, structure: 'Explain/examine: 2\u20133 clearly linked reasons, each developed.' },
      { marks: 4, minutes: 5, structure: 'Short: two or three precise points; use the resource if given.' }
    ]
  },
  topics: [
    /* ---------------- Component 1 ---------------- */
    { id: '1.1.1', component: 'C1', option: 'landscape', name: 'Landscape systems \u2014 Option A: Coastal landscapes', caseStudies: ['One high-energy coastline', 'One low-energy coastline', 'One managed coastline', 'One coastline changed by economic development', 'At least two beyond the UK, at least one in the UK'],
      ideas: [
        { code: '1.a', q: 'How can coastal landscapes be viewed as systems?', idea: 'Coastal landscapes as systems', content: 'Inputs, processes and outputs; flows of energy and material; sediment cells.' },
        { code: '1.b', q: 'How can coastal landscapes be viewed as systems?', idea: 'Physical factors that influence coastal systems', content: 'Wind (speed, direction, frequency); waves (formation, development, breaking); tides (cycles, range); geology (lithology, structure); the global pattern of ocean currents.' },
        { code: '1.c', q: 'How can coastal landscapes be viewed as systems?', idea: 'Sources of coastal sediment', content: 'Terrestrial (rivers, weathering, mass movement, marine erosion, wind, longshore drift); offshore (marine deposition); human (beach nourishment).' },
        { code: '2.a', q: 'How are coastal landforms developed?', idea: 'Landforms from interconnected processes', content: 'Weathering, mass movement, wave/fluvial/aeolian erosion, transport and deposition. Erosional landforms: bays, headlands, cliffs, shore platforms, geos, blowholes, caves, arches, stacks, stumps. Depositional: beaches, spits, onshore bars, tombolos, salt marshes.' },
        { code: '2.b', q: 'How are coastal landforms developed?', idea: 'Landforms inter-relate to make characteristic landscapes', content: 'Case studies of one high-energy and one low-energy coast: physical influences, how landforms inter-relate, change over timescales from seconds to millennia.' },
        { code: '3.a', q: 'How do coastal landforms evolve as climate changes?', idea: 'Emergent coasts as sea level falls', content: 'Past cooling and sea-level fall; raised beaches, marine terraces, abandoned cliffs; modification by present and future change.' },
        { code: '3.b', q: 'How do coastal landforms evolve as climate changes?', idea: 'Submergent coasts as sea level rises', content: 'Past warming and sea-level rise; rias, fjords, shingle beaches; modification by present and future change.' },
        { code: '4.a', q: 'How does human activity change coastal systems?', idea: 'Intentional change through management', content: 'Case study of a managed coast: strategy and reasons; intended effects on sediment flows; landform change; consequences for the landscape.' },
        { code: '4.b', q: 'How does human activity change coastal systems?', idea: 'Unintentional change through economic development', content: 'Case study of a coast used for ports, trade or tourism: unintended effects on the sediment cell; landform change; retreat or protection.' }
      ], skills: ['Observation and measurement', 'Geo-spatial mapping', 'Statistics on field data', 'Sediment budget and mass balance calculations'] },
    { id: '1.1.2', component: 'C1', option: 'landscape', name: 'Landscape systems \u2014 Option B: Glaciated landscapes', caseStudies: ['One valley-glacier landscape', 'One ice-sheet landscape', 'One used periglacial landscape', 'One used glaciated landscape', 'At least two beyond the UK, at least one in the UK'],
      ideas: [
        { code: '1.a', q: 'How can glaciated landscapes be viewed as systems?', idea: 'Glaciated landscapes as systems', content: 'Inputs, processes, outputs; energy and material flows; glacier mass balance.' },
        { code: '1.b', q: 'How can glaciated landscapes be viewed as systems?', idea: 'Physical factors', content: 'Climate (precipitation totals and patterns), geology, latitude and altitude, relief and aspect on microclimate and movement.' },
        { code: '1.c', q: 'How can glaciated landscapes be viewed as systems?', idea: 'Types of glacier and movement', content: 'Glacier ice formation; valley glaciers and ice sheets; warm- and cold-based glaciers; basal sliding and internal deformation.' },
        { code: '2.a', q: 'How are glacial landforms developed?', idea: 'Landforms from interconnected processes', content: 'Weathering, mass movement, glacial erosion, nivation, transport, deposition. Erosional: corries, ar\u00eates, pyramidal peaks, troughs, roche moutonn\u00e9e, striations. Depositional: terminal, lateral and recessional moraines, erratics, drumlins, till sheets.' },
        { code: '2.b', q: 'How are glacial landforms developed?', idea: 'Characteristic landscapes', content: 'Case studies of a valley-glacier landscape and an ice-sheet landscape: physical influences, inter-relationships, change from seconds to millennia.' },
        { code: '3.a', q: 'How do glacial landforms evolve as climate changes?', idea: 'Glacio-fluvial landforms after glaciation', content: 'Post-glacial climate change and processes; kames, eskers, outwash plains; modification by present and future change.' },
        { code: '3.b', q: 'How do glacial landforms evolve as climate changes?', idea: 'Periglacial landforms', content: 'Periglacial climate and processes; patterned ground, pingos; modification by present and future change.' },
        { code: '4.a', q: 'How does human activity change these systems?', idea: 'Change in periglacial systems', content: 'Case study of a used periglacial landscape (e.g. resource extraction): impacts on flows, permafrost thaw, thermokarst.' },
        { code: '4.b', q: 'How does human activity change these systems?', idea: 'Change in glaciated systems', content: 'Case study of a used glaciated landscape (e.g. dams): sediment trapping, channel scour, valley-floor change.' }
      ], skills: ['Observation and measurement', 'Geo-spatial mapping', 'Statistics on field data', 'Sediment budget and mass balance calculations'] },
    { id: '1.1.3', component: 'C1', option: 'landscape', name: 'Landscape systems \u2014 Option C: Dryland landscapes', caseStudies: ['One mid-latitude desert', 'One low-latitude desert', 'One dryland with water-supply issues', 'One dryland changed by economic activity'],
      ideas: [
        { code: '1.a', q: 'How can dryland landscapes be viewed as systems?', idea: 'Drylands as systems', content: 'Inputs, processes, outputs; energy and material flows; aridity index (UNEP).' },
        { code: '1.b', q: 'How can dryland landscapes be viewed as systems?', idea: 'Physical factors', content: 'Climate, geology, latitude and altitude, relief and aspect, sediment availability.' },
        { code: '1.c', q: 'How can dryland landscapes be viewed as systems?', idea: 'Types of dryland', content: 'Polar drylands; mid- and low-latitude deserts; semi-arid environments.' },
        { code: '2.a', q: 'How are desert landforms developed?', idea: 'Landforms from interconnected processes', content: 'Weathering, mass movement, fluvial and aeolian erosion, transport, deposition. Erosional: wadis, canyons, pedestal rocks, ventifacts, desert pavements. Depositional: barchans, linear and star dunes, alluvial fans, bajadas.' },
        { code: '2.b', q: 'How are desert landforms developed?', idea: 'Characteristic landscapes', content: 'Case studies of a mid-latitude and a low-latitude desert: physical influences, inter-relationships, change from flash floods to pediment development.' },
        { code: '3.a', q: 'How do dryland landforms evolve as climate changes?', idea: 'Fluvial legacies of pluvial periods', content: 'Past wetter climates; inselbergs and pediments; modification by present and future change.' },
        { code: '3.b', q: 'How do dryland landforms evolve as climate changes?', idea: 'Periglacial legacies of colder periods', content: 'Past colder climates; frost-shattered debris, nivation hollows, solifluction deposits; modification by present and future change.' },
        { code: '4.a', q: 'How does human activity change dryland systems?', idea: 'Water-supply issues', content: 'Case study: water shortage and its causes; dams and river modification; effects on wadis and depositional landforms.' },
        { code: '4.b', q: 'How does human activity change dryland systems?', idea: 'Economic activity', content: 'Case study: e.g. tourism; damage to vegetation and crusts; dune erosion; loess accumulation.' }
      ], skills: ['Observation and measurement', 'Geo-spatial mapping', 'Statistics on field data', 'Sediment budget and mass balance calculations'] },
    { id: '1.2', component: 'C1', option: null, name: 'Earth\u2019s life support systems', caseStudies: ['A tropical rainforest (with one drainage basin)', 'The Arctic tundra'],
      ideas: [
        { code: '1.a', q: 'How important are water and carbon to life on Earth?', idea: 'Water and carbon support life and move between land, oceans and atmosphere', content: 'Why water matters to humans, flora and fauna; carbon as the building block of life; cycling through open and closed systems.' },
        { code: '1.b', q: 'How important are water and carbon to life on Earth?', idea: 'The cycles are systems with stores, inputs and outputs', content: 'Size and distribution of the major stores (atmosphere, oceans, water bodies, cryosphere, soil, vegetation, groundwater); inputs and outputs of each cycle including precipitation, ablation, evapotranspiration, photosynthesis, decomposition, weathering, respiration, combustion.' },
        { code: '1.c', q: 'How important are water and carbon to life on Earth?', idea: 'Distinctive processes and pathways', content: 'Water: evaporation, transpiration, condensation and cloud formation, precipitation and its causes, interception, ablation, runoff, catchment hydrology (infiltration, percolation, throughflow, groundwater flow, cryospheric processes). Carbon: photosynthesis, respiration, decomposition, combustion, sequestration in oceans, vegetation, sediments and weathering.' },
        { code: '2.a', q: 'How do the cycles operate in contrasting locations?', idea: 'Tropical rainforest case study', content: 'Rates of flow and stores; physical factors (temperature, permeability, porosity, relief, vegetation, soil organic matter, rock minerals); one drainage basin\u2019s changes from deforestation and farming; human impacts on carbon, soil and nutrients; management such as afforestation and improved agriculture.' },
        { code: '2.b', q: 'How do the cycles operate in contrasting locations?', idea: 'Arctic tundra case study', content: 'Rates and stores; physical factors; seasonal change; the oil and gas industry\u2019s impact; strategies to moderate it.' },
        { code: '3.a', q: 'How much change occurs over time in the cycles?', idea: 'Human factors disturb and enhance natural processes', content: 'Dynamic equilibrium; land-use change (urban growth, farming, forestry); water extraction including aquifers and artesian basins; fossil-fuel combustion and sequestration; positive and negative feedback within and between the cycles.' },
        { code: '3.b', q: 'How much change occurs over time in the cycles?', idea: 'Pathways vary over time', content: 'Diurnal and seasonal change; change over millions of years; why research and monitoring matter.' },
        { code: '4.a', q: 'To what extent are the cycles linked?', idea: 'Linked and interdependent', content: 'Links via oceans, atmosphere, cryosphere and vegetation; human use of water and carbon stores as resources; long-term climate change effects.' },
        { code: '4.b', q: 'To what extent are the cycles linked?', idea: 'Global implications of management', content: 'Carbon: afforestation, wetland restoration, improved agriculture, emissions reduction including carbon trading and international agreements. Water: forestry techniques, allocations between domestic, industrial and agricultural use, drainage-basin planning.' }
      ], skills: ['Climate graphs', 'Simple mass balance', 'Rates of flow', 'Unit conversions', 'Field data analysis and presentation'] },
    /* ---------------- Component 2 ---------------- */
    { id: '2.1', component: 'C2', option: null, name: 'Changing spaces; making places', caseStudies: ['Two contrasting local place profiles', 'Two contrasting places for social inequality', 'One country or region changed by structural economic change', 'One rebranded place'],
      ideas: [
        { code: '1.a', q: 'What\u2019s in a place?', idea: 'Places are multi-faceted and shaped by shifting flows', content: 'Two contrasting local profiles: demographic, socio-economic, cultural, political, built and natural characteristics; past and present connections at every scale; how flows of people, resources, money and ideas have shaped them.' },
        { code: '2.a', q: 'How do we understand place?', idea: 'People see, experience and understand place differently', content: 'Space versus place; perception by age, gender, sexuality, religion and role; emotional attachment and behaviour; globalisation and time\u2013space compression.' },
        { code: '2.b', q: 'How do we understand place?', idea: 'Formal and informal representations', content: 'Informal representations in media and art (TV, film, music, photography, literature, graffiti, blogs) versus formal, statistical ones such as census and geospatial data.' },
        { code: '3.a', q: 'How does economic change influence social inequality?', idea: 'Uneven distribution of resources, wealth and opportunity', content: 'Measuring social inequality through housing, healthcare, education, employment, access to services; how patterns vary within and between places.' },
        { code: '3.b', q: 'How does economic change influence social inequality?', idea: 'Economic change creates winners and losers', content: 'Globalisation driving structural change such as de-industrialisation and service growth; effects on opportunity; booms and recessions; the role of government spending and cuts.' },
        { code: '3.c', q: 'How does economic change influence social inequality?', idea: 'Inequality affects people and places differently', content: 'Two contrasting places: evidence of inequality (housing, environment, crime, digital divide); influencing factors (income, gender, age, health, mobility, ethnicity, education); effects on daily life.' },
        { code: '4.a', q: 'Who are the players that influence economic change?', idea: 'Players operate at different scales', content: 'Government, MNCs and international institutions as drivers; case study of one country or region through structural change: before, the change and its players, impacts on people and place.' },
        { code: '5.a', q: 'How are places created through placemaking?', idea: 'Place is produced at different scales', content: 'Placemaking to attract investment and regeneration; architects and planners designing authentic places (mixed use, the 24-hour city); community groups shaping place.' },
        { code: '5.b', q: 'How are places created through placemaking?', idea: 'Rebranding constructs new meanings', content: 'Why places rebrand; strategies using sport, art, heritage, retail, architecture, food; players including government and EU funding, corporations, non-profits, communities; why some groups contest rebranding.' },
        { code: '5.c', q: 'How are places created through placemaking?', idea: 'Successful placemaking needs planning and design', content: 'Case study of one rebranded place: need, strategies, players, changed perceptions, relative success.' }
      ], skills: ['How qualitative approaches create place representations', 'Analysing media impacts on place meaning', 'Geospatial and quantitative presentation of place characteristics'] },
    { id: '2.2.1', component: 'C2', option: 'globalSystems', name: 'Global systems \u2014 Option A: Trade in the contemporary world', caseStudies: ['One EDC\u2019s trade interdependence', 'One AC driving the trade system', 'One LIDC with limited influence'],
      ideas: [
        { code: '1.a', q: 'What are the contemporary patterns of international trade?', idea: 'Flows of merchandise, services and capital vary spatially', content: 'Definitions; current inter- and intra-regional patterns in direction and components.' },
        { code: '1.b', q: 'What are the contemporary patterns of international trade?', idea: 'Trade patterns relate to development', content: 'Indices such as export value and HDI; how trade promotes stability, growth and development; how it causes inequality, conflict and injustice \u2014 all through flows of people, money, ideas and technology.' },
        { code: '2.a', q: 'Why has trade become increasingly complex?', idea: 'Access to markets depends on many factors', content: 'Technology and transport; MNCs and outsourcing in EDCs; trading blocs such as the EU; south\u2013south trade; growth of services; labour mobility and the new international division of labour.' },
        { code: '2.b', q: 'Why has trade become increasingly complex?', idea: 'Interdependence with trading partners', content: 'EDC case study: current patterns, change over time, economic/political/social/environmental interdependence, impacts on development, stability and equality.' },
        { code: '3.a', q: 'What are the issues of unequal trade flows?', idea: 'Unequal power relations', content: 'AC case study (advantages, opportunities such as growth, challenges such as deficits); LIDC case study (components, limited market access, opportunities such as diversification, challenges such as instability).' }
      ], skills: [] },
    { id: '2.2.2', component: 'C2', option: 'globalSystems', name: 'Global systems \u2014 Option B: Global migration', caseStudies: ['One EDC\u2019s migration interdependence', 'One AC driving the migration system', 'One LIDC with limited influence'],
      ideas: [
        { code: '1.a', q: 'What are the contemporary patterns of global migration?', idea: 'Dynamic flows of people', content: 'Current inter- and intra-regional patterns in numbers, composition and direction.' },
        { code: '1.b', q: 'What are the contemporary patterns of global migration?', idea: 'Migration relates to development', content: 'Indices such as remittances and HDI; how migration promotes stability, growth and development; how it causes inequality, conflict and injustice.' },
        { code: '2.a', q: 'Why has migration become increasingly complex?', idea: 'Many interrelated factors', content: 'New source and host areas; young and female migrants; south\u2013south flows equal to south\u2013north; refugees from conflict; policy changes; bilateral corridors.' },
        { code: '2.b', q: 'Why has migration become increasingly complex?', idea: 'Corridors create interdependence', content: 'EDC case study: immigration and emigration now and over time; interdependence; impacts on development, stability and equality.' },
        { code: '3.a', q: 'What are the issues of unequal migration flows?', idea: 'Unequal power relations', content: 'AC case study (policies, labour supply opportunities, border challenges); LIDC case study (remittance opportunities, loss of skilled workers).' }
      ], skills: [] },
    { id: '2.2.3', component: 'C2', option: 'globalGovernance', name: 'Global governance \u2014 Option C: Human rights', caseStudies: ['Women\u2019s rights in one country', 'Governance of human rights in one conflict area', 'Impact of governance in one LIDC'],
      ideas: [
        { code: '1.a', q: 'What is meant by human rights?', idea: 'Global variation in norms', content: 'What human rights are; norms, intervention and geopolitics as the frame.' },
        { code: '1.b', q: 'What is meant by human rights?', idea: 'Patterns of violation', content: 'Spatial patterns and causes of forced labour, maternal mortality and capital punishment.' },
        { code: '2.a', q: 'What are the variations in women\u2019s rights?', idea: 'Gender inequality is complex and contested', content: 'Economic, political and social factors: education, reproductive health, employment; one-country case study of issues, consequences, changing norms and strategies.' },
        { code: '3.a', q: 'What are the strategies for governance of human rights?', idea: 'Violations as cause and consequence of conflict', content: 'Rights violations causing conflict; conflict causing violations and geopolitical intervention; flows of people, money, ideas and technology in intervention.' },
        { code: '3.b', q: 'What are the strategies for governance of human rights?', idea: 'Cooperation across scales', content: 'Institutions, treaties, laws and norms; case study of one conflict area involving the UN, a national government and an NGO; consequences for local communities.' },
        { code: '4.a', q: 'To what extent has intervention contributed to development?', idea: 'Consequences for citizens and places', content: 'Short-term relief and long-term legal change; LIDC case study: the issue, strategies, opportunities for development, challenges of inequality and injustice.' }
      ], skills: [] },
    { id: '2.2.4', component: 'C2', option: 'globalGovernance', name: 'Global governance \u2014 Option D: Power and borders', caseStudies: ['One country whose sovereignty has been challenged', 'Governance in one conflict area', 'Impact of governance in one LIDC'],
      ideas: [
        { code: '1.a', q: 'What is meant by sovereignty and territorial integrity?', idea: 'A dynamic world political map', content: 'State, nation, sovereignty, territorial integrity; norms, intervention and geopolitics.' },
        { code: '2.a', q: 'What challenges sovereign state authority?', idea: 'Many factors challenge sovereignty', content: 'Political boundaries, TNCs, supranational institutions such as trading blocs, ethnic dominance; case study of one challenged country: causes and impacts.' },
        { code: '3.a', q: 'What is the role of global governance in conflict?', idea: 'A framework to regulate conflict', content: 'Sovereignty challenges as causes of conflict (e.g. resources); institutions, treaties, laws and norms; flows of people, money, ideas and technology in intervention.' },
        { code: '3.b', q: 'What is the role of global governance in conflict?', idea: 'Cooperation across scales', content: 'Case study of one conflict area involving the UN, a national government and an NGO; consequences for local communities.' },
        { code: '4.a', q: 'How effective is global governance of sovereignty?', idea: 'Consequences for citizens and places', content: 'Short- and long-term effects for sovereignty (aid, regime change) and territorial integrity (peace, trade); LIDC case study of issue, strategies, opportunities and challenges.' }
      ], skills: [] },
    /* ---------------- Component 3 ---------------- */
    { id: '3.1', component: 'C3', option: 'debates', name: 'Climate change', caseStudies: ['One AC and one EDC\u2019s emissions over time', 'Two contrasting countries\u2019 impacts, mitigation and adaptation'],
      ideas: [
        { code: '1.a', q: 'How and why has climate changed in the geological past?', idea: 'The Earth\u2019s climate is dynamic', content: 'Reconstruction methods (sediments, ice cores, tree rings, fossils); greenhouse and icehouse Earth, Antarctic glaciation, Quaternary, Holocene; natural forcing: tectonics, Milankovitch cycles, solar output, natural greenhouse gases.' },
        { code: '2.a', q: 'How has industrialisation affected global climate?', idea: 'The Anthropocene', content: 'Evidence of warming since the late 19th century; why emissions rose; who emits and how that has shifted; the enhanced greenhouse effect; the global energy balance; AC and EDC case studies.' },
        { code: '3.a', q: 'Why is there a debate over climate change?', idea: 'Agendas shape the debate', content: 'History of the debate; governments and international organisations; media and interest-group bias.' },
        { code: '4.a', q: 'In what ways can humans respond?', idea: 'Response relies on knowing the future', content: 'Climate modelling: the carbon cycle, feedback, emission scenarios and their temperature and sea-level implications.' },
        { code: '4.b', q: 'In what ways can humans respond?', idea: 'Impacts are global and dynamic', content: 'Current implications for ecosystems, health and extreme weather; projections; vulnerability.' },
        { code: '4.c', q: 'In what ways can humans respond?', idea: 'Mitigation and adaptation are complementary', content: 'Mitigation: efficiency, fuel shifts, CCS, forestry, geoengineering. Adaptation: retreat/accommodate/protect across the development continuum; future homes, cities, transport, economies. Two contrasting country case studies.' },
        { code: '5.a', q: 'Can an international response ever work?', idea: 'Policy and cooperation at all scales', content: 'IPCC; Kyoto and successor directives; carbon trading and credits; national and sub-national policy beyond international vision.' }
      ], skills: [] },
    { id: '3.2', component: 'C3', option: 'debates', name: 'Disease dilemmas', caseStudies: ['One country: natural hazard and a named disease', 'One country: air pollution and cancers', 'One communicable disease at country scale', 'One non-communicable disease at country scale', 'One NGO in one outbreak', 'One medicinal plant', 'One pharmaceutical TNC'],
      ideas: [
        { code: '1.a', q: 'What are the global patterns of disease?', idea: 'Classifying and mapping disease', content: 'Infectious/non-infectious, communicable, contagious, epidemic/endemic/pandemic; global patterns of malaria, HIV, TB, diabetes, CVD; H\u00e4gerstrand diffusion.' },
        { code: '1.b', q: 'What are the global patterns of disease?', idea: 'Physical factors and prevalence', content: 'Temperature, precipitation, relief, water; vectors; seasonality; climate change and emerging diseases; zoonoses.' },
        { code: '1.c', q: 'What are the global patterns of disease?', idea: 'Natural hazards and disease', content: 'Case study of one hazard\u2019s effect on a named disease: area, environmental and human factors, impacts, strategies.' },
        { code: '2.a', q: 'Is there a link between disease and development?', idea: 'Epidemiological transition', content: 'Living standards and susceptibility; diseases of poverty versus affluence; air-pollution and cancer case study.' },
        { code: '3.a', q: 'How effectively are diseases dealt with?', idea: 'Communicable disease case study', content: 'Causes, prevalence and patterns, impacts, direct and indirect strategies.' },
        { code: '3.b', q: 'How effectively are diseases dealt with?', idea: 'Non-communicable disease case study', content: 'Causes, prevalence and patterns, impacts, strategies.' },
        { code: '4.a', q: 'How far can disease be predicted and mitigated?', idea: 'Global mobility and response', content: 'WHO\u2019s roles; one global outbreak\u2019s spread; one NGO in one country.' },
        { code: '4.b', q: 'How far can disease be predicted and mitigated?', idea: 'Mitigation and physical barriers', content: 'Physical barriers helping and hindering response; pandemic strategies such as screening, treatment funding, education.' },
        { code: '5.a', q: 'Can diseases ever be eradicated?', idea: 'Medicines from nature', content: 'Medicinal plants and their habitats; one plant case study; conservation issues of the trade.' },
        { code: '5.b', q: 'Can diseases ever be eradicated?', idea: 'Top-down and bottom-up strategies', content: 'One pharmaceutical TNC; eradication campaigns; grassroots education and the role of women.' }
      ], skills: [] },
    { id: '3.3', component: 'C3', option: 'debates', name: 'Exploring oceans', caseStudies: ['One renewable biological resource', 'One oil spill', 'One plastic gyre', 'One island community', 'The Arctic region', 'One country\u2019s naval strongholds'],
      ideas: [
        { code: '1.a', q: 'What are the main characteristics of oceans?', idea: 'A distinctive feature of Earth', content: 'Distribution, areas and volumes; basin relief: shelf, slope, abyssal plain, ridges, rifts, trenches, guyots.' },
        { code: '1.b', q: 'What are the main characteristics of oceans?', idea: 'Water varies horizontally and vertically', content: 'Salinity and temperature; warm and cold surface currents; North Atlantic circulation.' },
        { code: '1.c', q: 'What are the main characteristics of oceans?', idea: 'Light, temperature and nutrients shape biodiversity', content: 'Variation with latitude and depth; intertidal versus deep-water food webs.' },
        { code: '2.a', q: 'What are the opportunities and threats of ocean resources?', idea: 'Biological resources, sustainable or not', content: 'Case study of one renewable resource (e.g. krill, whales): use, stakeholders, resilience and thresholds.' },
        { code: '2.b', q: 'What are the opportunities and threats of ocean resources?', idea: 'Energy and minerals are contested', content: 'Oil and gas; wave and tidal; seabed minerals.' },
        { code: '2.c', q: 'What are the opportunities and threats of ocean resources?', idea: 'Governing the oceans', content: 'Global commons and the tragedy of the commons; territorial waters, contiguous zone, EEZ, high seas; UNCLOS and marine reserves.' },
        { code: '3.a', q: 'How do humans pollute oceans?', idea: 'Pollutants', content: 'Fossil-fuel CO2; domestic and industrial pollutants such as plastics, heavy metals, nuclear waste.' },
        { code: '3.b', q: 'How do humans pollute oceans?', idea: 'Offshore oil', content: 'One oil-spill case study: environmental, human and management impacts.' },
        { code: '3.c', q: 'How do humans pollute oceans?', idea: 'Currents disperse and concentrate pollution', content: 'Plastic spread by circulation; one gyre case study.' },
        { code: '4.a', q: 'How is climate change affecting oceans?', idea: 'Changing water', content: 'Acidification and fish stocks; warming and coral bleaching.' },
        { code: '4.b', q: 'How is climate change affecting oceans?', idea: 'Sea-level change', content: 'Thermal expansion and land-ice transfer; one island community\u2019s threats, impacts and adaptations.' },
        { code: '4.c', q: 'How is climate change affecting oceans?', idea: 'High-latitude oceans', content: 'Sea-ice feedback and thresholds; Arctic case study: geopolitics, indigenous peoples, routes and minerals, international management.' },
        { code: '5.a', q: 'How have socio-economic and political factors shaped ocean use?', idea: 'Oceans and globalisation', content: 'Shipping routes and scale; direction and type of trade.' },
        { code: '5.b', q: 'How have socio-economic and political factors shaped ocean use?', idea: 'Contested spaces', content: 'Naval strongholds of one country; a marine conflict zone.' },
        { code: '5.c', q: 'How have socio-economic and political factors shaped ocean use?', idea: 'Hazardous obstacles', content: '21st-century piracy and its management; oceans as migrant escape routes.' }
      ], skills: [] },
    { id: '3.4', component: 'C3', option: 'debates', name: 'Future of food', caseStudies: ['One place where factors combine to threaten food security', 'One dryland area', 'One indigenous farming technique', 'One physical environment impacted by food production', 'Two contrasting places for impacts of poor food security', 'Two contrasting places for strategies'],
      ideas: [
        { code: '1.a', q: 'What is food security and why does it matter?', idea: 'A complex concept with spatial patterns', content: 'Access, availability and use; trends via undernourishment data and the Global Food Security Index; variation between and within countries.' },
        { code: '1.b', q: 'What is food security and why does it matter?', idea: 'Food production as a system', content: 'Physical conditions; growing, processing, transporting, disposing; intensive to extensive, subsistence to commercial.' },
        { code: '1.c', q: 'What is food security and why does it matter?', idea: 'Globalisation and the food industry', content: 'Demand and tastes; issues (food miles, TNC power, obesity, price crises) and opportunities (innovation, relief, choice).' },
        { code: '2.a', q: 'What causes inequality in food security?', idea: 'Interrelated factors', content: 'Physical factors; social, economic and political factors including land ownership and land grabbing; Malthus and Boserup; one-place case study.' },
        { code: '3.a', q: 'What are the threats to food security?', idea: 'Identifying the vulnerable', content: 'At-risk regions and people; pinch points such as the Suez Canal; desertification; one dryland case study.' },
        { code: '3.b', q: 'What are the threats to food security?', idea: 'Shocks to the food system', content: 'Climate-change extremes; water scarcity; tectonic hazards; one indigenous farming technique in an extreme environment.' },
        { code: '4.a', q: 'How do food issues impact people and environment?', idea: 'Physical and human impacts', content: 'Irrigation and salinisation, deforestation, landscape change, agrochemicals; one environment case study; health of shortage, surplus and chemicals; two contrasting places.' },
        { code: '5.a', q: 'Is there hope for the future of food?', idea: 'Food as a geopolitical commodity', content: 'Trade policy, the WTO, aid; agribusiness, TNCs, retailers, fair trade.' },
        { code: '5.b', q: 'Is there hope for the future of food?', idea: 'A spectrum of strategies', content: 'Relief to capacity building to system redesign; large-scale technology to bottom-up approaches; two contrasting case studies.' }
      ], skills: [] },
    { id: '3.5', component: 'C3', option: 'debates', name: 'Hazardous Earth', caseStudies: ['Two countries at contrasting development for volcanic impacts', 'Two for earthquake impacts', 'Two for volcanic management', 'Two for earthquake management'],
      ideas: [
        { code: '1.a', q: 'What is the evidence for plate tectonics?', idea: 'Evidence for continental drift and plate tectonics', content: 'Earth structure and convection; sea-floor spreading, palaeomagnetism, sea-floor age; ancient glaciations; fossils.' },
        { code: '1.b', q: 'What is the evidence for plate tectonics?', idea: 'Plate boundary features and processes', content: 'Global pattern; divergent, convergent (oceanic\u2013continental, oceanic\u2013oceanic, collision) and conservative boundaries.' },
        { code: '2.a', q: 'What hazards does volcanic activity generate?', idea: 'Types of volcanic activity and landforms', content: 'Explosive versus effusive eruptions and their settings; hot spots; size and shape including super-volcanoes; VEI.' },
        { code: '2.b', q: 'What hazards does volcanic activity generate?', idea: 'Distinctive volcanic hazards', content: 'Lava and pyroclastic flows, gases, tephra and ash; lahars and meltwater floods; eruption tsunamis.' },
        { code: '3.a', q: 'What hazards does seismic activity generate?', idea: 'Earthquake characteristics', content: 'Shallow and deep focus; Richter, moment magnitude, Mercalli; escarpments and rift valleys.' },
        { code: '3.b', q: 'What hazards does seismic activity generate?', idea: 'Distinctive seismic hazards', content: 'Shaking and displacement, liquefaction, landslides and avalanches, tsunamis, flooding.' },
        { code: '4.a', q: 'What are the implications of living in active locations?', idea: 'Volcanic impacts', content: 'Two contrasting countries: why people live there, impacts, economic/environmental/political effects.' },
        { code: '4.b', q: 'What are the implications of living in active locations?', idea: 'Earthquake impacts', content: 'Two contrasting countries: why people live there, impacts, effects.' },
        { code: '5.a', q: 'What measures help people cope?', idea: 'Managing volcanic hazards', content: 'Two contrasting countries: mitigating the event, vulnerability and losses.' },
        { code: '5.b', q: 'What measures help people cope?', idea: 'Managing earthquake hazards', content: 'Two contrasting countries: land-use zoning, building design, insurance and relief.' },
        { code: '5.c', q: 'What measures help people cope?', idea: 'Exposure and capacity change over time', content: 'Changing frequency and impacts; the disaster risk equation; future strategies; the Park model.' }
      ], skills: [] },
    /* ---------------- Component 4 ---------------- */
    { id: '4', component: 'C4', option: null, name: 'Investigative geography (NEA)', caseStudies: [],
      ideas: [
        { code: 'NEA.1', q: 'How is the investigation structured?', idea: 'Enquiry process', content: 'A question or hypothesis of the student\u2019s own, linked to any part of the specification; a literature and theoretical context; a justified methodology; primary field data (collected alone or in a group) and relevant secondary data.' },
        { code: 'NEA.2', q: 'How is the investigation structured?', idea: 'Analysis, conclusion and evaluation', content: 'Appropriate quantitative and qualitative analysis; well-evidenced conclusions in continuous prose; critical evaluation of accuracy, representativeness and ethics; 3,000\u20134,000 words recommended.' }
      ], skills: ['Research questions', 'Literature context', 'Field methods and sampling', 'Data presentation and statistical tests', 'Evaluation'] }
  ],
  skills: {
    quantitative: ['Mean, median, mode, range, IQR, standard deviation', 'Chi-squared, Spearman\u2019s rank, Mann\u2013Whitney U, t-test', 'Lines of best fit and correlation', 'Measurement, error and sampling'],
    qualitative: ['Interviews and mixed methods', 'Interpreting textual and visual sources', 'Coding and sampling and their limits'],
    geoLocated: ['Collecting digital data on phones and tablets', 'Presenting and analysing with GIS']
  }
};

if (typeof module !== 'undefined') module.exports = { SPEC_H481 };
