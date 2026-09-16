/* AQA GCSE Physics (8463) — built by hand in a Claude Code session from the official specification PDF
   (see spec.source for provenance) to the contract in src/spec-validator.js, with the course-builder skill.
   Content statements are the board's own, condensed; codes are copied character for character. */
const SPEC_8463 = {
 "id": "AQA-8463",
 "board": "AQA",
 "subject": "Physics",
 "code": "8463",
 "level": "GCSE",
 "version": "AQA GCSE Physics 8463, Version 1.1, 30 September 2019",
 "firstExam": 2018,
 "essaySubject": false,
 "components": [
  {
   "id": "P1",
   "name": "Paper 1",
   "marks": 100,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "What's assessed: Topics 1-4: Energy; Electricity; Particle model of matter; and Atomic structure",
    "How it's assessed: written exam 1 hour 45 minutes, Foundation and Higher Tier, 100 marks, 50% of GCSE",
    "Questions: multiple choice, structured, closed short answer and open response",
    "Working scientifically (page 11), Mathematical requirements (page 85) and Use of apparatus and techniques (page 87) are assessed across all papers",
    "Appendix A: equations 1-23 must be recalled and applied; the Physics equation sheet (12 further equations) is supplied"
   ]
  },
  {
   "id": "P2",
   "name": "Paper 2",
   "marks": 100,
   "weight": 50,
   "minutes": 105,
   "sections": [
    "What's assessed: Topics 5-8: Forces; Waves; Magnetism and electromagnetism; and Space physics",
    "Questions in paper 2 may draw on an understanding of energy changes and transfers due to heating, mechanical and electrical work and the concept of energy conservation from Energy (page 17) and Electricity (page 23)",
    "How it's assessed: written exam 1 hour 45 minutes, Foundation and Higher Tier, 100 marks, 50% of GCSE",
    "Questions: multiple choice, structured, closed short answer and open response",
    "Appendix A: equations 1-23 must be recalled and applied; the Physics equation sheet (12 further equations) is supplied"
   ]
  }
 ],
 "options": [],
 "ao": [
  {
   "id": "AO1",
   "label": "Knowledge and understanding",
   "text": "Demonstrate knowledge and understanding of: scientific ideas; scientific techniques and procedures. Component weighting 37-43% on each of Paper 1 and Paper 2; overall weighting 40%."
  },
  {
   "id": "AO2",
   "label": "Application",
   "text": "Apply knowledge and understanding of: scientific ideas; scientific enquiry, techniques and procedures. Component weighting 37-43% on each of Paper 1 and Paper 2; overall weighting 40%."
  },
  {
   "id": "AO3",
   "label": "Analysis and evaluation",
   "text": "Analyse information and ideas to: interpret and evaluate; make judgments and draw conclusions; develop and improve experimental procedures. Component weighting 17-23% on each of Paper 1 and Paper 2; overall weighting 20%."
  }
 ],
 "markConventions": {
  "style": "points",
  "summary": "Two papers, each 100 raw marks with a scaling factor of x1, giving a total scaled mark of 200 on which grade boundaries are set. Both papers are sat at the end of the course (linear), at Foundation Tier (entry code 8463F) or Higher Tier (entry code 8463H). The qualification is graded 1-9: Foundation Tier awards grades 1 to 5, Higher Tier grades 4 to 9 with an allowed grade 3 for a student who just fails to achieve grade 4; below that, U. Question types are multiple choice, structured, closed short answer and open response. Extended response questions are of sufficient length to allow students to construct and develop a sustained line of reasoning which is coherent, relevant, substantiated and logically structured, and may be prose, extended calculations, or a combination of both (the six-mark tariff and the levels-based mark schemes come from AQA's papers, not from the specification). Questions drawing on the knowledge and understanding gained from the ten required practical activities count for at least 15% of the overall marks. Maths questions are targeted at a level of demand appropriate to the subject: on Foundation Tier not lower than Key Stage 3, on Higher Tier not lower than Foundation Tier GCSE Mathematics (the DfE requirement that mathematical skills carry 30% of the marks in GCSE Physics is not itself printed in this specification). Appendix A: equations 1–23 must be recalled and applied using standard SI units, and a further 12 equations are supplied on the Physics equation sheet for students to select and apply; equations marked HT are needed on Higher Tier papers only. The 12 equations supplied on the Physics equation sheet, which students select and apply, are: 1 (HT) p = h ρ g (pressure due to a column of liquid); 2 v² − u² = 2 a s; 3 (HT) F = m ∆v / ∆t (force = change in momentum ÷ time taken); 4 Ee = ½ k e² (elastic potential energy); 5 ∆E = m c ∆θ (change in thermal energy); 6 period = 1 ÷ frequency; 7 magnification = image height ÷ object height; 8 (HT) F = B I l (force on a conductor at right angles to a magnetic field carrying a current); 9 E = m L (thermal energy for a change of state); 10 (HT) Vp / Vs = np / ns (transformer turns ratio); 11 (HT) Vp Ip = Vs Is (transformer power); 12 p V = constant (for gases). Equations 1–23 of Appendix A must be recalled and applied.",
  "commandWords": [
   {
    "word": "Describe",
    "means": "Recall facts, events or processes in an accurate way - for example describe a practical procedure for a specified purpose, or describe patterns and trends in data."
   },
   {
    "word": "Explain",
    "means": "Give reasons: a statement of what happens and why, using scientific ideas - for example explain why new data led to a change in a model, or explain the need to control variables."
   },
   {
    "word": "Evaluate",
    "means": "Use the information supplied and your own knowledge to consider the evidence for and against, then reach a judgement - for example evaluate methods to decide whether they are valid, or evaluate the perceived risks of using nuclear radiation against given data and consequences."
   },
   {
    "word": "Calculate",
    "means": "Use the numbers given to work out an answer, showing working, substituting values into the equation with appropriate units for physical quantities and giving an appropriate number of significant figures."
   },
   {
    "word": "Determine",
    "means": "Use given data or information to obtain an answer - for example determine the half-life of a radioactive isotope from given information, or determine the slope and intercept of a linear graph."
   },
   {
    "word": "Suggest",
    "means": "Apply knowledge and understanding to a new situation - for example suggest a hypothesis to explain given observations, or suggest methods of reducing the risk of harm in a practical context."
   },
   {
    "word": "Compare",
    "means": "Describe the similarities and/or differences between things, not just write about one - for example compare the hazards associated with contamination and irradiation."
   },
   {
    "word": "Identify",
    "means": "Name or otherwise characterise - for example identify the independent, dependent and control variables in a given context, or identify amplitude and wavelength from a given diagram."
   },
   {
    "word": "Predict",
    "means": "Give a plausible outcome from a model or from data - for example make predictions or calculate quantities based on a model, or use data to make predictions."
   },
   {
    "word": "Estimate",
    "means": "Give an approximate value or order-of-magnitude answer from the data and typical values - for example estimate the magnitude of everyday accelerations, or estimate how the stopping distance of a vehicle varies over a range of typical speeds."
   },
   {
    "word": "Plot",
    "means": "Mark points accurately on a graph from experimental or other data, with suitable scales and labelled axes, and draw a line of best fit where appropriate."
   },
   {
    "word": "Draw / Interpret",
    "means": "Produce or read a diagram, ray diagram, circuit diagram, free body diagram, vector diagram or graph - for example draw the magnetic field pattern of a bar magnet, or interpret enclosed areas in velocity-time graphs to determine distance travelled."
   }
  ],
  "essayShapes": [
   {
    "marks": 6,
    "minutes": 8,
    "structure": "Extended response. The specification requires a sustained line of reasoning which is coherent, relevant, substantiated and logically structured, in prose, as an extended calculation, or both (the six-mark tariff and levels marking come from AQA's papers). A Level 3 (5-6 mark) answer covers every part of the question with relevant, substantiated physics in a logical order: for a required practical, the method step by step with the independent, dependent and control variables and how the measurements are used; for an explanation, cause to effect to consequence in the board's own terms; for a calculation, the equation stated, values substituted with units and the answer quoted to an appropriate number of significant figures. Level 2 (3-4) has relevant points with gaps or weak structure; Level 1 (1-2) is fragmentary."
   }
  ]
 },
 "source": {
  "url": "https://filestore.aqa.org.uk/resources/physics/specifications/AQA-8463-SP-2016.PDF",
  "etag": "\"1f2028-5c89067d98b9f\"",
  "lastModified": "Mon, 02 Aug 2021 09:43:46 GMT",
  "length": 2039848,
  "checkedAt": "2026-09-16T09:01:58.843Z"
 },
 "topics": [
  {
   "id": "4.1",
   "component": "P1",
   "option": null,
   "name": "Energy",
   "caseStudies": [
    "Required practical activity 1: an investigation to determine the specific heat capacity of one or more materials.",
    "Required practical activity 2 (physics only): investigate the effectiveness of different materials as thermal insulators and the factors that may affect the thermal insulation properties of a material."
   ],
   "ideas": [
    {
     "code": "4.1.1.1",
     "q": "What happens to the way energy is stored when a system changes?",
     "idea": "Energy stores and systems",
     "content": "A system is an object or group of objects. There are changes in the way energy is stored when a system changes. Students should be able to describe all the changes involved in the way energy is stored when a system changes, for common situations. For example: an object projected upwards; a moving object hitting an obstacle; an object accelerated by a constant force; a vehicle slowing down; bringing water to a boil in an electric kettle. Throughout this section on Energy students should be able to calculate the changes in energy involved when a system is changed by: heating; work done by forces; work done when a current flows; and use calculations to show on a common scale how the overall energy in a system is redistributed when the system is changed. The link between work done (energy transfer) and current flow in a circuit is covered in Energy transfers (page 29)."
    },
    {
     "code": "4.1.1.2",
     "q": "How is the energy of a moving object, a stretched spring or a raised object calculated?",
     "idea": "Changes in energy",
     "content": "Students should be able to calculate the amount of energy associated with a moving object, a stretched spring and an object raised above ground level. Kinetic energy: kinetic energy = 0.5 × mass × speed²; Ek = ½ m v²; kinetic energy, Ek, in joules, J; mass, m, in kilograms, kg; speed, v, in metres per second, m/s. Students should be able to recall and apply this equation. Elastic potential energy: elastic potential energy = 0.5 × spring constant × extension²; Ee = ½ k e² (assuming the limit of proportionality has not been exceeded); elastic potential energy, Ee, in joules, J; spring constant, k, in newtons per metre, N/m; extension, e, in metres, m. Students should be able to apply this equation, which is given on the Physics equation sheet. Gravitational potential energy: g.p.e. = mass × gravitational field strength × height; Ep = m g h; gravitational potential energy, Ep, in joules, J; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg (in any calculation the value of the gravitational field strength (g) will be given); height, h, in metres, m. Students should be able to recall and apply this equation. AT 1: investigate the transfer of energy from a gravitational potential energy store to a kinetic energy store."
    },
    {
     "code": "4.1.1.3",
     "q": "How is the energy stored in or released from a system calculated as its temperature changes?",
     "idea": "Energy changes in systems: specific heat capacity",
     "content": "The amount of energy stored in or released from a system as its temperature changes can be calculated using the equation: change in thermal energy = mass × specific heat capacity × temperature change; ∆E = m c ∆θ; change in thermal energy, ∆E, in joules, J; mass, m, in kilograms, kg; specific heat capacity, c, in joules per kilogram per degree Celsius, J/kg °C; temperature change, ∆θ, in degrees Celsius, °C. The specific heat capacity of a substance is the amount of energy required to raise the temperature of one kilogram of the substance by one degree Celsius. Students should be able to apply this equation, which is given on the Physics equation sheet, to calculate the energy change involved when the temperature of a material changes. This equation and specific heat capacity are also included in Temperature changes in a system and specific heat capacity (page 34)."
    },
    {
     "code": "4.1.1.3 RP 1",
     "q": "How is the specific heat capacity of a material determined experimentally?",
     "idea": "Required practical: specific heat capacity",
     "content": "Required practical activity 1: an investigation to determine the specific heat capacity of one or more materials. The investigation will involve linking the decrease of one energy store (or work done) to the increase in temperature and subsequent increase in thermal energy stored. AT skills covered by this practical activity: AT 1 and 5. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 89)."
    },
    {
     "code": "4.1.1.4",
     "q": "What is power and how is it calculated?",
     "idea": "Power",
     "content": "Power is defined as the rate at which energy is transferred or the rate at which work is done. power = energy transferred / time; P = E / t. power = work done / time; P = W / t. power, P, in watts, W; energy transferred, E, in joules, J; time, t, in seconds, s; work done, W, in joules, J. An energy transfer of 1 joule per second is equal to a power of 1 watt. Students should be able to recall and apply both equations, and to give examples that illustrate the definition of power eg comparing two electric motors that both lift the same weight through the same height but one does it faster than the other."
    },
    {
     "code": "4.1.2.1",
     "q": "How is energy dissipated, and how can unwanted transfers be reduced?",
     "idea": "Energy transfers in a system",
     "content": "Energy can be transferred usefully, stored or dissipated, but cannot be created or destroyed. Students should be able to describe with examples where there are energy transfers in a closed system, that there is no net change to the total energy. Students should be able to describe, with examples, how in all system changes energy is dissipated, so that it is stored in less useful ways. This energy is often described as being 'wasted'. Students should be able to explain ways of reducing unwanted energy transfers, for example through lubrication and the use of thermal insulation. The higher the thermal conductivity of a material the higher the rate of energy transfer by conduction across the material. Students should be able to describe how the rate of cooling of a building is affected by the thickness and thermal conductivity of its walls. Students do not need to know the definition of thermal conductivity. AT 1, 5: investigate thermal conductivity using rods of different materials."
    },
    {
     "code": "4.1.2.1 RP 2",
     "q": "How effective are different materials as thermal insulators?",
     "idea": "Required practical: thermal insulation (physics only)",
     "content": "Required practical activity 2 (physics only): investigate the effectiveness of different materials as thermal insulators and the factors that may affect the thermal insulation properties of a material. AT skills covered by this practical activity: AT 1 and 5. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 90)."
    },
    {
     "code": "4.1.2.2",
     "q": "How is the efficiency of an energy transfer calculated and increased?",
     "idea": "Efficiency",
     "content": "The energy efficiency for any energy transfer can be calculated using the equation: efficiency = useful output energy transfer / total input energy transfer. Efficiency may also be calculated using the equation: efficiency = useful power output / total power input. Students should be able to recall and apply both equations. Students may be required to calculate or use efficiency values as a decimal or as a percentage. (HT only) Students should be able to describe ways to increase the efficiency of an intended energy transfer."
    },
    {
     "code": "4.1.3",
     "q": "Which energy resources are available, which are renewable and what are their impacts?",
     "idea": "National and global energy resources",
     "content": "The main energy resources available for use on Earth include: fossil fuels (coal, oil and gas), nuclear fuel, bio-fuel, wind, hydro-electricity, geothermal, the tides, the Sun and water waves. A renewable energy resource is one that is being (or can be) replenished as it is used. The uses of energy resources include: transport, electricity generation and heating. Students should be able to: describe the main energy sources available; distinguish between energy resources that are renewable and energy resources that are non-renewable; compare ways that different energy resources are used, the uses to include transport, electricity generation and heating; understand why some energy resources are more reliable than others; describe the environmental impact arising from the use of different energy resources; explain patterns and trends in the use of energy resources. Descriptions of how energy resources are used to generate electricity are not required. Students should be able to consider the environmental issues that may arise from the use of different energy resources, and show that science has the ability to identify environmental issues arising from the use of energy resources but not always the power to deal with the issues because of political, social, ethical or economic considerations."
    }
   ],
   "skills": [
    "WS 1.2",
    "WS 1.3",
    "WS 1.4",
    "WS 3.5",
    "WS 4.3",
    "WS 4.4",
    "WS 4.5",
    "WS 4.6",
    "MS 1a",
    "MS 1c",
    "MS 2c",
    "MS 3b",
    "MS 3c",
    "MS 4a",
    "AT 1",
    "AT 5"
   ]
  },
  {
   "id": "4.2",
   "component": "P1",
   "option": null,
   "name": "Electricity",
   "caseStudies": [
    "Required practical activity 3: use circuit diagrams to set up and check appropriate circuits to investigate the factors affecting the resistance of electrical circuits.",
    "Required practical activity 4: use circuit diagrams to construct appropriate circuits to investigate the I–V characteristics of a variety of circuit elements, including a filament lamp, a diode and a resistor at constant temperature."
   ],
   "ideas": [
    {
     "code": "4.2.1.1",
     "q": "How are electric circuits represented?",
     "idea": "Standard circuit diagram symbols",
     "content": "Circuit diagrams use standard symbols. Students should be able to draw and interpret circuit diagrams."
    },
    {
     "code": "4.2.1.2",
     "q": "What is electric current and how is charge flow calculated?",
     "idea": "Electrical charge and current",
     "content": "For electrical charge to flow through a closed circuit the circuit must include a source of potential difference. Electric current is a flow of electrical charge. The size of the electric current is the rate of flow of electrical charge. Charge flow, current and time are linked by the equation: charge flow = current × time; Q = I t; charge flow, Q, in coulombs, C; current, I, in amperes, A (amp is acceptable for ampere); time, t, in seconds, s. A current has the same value at any point in a single closed loop. Students should be able to recall and apply this equation."
    },
    {
     "code": "4.2.1.3",
     "q": "How are current, potential difference and resistance related?",
     "idea": "Current, resistance and potential difference",
     "content": "The current (I) through a component depends on both the resistance (R) of the component and the potential difference (V) across the component. The greater the resistance of the component the smaller the current for a given potential difference (pd) across the component. Questions will be set using the term potential difference. Students will gain credit for the correct use of either potential difference or voltage. Current, potential difference or resistance can be calculated using the equation: potential difference = current × resistance; V = I R; potential difference, V, in volts, V; current, I, in amperes, A (amp is acceptable for ampere); resistance, R, in ohms, Ω. Students should be able to recall and apply this equation."
    },
    {
     "code": "4.2.1.3 RP 3",
     "q": "What factors affect the resistance of an electrical circuit?",
     "idea": "Required practical: factors affecting resistance",
     "content": "Required practical activity 3: use circuit diagrams to set up and check appropriate circuits to investigate the factors affecting the resistance of electrical circuits. This should include: the length of a wire at constant temperature; combinations of resistors in series and parallel. AT skills covered by this practical activity: AT 1, 6 and 7. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 91)."
    },
    {
     "code": "4.2.1.4",
     "q": "Which components have a constant resistance and which do not?",
     "idea": "Resistors: ohmic conductors, lamps, diodes, thermistors and LDRs",
     "content": "Students should be able to explain that, for some resistors, the value of R remains constant but that in others it can change as the current changes. The current through an ohmic conductor (at a constant temperature) is directly proportional to the potential difference across the resistor. This means that the resistance remains constant as the current changes. The resistance of components such as lamps, diodes, thermistors and LDRs is not constant; it changes with the current through the component. The resistance of a filament lamp increases as the temperature of the filament increases. The current through a diode flows in one direction only. The diode has a very high resistance in the reverse direction. The resistance of a thermistor decreases as the temperature increases. The applications of thermistors in circuits eg a thermostat is required. The resistance of an LDR decreases as light intensity increases. The application of LDRs in circuits eg switching lights on when it gets dark is required. Students should be able to: explain the design and use of a circuit to measure the resistance of a component by measuring the current through, and potential difference across, the component; draw an appropriate circuit diagram using correct circuit symbols; use graphs to explore whether circuit elements are linear or non-linear and relate the curves produced to their function and properties. AT 6: investigate the relationship between the resistance of a thermistor and temperature, and between the resistance of an LDR and light intensity."
    },
    {
     "code": "4.2.1.4 RP 4",
     "q": "What are the I–V characteristics of a lamp, a diode and a resistor?",
     "idea": "Required practical: I–V characteristics",
     "content": "Required practical activity 4: use circuit diagrams to construct appropriate circuits to investigate the I–V characteristics of a variety of circuit elements, including a filament lamp, a diode and a resistor at constant temperature. AT skills covered by this practical activity: AT 6 and 7. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 93)."
    },
    {
     "code": "4.2.2",
     "q": "How do current, potential difference and resistance behave in series and parallel circuits?",
     "idea": "Series and parallel circuits",
     "content": "There are two ways of joining electrical components, in series and in parallel. Some circuits include both series and parallel parts. For components connected in series: there is the same current through each component; the total potential difference of the power supply is shared between the components; the total resistance of two components is the sum of the resistance of each component. Rtotal = R1 + R2; resistance, R, in ohms, Ω. For components connected in parallel: the potential difference across each component is the same; the total current through the whole circuit is the sum of the currents through the separate components; the total resistance of two resistors is less than the resistance of the smallest individual resistor. Students should be able to: use circuit diagrams to construct and check series and parallel circuits that include a variety of common circuit components; describe the difference between series and parallel circuits; explain qualitatively why adding resistors in series increases the total resistance whilst adding resistors in parallel decreases the total resistance; explain the design and use of dc series circuits for measurement and testing purposes; calculate the currents, potential differences and resistances in dc series circuits; solve problems for circuits which include resistors in series using the concept of equivalent resistance. Students are not required to calculate the total resistance of two resistors joined in parallel."
    },
    {
     "code": "4.2.3.1",
     "q": "What is the difference between direct and alternating potential difference?",
     "idea": "Direct and alternating potential difference",
     "content": "Mains electricity is an ac supply. In the United Kingdom the domestic electricity supply has a frequency of 50 Hz and is about 230 V. Students should be able to explain the difference between direct and alternating potential difference."
    },
    {
     "code": "4.2.3.2",
     "q": "How is mains electricity wired and why is it dangerous?",
     "idea": "Mains electricity",
     "content": "Most electrical appliances are connected to the mains using three-core cable. The insulation covering each wire is colour coded for easy identification: live wire – brown; neutral wire – blue; earth wire – green and yellow stripes. The live wire carries the alternating potential difference from the supply. The neutral wire completes the circuit. The earth wire is a safety wire to stop the appliance becoming live. The potential difference between the live wire and earth (0 V) is about 230 V. The neutral wire is at, or close to, earth potential (0 V). The earth wire is at 0 V, it only carries a current if there is a fault. Students should be able to explain: that a live wire may be dangerous even when a switch in the mains circuit is open; the dangers of providing any connection between the live wire and earth."
    },
    {
     "code": "4.2.4.1",
     "q": "How is electrical power related to potential difference, current and resistance?",
     "idea": "Electrical power",
     "content": "Students should be able to explain how the power transfer in any circuit device is related to the potential difference across it and the current through it, and to the energy changes over time: power = potential difference × current; P = V I. power = current² × resistance; P = I² R. power, P, in watts, W; potential difference, V, in volts, V; current, I, in amperes, A (amp is acceptable for ampere); resistance, R, in ohms, Ω. Students should be able to recall and apply both equations."
    },
    {
     "code": "4.2.4.2",
     "q": "How much energy does an appliance transfer, and how is it calculated?",
     "idea": "Energy transfers in everyday appliances",
     "content": "Everyday electrical appliances are designed to bring about energy transfers. The amount of energy an appliance transfers depends on how long the appliance is switched on for and the power of the appliance. Students should be able to describe how different domestic appliances transfer energy from batteries or ac mains to the kinetic energy of electric motors or the energy of heating devices. Work is done when charge flows in a circuit. The amount of energy transferred by electrical work can be calculated using the equations: energy transferred = power × time; E = P t. energy transferred = charge flow × potential difference; E = Q V. energy transferred, E, in joules, J; power, P, in watts, W; time, t, in seconds, s; charge flow, Q, in coulombs, C; potential difference, V, in volts, V. Students should be able to recall and apply both equations. Students should be able to explain how the power of a circuit device is related to the potential difference across it and the current through it, and to the energy transferred over a given time, and to describe, with examples, the relationship between the power ratings for domestic electrical appliances and the changes in stored energy when they are in use."
    },
    {
     "code": "4.2.4.3",
     "q": "Why does the National Grid transmit electricity at high potential difference?",
     "idea": "The National Grid",
     "content": "The National Grid is a system of cables and transformers linking power stations to consumers. Electrical power is transferred from power stations to consumers using the National Grid. Step-up transformers are used to increase the potential difference from the power station to the transmission cables then step-down transformers are used to decrease, to a much lower value, the potential difference for domestic use. Students should be able to explain why the National Grid system is an efficient way to transfer energy. The construction and operation of transformers is covered in Transformers (HT only) (page 72)."
    },
    {
     "code": "4.2.5.1",
     "q": "How do insulating materials become electrically charged? (physics only)",
     "idea": "Static charge (physics only)",
     "content": "(physics only) When certain insulating materials are rubbed against each other they become electrically charged. Negatively charged electrons are rubbed off one material and on to the other. The material that gains electrons becomes negatively charged. The material that loses electrons is left with an equal positive charge. When two electrically charged objects are brought close together they exert a force on each other. Two objects that carry the same type of charge repel. Two objects that carry different types of charge attract. Attraction and repulsion between two charged objects are examples of non-contact force. Students should be able to: describe the production of static electricity, and sparking, by rubbing surfaces; describe evidence that charged objects exert forces of attraction or repulsion on one another when not in contact; explain how the transfer of electrons between objects can explain the phenomena of static electricity."
    },
    {
     "code": "4.2.5.2",
     "q": "What is an electric field and how does it explain non-contact forces? (physics only)",
     "idea": "Electric fields (physics only)",
     "content": "(physics only) A charged object creates an electric field around itself. The electric field is strongest close to the charged object. The further away from the charged object, the weaker the field. A second charged object placed in the field experiences a force. The force gets stronger as the distance between the objects decreases. Students should be able to: draw the electric field pattern for an isolated charged sphere; explain the concept of an electric field; explain how the concept of an electric field helps to explain the non-contact force between charged objects as well as other electrostatic phenomena such as sparking."
    }
   ],
   "skills": [
    "WS 1.2",
    "WS 1.4",
    "WS 1.5",
    "WS 4.5",
    "MS 1c",
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "MS 4c",
    "MS 4d",
    "MS 4e",
    "AT 1",
    "AT 6",
    "AT 7"
   ]
  },
  {
   "id": "4.3",
   "component": "P1",
   "option": null,
   "name": "Particle model of matter",
   "caseStudies": [
    "Required practical activity 5: use appropriate apparatus to make and record the measurements needed to determine the densities of regular and irregular solid objects and liquids."
   ],
   "ideas": [
    {
     "code": "4.3.1.1",
     "q": "How is density defined and calculated, and how does the particle model explain it?",
     "idea": "Density of materials",
     "content": "The density of a material is defined by the equation: density = mass / volume; ρ = m / V; density, ρ, in kilograms per metre cubed, kg/m³; mass, m, in kilograms, kg; volume, V, in metres cubed, m³. Students should be able to recall and apply this equation to changes where mass is conserved. The particle model can be used to explain the different states of matter and differences in density. Students should be able to recognise/draw simple diagrams to model the difference between solids, liquids and gases, and to explain the differences in density between the different states of matter in terms of the arrangement of atoms or molecules."
    },
    {
     "code": "4.3.1.1 RP 5",
     "q": "How are the densities of solids and liquids measured?",
     "idea": "Required practical: density of solids and liquids",
     "content": "Required practical activity 5: use appropriate apparatus to make and record the measurements needed to determine the densities of regular and irregular solid objects and liquids. Volume should be determined from the dimensions of regularly shaped objects, and by a displacement technique for irregularly shaped objects. Dimensions to be measured using appropriate apparatus such as a ruler, micrometer or Vernier callipers. AT skills covered by this practical activity: AT 1. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 94)."
    },
    {
     "code": "4.3.1.2",
     "q": "What happens to mass and to the material when a substance changes state?",
     "idea": "Changes of state",
     "content": "Students should be able to describe how, when substances change state (melt, freeze, boil, evaporate, condense or sublimate), mass is conserved. Changes of state are physical changes which differ from chemical changes because the material recovers its original properties if the change is reversed."
    },
    {
     "code": "4.3.2.1",
     "q": "What is internal energy?",
     "idea": "Internal energy",
     "content": "Energy is stored inside a system by the particles (atoms and molecules) that make up the system. This is called internal energy. Internal energy is the total kinetic energy and potential energy of all the particles (atoms and molecules) that make up a system. Heating changes the energy stored within the system by increasing the energy of the particles that make up the system. This either raises the temperature of the system or produces a change of state."
    },
    {
     "code": "4.3.2.2",
     "q": "What determines the temperature rise of a heated substance?",
     "idea": "Temperature changes in a system and specific heat capacity",
     "content": "If the temperature of the system increases, the increase in temperature depends on the mass of the substance heated, the type of material and the energy input to the system. The following equation applies: change in thermal energy = mass × specific heat capacity × temperature change; ∆E = m c ∆θ; change in thermal energy, ∆E, in joules, J; mass, m, in kilograms, kg; specific heat capacity, c, in joules per kilogram per degree Celsius, J/kg °C; temperature change, ∆θ, in degrees Celsius, °C. The specific heat capacity of a substance is the amount of energy required to raise the temperature of one kilogram of the substance by one degree Celsius. Students should be able to apply this equation, which is given on the Physics equation sheet, to calculate the energy change involved when the temperature of a material changes. This equation and specific heat capacity are also included in Energy changes in systems (page 19)."
    },
    {
     "code": "4.3.2.3",
     "q": "What is specific latent heat and how does it differ from specific heat capacity?",
     "idea": "Changes of state and specific latent heat",
     "content": "If a change of state happens: the energy needed for a substance to change state is called latent heat. When a change of state occurs, the energy supplied changes the energy stored (internal energy) but not the temperature. The specific latent heat of a substance is the amount of energy required to change the state of one kilogram of the substance with no change in temperature. energy for a change of state = mass × specific latent heat; E = m L; energy, E, in joules, J; mass, m, in kilograms, kg; specific latent heat, L, in joules per kilogram, J/kg. Specific latent heat of fusion – change of state from solid to liquid. Specific latent heat of vaporisation – change of state from liquid to vapour. Students should be able to apply this equation, which is given on the Physics equation sheet, to calculate the energy change involved in a change of state. Students should be able to interpret heating and cooling graphs that include changes of state, and to distinguish between specific heat capacity and specific latent heat. AT 5: perform an experiment to measure the latent heat of fusion of water."
    },
    {
     "code": "4.3.3.1",
     "q": "How does the motion of gas molecules relate to temperature and pressure?",
     "idea": "Particle motion in gases",
     "content": "The molecules of a gas are in constant random motion. The temperature of the gas is related to the average kinetic energy of the molecules. Changing the temperature of a gas, held at constant volume, changes the pressure exerted by the gas. Students should be able to: explain how the motion of the molecules in a gas is related to both its temperature and its pressure; explain qualitatively the relation between the temperature of a gas and its pressure at constant volume."
    },
    {
     "code": "4.3.3.2",
     "q": "How are the pressure and volume of a fixed mass of gas related at constant temperature? (physics only)",
     "idea": "Pressure in gases (physics only)",
     "content": "(physics only) A gas can be compressed or expanded by pressure changes. The pressure produces a net force at right angles to the wall of the gas container (or any surface). Students should be able to use the particle model to explain how increasing the volume in which a gas is contained, at constant temperature, can lead to a decrease in pressure. For a fixed mass of gas held at a constant temperature: pressure × volume = constant; p V = constant; pressure, p, in pascals, Pa; volume, V, in metres cubed, m³. Students should be able to calculate the change in the pressure of a gas or the volume of a gas (a fixed mass held at constant temperature) when either the pressure or volume is increased or decreased. Students should be able to apply this equation which is given on the Physics equation sheet."
    },
    {
     "code": "4.3.3.3",
     "q": "Why does doing work on a gas raise its temperature? (physics only) (HT only)",
     "idea": "Increasing the pressure of a gas (physics only) (HT only)",
     "content": "(physics only) (HT only) Work is the transfer of energy by a force. Doing work on a gas increases the internal energy of the gas and can cause an increase in the temperature of the gas. Students should be able to explain how, in a given situation eg a bicycle pump, doing work on an enclosed gas leads to an increase in the temperature of the gas."
    }
   ],
   "skills": [
    "WS 1.2",
    "WS 3.5",
    "MS 1a",
    "MS 1b",
    "MS 1c",
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "MS 4a",
    "AT 1",
    "AT 5"
   ]
  },
  {
   "id": "4.4",
   "component": "P1",
   "option": null,
   "name": "Atomic structure",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.4.1.1",
     "q": "What is an atom made of and how big is it?",
     "idea": "The structure of an atom",
     "content": "Atoms are very small, having a radius of about 1 × 10⁻¹⁰ metres. The basic structure of an atom is a positively charged nucleus composed of both protons and neutrons surrounded by negatively charged electrons. The radius of a nucleus is less than 1/10 000 of the radius of an atom. Most of the mass of an atom is concentrated in the nucleus. The electrons are arranged at different distances from the nucleus (different energy levels). The electron arrangements may change with the absorption of electromagnetic radiation (move further from the nucleus; a higher energy level) or by the emission of electromagnetic radiation (move closer to the nucleus; a lower energy level). Students should be able to recognise expressions given in standard form."
    },
    {
     "code": "4.4.1.2",
     "q": "What are mass number, atomic number and isotopes?",
     "idea": "Mass number, atomic number and isotopes",
     "content": "In an atom the number of electrons is equal to the number of protons in the nucleus. Atoms have no overall electrical charge. All atoms of a particular element have the same number of protons. The number of protons in an atom of an element is called its atomic number. The total number of protons and neutrons in an atom is called its mass number. Atoms can be represented as shown in the example given in the specification. Atoms of the same element can have different numbers of neutrons; these atoms are called isotopes of that element. Atoms turn into positive ions if they lose one or more outer electron(s). Students should be able to relate differences between isotopes to differences in conventional representations of their identities, charges and masses."
    },
    {
     "code": "4.4.1.3",
     "q": "How did the model of the atom develop from the plum pudding model to the nuclear model?",
     "idea": "The development of the model of the atom (common content with chemistry)",
     "content": "New experimental evidence may lead to a scientific model being changed or replaced. Before the discovery of the electron, atoms were thought to be tiny spheres that could not be divided. The discovery of the electron led to the plum pudding model of the atom, which suggested that the atom is a ball of positive charge with negative electrons embedded in it. The results from the alpha particle scattering experiment led to the conclusion that the mass of an atom was concentrated at the centre (nucleus) and that the nucleus was charged. This nuclear model replaced the plum pudding model. Niels Bohr adapted the nuclear model by suggesting that electrons orbit the nucleus at specific distances; the theoretical calculations of Bohr agreed with experimental observations. Later experiments led to the idea that the positive charge of any nucleus could be subdivided into a whole number of smaller particles, each particle having the same amount of positive charge; the name proton was given to these particles. The experimental work of James Chadwick provided the evidence to show the existence of neutrons within the nucleus, about 20 years after the nucleus became an accepted scientific idea. Students should be able to describe why the new evidence from the scattering experiment led to a change in the atomic model, and the difference between the plum pudding model of the atom and the nuclear model of the atom. Details of experimental work supporting the Bohr model are not required. Details of Chadwick's experimental work are not required."
    },
    {
     "code": "4.4.2.1",
     "q": "What types of nuclear radiation are emitted in radioactive decay?",
     "idea": "Radioactive decay and nuclear radiation",
     "content": "Some atomic nuclei are unstable. The nucleus gives out radiation as it changes to become more stable. This is a random process called radioactive decay. Activity is the rate at which a source of unstable nuclei decays. Activity is measured in becquerel (Bq). Count-rate is the number of decays recorded each second by a detector (eg Geiger-Muller tube). The nuclear radiation emitted may be: an alpha particle (α) – this consists of two neutrons and two protons, it is the same as a helium nucleus; a beta particle (β) – a high speed electron ejected from the nucleus as a neutron turns into a proton; a gamma ray (γ) – electromagnetic radiation from the nucleus; a neutron (n). Required knowledge of the properties of alpha particles, beta particles and gamma rays is limited to their penetration through materials, their range in air and ionising power. Students should be able to apply their knowledge to the uses of radiation and evaluate the best sources of radiation to use in a given situation."
    },
    {
     "code": "4.4.2.2",
     "q": "How are alpha and beta decays written as nuclear equations?",
     "idea": "Nuclear equations",
     "content": "Nuclear equations are used to represent radioactive decay. In a nuclear equation an alpha particle and a beta particle may be represented by the symbols given in the specification. The emission of the different types of nuclear radiation may cause a change in the mass and/or the charge of the nucleus. Alpha decay causes both the mass and charge of the nucleus to decrease. Beta decay does not cause the mass of the nucleus to change but does cause the charge of the nucleus to increase. Students are not required to recall the two worked examples given. Students should be able to use the names and symbols of common nuclei and particles to write balanced equations that show single alpha (α) and beta (β) decay. This is limited to balancing the atomic numbers and mass numbers. The identification of daughter elements from such decays is not required. The emission of a gamma ray does not cause the mass or the charge of the nucleus to change."
    },
    {
     "code": "4.4.2.3",
     "q": "What is half-life and how is it determined?",
     "idea": "Half-lives and the random nature of radioactive decay",
     "content": "Radioactive decay is random. The half-life of a radioactive isotope is the time it takes for the number of nuclei of the isotope in a sample to halve, or the time it takes for the count rate (or activity) from a sample containing the isotope to fall to half its initial level. Students should be able to explain the concept of half-life and how it is related to the random nature of radioactive decay, and to determine the half-life of a radioactive isotope from given information. (HT only) Students should be able to calculate the net decline, expressed as a ratio, in a radioactive emission after a given number of half-lives."
    },
    {
     "code": "4.4.2.4",
     "q": "How does radioactive contamination differ from irradiation?",
     "idea": "Radioactive contamination",
     "content": "Radioactive contamination is the unwanted presence of materials containing radioactive atoms on other materials. The hazard from contamination is due to the decay of the contaminating atoms. The type of radiation emitted affects the level of hazard. Irradiation is the process of exposing an object to nuclear radiation. The irradiated object does not become radioactive. Students should be able to compare the hazards associated with contamination and irradiation. Suitable precautions must be taken to protect against any hazard that the radioactive source used in the process of irradiation may present. Students should understand that it is important for the findings of studies into the effects of radiation on humans to be published and shared with other scientists so that the findings can be checked by peer review."
    },
    {
     "code": "4.4.3.1",
     "q": "Where does background radiation come from? (physics only)",
     "idea": "Background radiation (physics only)",
     "content": "(physics only) Background radiation is around us all of the time. It comes from: natural sources such as rocks and cosmic rays from space; man-made sources such as the fallout from nuclear weapons testing and nuclear accidents. The level of background radiation and radiation dose may be affected by occupation and/or location. Radiation dose is measured in sieverts (Sv); 1000 millisieverts (mSv) = 1 sievert (Sv). Students will not need to recall the unit of radiation dose."
    },
    {
     "code": "4.4.3.2",
     "q": "Why does the half-life of an isotope change the hazard it presents? (physics only)",
     "idea": "Different half-lives of radioactive isotopes (physics only)",
     "content": "(physics only) Radioactive isotopes have a very wide range of half-life values. Students should be able to explain why the hazards associated with radioactive material differ according to the half-life involved. Students should be able to use data presented in standard form."
    },
    {
     "code": "4.4.3.3",
     "q": "How is nuclear radiation used in medicine, and how are the risks judged? (physics only)",
     "idea": "Uses of nuclear radiation (physics only)",
     "content": "(physics only) Nuclear radiations are used in medicine for the exploration of internal organs and the control or destruction of unwanted tissue. Students should be able to: describe and evaluate the uses of nuclear radiations for exploration of internal organs, and for control or destruction of unwanted tissue; evaluate the perceived risks of using nuclear radiations in relation to given data and consequences."
    },
    {
     "code": "4.4.4.1",
     "q": "What is nuclear fission and how does a chain reaction occur? (physics only)",
     "idea": "Nuclear fission (physics only)",
     "content": "(physics only) Nuclear fission is the splitting of a large and unstable nucleus (eg uranium or plutonium). Spontaneous fission is rare. Usually, for fission to occur the unstable nucleus must first absorb a neutron. The nucleus undergoing fission splits into two smaller nuclei, roughly equal in size, and emits two or three neutrons plus gamma rays. Energy is released by the fission reaction. All of the fission products have kinetic energy. The neutrons may go on to start a chain reaction. The chain reaction is controlled in a nuclear reactor to control the energy released. The explosion caused by a nuclear weapon is caused by an uncontrolled chain reaction. Students should be able to draw/interpret diagrams representing nuclear fission and how a chain reaction may occur."
    },
    {
     "code": "4.4.4.2",
     "q": "What is nuclear fusion? (physics only)",
     "idea": "Nuclear fusion (physics only)",
     "content": "(physics only) Nuclear fusion is the joining of two light nuclei to form a heavier nucleus. In this process some of the mass may be converted into the energy of radiation."
    }
   ],
   "skills": [
    "WS 1.1",
    "WS 1.2",
    "WS 1.4",
    "WS 1.5",
    "WS 1.6",
    "WS 4.1",
    "WS 4.4",
    "MS 1b",
    "MS 1c",
    "MS 3c",
    "MS 3d",
    "MS 4a"
   ]
  },
  {
   "id": "4.5",
   "component": "P2",
   "option": null,
   "name": "Forces",
   "caseStudies": [
    "Required practical activity 6: investigate the relationship between force and extension for a spring.",
    "Required practical activity 7: investigate the effect of varying the force on the acceleration of an object of constant mass, and the effect of varying the mass of an object on the acceleration produced by a constant force."
   ],
   "ideas": [
    {
     "code": "4.5.1.1",
     "q": "What is the difference between a scalar and a vector quantity?",
     "idea": "Scalar and vector quantities",
     "content": "Scalar quantities have magnitude only. Vector quantities have magnitude and an associated direction. A vector quantity may be represented by an arrow. The length of the arrow represents the magnitude, and the direction of the arrow the direction of the vector quantity."
    },
    {
     "code": "4.5.1.2",
     "q": "What is a force, and which forces are contact and which non-contact?",
     "idea": "Contact and non-contact forces",
     "content": "A force is a push or pull that acts on an object due to the interaction with another object. All forces between objects are either: contact forces – the objects are physically touching; non-contact forces – the objects are physically separated. Examples of contact forces include friction, air resistance, tension and normal contact force. Examples of non-contact forces are gravitational force, electrostatic force and magnetic force. Force is a vector quantity. Students should be able to describe the interaction between pairs of objects which produce a force on each object. The forces to be represented as vectors."
    },
    {
     "code": "4.5.1.3",
     "q": "How is weight calculated and how does it relate to mass?",
     "idea": "Gravity, weight and centre of mass",
     "content": "Weight is the force acting on an object due to gravity. The force of gravity close to the Earth is due to the gravitational field around the Earth. The weight of an object depends on the gravitational field strength at the point where the object is. The weight of an object can be calculated using the equation: weight = mass × gravitational field strength; W = m g; weight, W, in newtons, N; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg (in any calculation the value of the gravitational field strength (g) will be given). Students should be able to recall and apply this equation. The weight of an object may be considered to act at a single point referred to as the object's 'centre of mass'. The weight of an object and the mass of an object are directly proportional. Weight is measured using a calibrated spring-balance (a newtonmeter). Students should recognise and be able to use the symbol for proportionality, ∝."
    },
    {
     "code": "4.5.1.4",
     "q": "How are several forces on an object combined into one resultant force?",
     "idea": "Resultant forces",
     "content": "A number of forces acting on an object may be replaced by a single force that has the same effect as all the original forces acting together. This single force is called the resultant force. Students should be able to calculate the resultant of two forces that act in a straight line. (HT only) Students should be able to: describe examples of the forces acting on an isolated object or system; use free body diagrams to describe qualitatively examples where several forces lead to a resultant force on an object, including balanced forces when the resultant force is zero. (HT only) A single force can be resolved into two components acting at right angles to each other. The two component forces together have the same effect as the single force. (HT only) Students should be able to use vector diagrams to illustrate resolution of forces, equilibrium situations and determine the resultant of two forces, to include both magnitude and direction (scale drawings only)."
    },
    {
     "code": "4.5.2",
     "q": "How is the work done by a force calculated?",
     "idea": "Work done and energy transfer",
     "content": "When a force causes an object to move through a distance work is done on the object. So a force does work on an object when the force causes a displacement of the object. The work done by a force on an object can be calculated using the equation: work done = force × distance moved along the line of action of the force; W = F s; work done, W, in joules, J; force, F, in newtons, N; distance, s, in metres, m. Students should be able to recall and apply this equation. One joule of work is done when a force of one newton causes a displacement of one metre. 1 joule = 1 newton-metre. Students should be able to describe the energy transfer involved when work is done, and to convert between newton-metres and joules. Work done against the frictional forces acting on an object causes a rise in the temperature of the object."
    },
    {
     "code": "4.5.3",
     "q": "How does a spring extend under a force and how much energy does it store?",
     "idea": "Forces and elasticity",
     "content": "Students should be able to: give examples of the forces involved in stretching, bending or compressing an object; explain why, to change the shape of an object (by stretching, bending or compressing), more than one force has to be applied – this is limited to stationary objects only; describe the difference between elastic deformation and inelastic deformation caused by stretching forces. The extension of an elastic object, such as a spring, is directly proportional to the force applied, provided that the limit of proportionality is not exceeded. force = spring constant × extension; F = k e; force, F, in newtons, N; spring constant, k, in newtons per metre, N/m; extension, e, in metres, m. Students should be able to recall and apply this equation. This relationship also applies to the compression of an elastic object, where 'e' would be the compression of the object. A force that stretches (or compresses) a spring does work and elastic potential energy is stored in the spring. Provided the spring is not inelastically deformed, the work done on the spring and the elastic potential energy stored are equal. Students should be able to: describe the difference between a linear and non-linear relationship between force and extension; calculate a spring constant in linear cases; interpret data from an investigation of the relationship between force and extension; calculate work done in stretching (or compressing) a spring (up to the limit of proportionality) using the equation elastic potential energy = 0.5 × spring constant × extension²; Ee = ½ k e², which is given on the Physics equation sheet; calculate relevant values of stored energy and energy transfers."
    },
    {
     "code": "4.5.3 RP 6",
     "q": "How does the extension of a spring depend on the force applied?",
     "idea": "Required practical: force and extension for a spring",
     "content": "Required practical activity 6: investigate the relationship between force and extension for a spring. AT skills covered by this practical activity: AT 1 and 2. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 95)."
    },
    {
     "code": "4.5.4",
     "q": "How do moments, levers and gears transmit the turning effect of a force? (physics only)",
     "idea": "Moments, levers and gears (physics only)",
     "content": "(physics only) A force or a system of forces may cause an object to rotate. Students should be able to describe examples in which forces cause rotation. The turning effect of a force is called the moment of the force. The size of the moment is defined by the equation: moment of a force = force × distance; M = F d; moment of a force, M, in newton-metres, Nm; force, F, in newtons, N; distance, d, is the perpendicular distance from the pivot to the line of action of the force, in metres, m. Students should be able to recall and apply this equation. If an object is balanced, the total clockwise moment about a pivot equals the total anticlockwise moment about that pivot. Students should be able to calculate the size of a force, or its distance from a pivot, acting on an object that is balanced. A simple lever and a simple gear system can both be used to transmit the rotational effects of forces. Students should be able to explain how levers and gears transmit the rotational effects of forces."
    },
    {
     "code": "4.5.5.1.1",
     "q": "How is pressure at the surface of a fluid calculated? (physics only)",
     "idea": "Pressure in a fluid 1 (physics only)",
     "content": "(physics only) A fluid can be either a liquid or a gas. The pressure in fluids causes a force normal (at right angles) to any surface. The pressure at the surface of a fluid can be calculated using the equation: pressure = force normal to a surface / area of that surface; p = F / A; pressure, p, in pascals, Pa; force, F, in newtons, N; area, A, in metres squared, m². Students should be able to recall and apply this equation."
    },
    {
     "code": "4.5.5.1.2",
     "q": "Why does pressure increase with depth in a liquid, and what causes upthrust? (physics only) (HT only)",
     "idea": "Pressure in a fluid 2 (physics only) (HT only)",
     "content": "(physics only) (HT only) The pressure due to a column of liquid can be calculated using the equation: pressure = height of the column × density of the liquid × gravitational field strength; p = h ρ g; pressure, p, in pascals, Pa; height of the column, h, in metres, m; density, ρ, in kilograms per metre cubed, kg/m³; gravitational field strength, g, in newtons per kilogram, N/kg (in any calculation the value of the gravitational field strength (g) will be given). Students should be able to apply this equation, which is given on the Physics equation sheet, and to explain why, in a liquid, pressure at a point increases with the height of the column of liquid above that point and with the density of the liquid, and to calculate the differences in pressure at different depths in a liquid. A partially (or totally) submerged object experiences a greater pressure on the bottom surface than on the top surface. This creates a resultant force upwards. This force is called the upthrust. Students should be able to describe the factors which influence floating and sinking."
    },
    {
     "code": "4.5.5.2",
     "q": "Why does atmospheric pressure fall with height? (physics only)",
     "idea": "Atmospheric pressure (physics only)",
     "content": "(physics only) The atmosphere is a thin layer (relative to the size of the Earth) of air round the Earth. The atmosphere gets less dense with increasing altitude. Air molecules colliding with a surface create atmospheric pressure. The number of air molecules (and so the weight of air) above a surface decreases as the height of the surface above ground level increases. So as height increases there is always less air above a surface than there is at a lower height. So atmospheric pressure decreases with an increase in height. Students should be able to: describe a simple model of the Earth's atmosphere and of atmospheric pressure; explain why atmospheric pressure varies with height above a surface."
    },
    {
     "code": "4.5.6.1.1",
     "q": "How does displacement differ from distance?",
     "idea": "Distance and displacement",
     "content": "Distance is how far an object moves. Distance does not involve direction. Distance is a scalar quantity. Displacement includes both the distance an object moves, measured in a straight line from the start point to the finish point, and the direction of that straight line. Displacement is a vector quantity. Students should be able to express a displacement in terms of both the magnitude and direction. Throughout this section (Forces and motion), students should be able to use ratios and proportional reasoning to convert units and to compute rates."
    },
    {
     "code": "4.5.6.1.2",
     "q": "What are typical speeds and how is distance travelled calculated?",
     "idea": "Speed",
     "content": "Speed does not involve direction. Speed is a scalar quantity. The speed of a moving object is rarely constant. When people walk, run or travel in a car their speed is constantly changing. The speed at which a person can walk, run or cycle depends on many factors including: age, terrain, fitness and distance travelled. Typical values may be taken as: walking ~1.5 m/s; running ~3 m/s; cycling ~6 m/s. Students should be able to recall typical values of speed for a person walking, running and cycling as well as the typical values of speed for different types of transportation systems. It is not only moving objects that have varying speed. The speed of sound and the speed of the wind also vary. A typical value for the speed of sound in air is 330 m/s. Students should be able to make measurements of distance and time and then calculate speeds of objects. For an object moving at constant speed the distance travelled in a specific time can be calculated using the equation: distance travelled = speed × time; s = v t; distance, s, in metres, m; speed, v, in metres per second, m/s; time, t, in seconds, s. Students should be able to recall and apply this equation, and to calculate average speed for non-uniform motion."
    },
    {
     "code": "4.5.6.1.3",
     "q": "How does velocity differ from speed?",
     "idea": "Velocity",
     "content": "The velocity of an object is its speed in a given direction. Velocity is a vector quantity. Students should be able to explain the vector–scalar distinction as it applies to displacement, distance, velocity and speed. (HT only) Students should be able to explain qualitatively, with examples, that motion in a circle involves constant speed but changing velocity."
    },
    {
     "code": "4.5.6.1.4",
     "q": "How is speed found from a distance–time graph?",
     "idea": "The distance–time relationship",
     "content": "If an object moves along a straight line, the distance travelled can be represented by a distance–time graph. The speed of an object can be calculated from the gradient of its distance–time graph. (HT only) If an object is accelerating, its speed at any particular time can be determined by drawing a tangent and measuring the gradient of the distance–time graph at that time. Students should be able to draw distance–time graphs from measurements and extract and interpret lines and slopes of distance–time graphs, translating information between graphical and numerical form. Students should be able to determine speed from a distance–time graph."
    },
    {
     "code": "4.5.6.1.5",
     "q": "How is acceleration calculated, and what do velocity–time graphs show?",
     "idea": "Acceleration and terminal velocity",
     "content": "The average acceleration of an object can be calculated using the equation: acceleration = change in velocity / time taken; a = ∆v / t; acceleration, a, in metres per second squared, m/s²; change in velocity, ∆v, in metres per second, m/s; time, t, in seconds, s. An object that slows down is decelerating. Students should be able to recall and apply this equation and to estimate the magnitude of everyday accelerations. The acceleration of an object can be calculated from the gradient of a velocity–time graph. (HT only) The distance travelled by an object (or displacement of an object) can be calculated from the area under a velocity–time graph. Students should be able to: draw velocity–time graphs from measurements and interpret lines and slopes to determine acceleration; (HT only) interpret enclosed areas in velocity–time graphs to determine distance travelled (or displacement); (HT only) measure, when appropriate, the area under a velocity–time graph by counting squares. The following equation applies to uniform acceleration: final velocity² − initial velocity² = 2 × acceleration × distance; v² − u² = 2 a s; final velocity, v, in metres per second, m/s; initial velocity, u, in metres per second, m/s; acceleration, a, in metres per second squared, m/s²; distance, s, in metres, m. Students should be able to apply this equation which is given on the Physics equation sheet. Near the Earth's surface any object falling freely under gravity has an acceleration of about 9.8 m/s². An object falling through a fluid initially accelerates due to the force of gravity. Eventually the resultant force will be zero and the object will move at its terminal velocity. (physics only) Students should be able to draw and interpret velocity–time graphs for objects that reach terminal velocity, and interpret the changing motion in terms of the forces acting. AT 1, 2: investigation to measure the effect of air resistance on a falling object eg a model parachute."
    },
    {
     "code": "4.5.6.2.1",
     "q": "What does Newton's First Law say about motion with zero resultant force?",
     "idea": "Newton's First Law",
     "content": "Newton's First Law: if the resultant force acting on an object is zero and the object is stationary, the object remains stationary; if the object is moving, the object continues to move at the same speed and in the same direction, so the object continues to move at the same velocity. So, when a vehicle travels at a steady speed the resistive forces balance the driving force. So, the velocity (speed and/or direction) of an object will only change if a resultant force is acting on the object. Students should be able to apply Newton's First Law to explain the motion of objects moving with a uniform velocity and objects where the speed and/or direction changes. (HT only) The tendency of objects to continue in their state of rest or of uniform motion is called inertia."
    },
    {
     "code": "4.5.6.2.2",
     "q": "How are resultant force, mass and acceleration related?",
     "idea": "Newton's Second Law",
     "content": "Newton's Second Law: the acceleration of an object is proportional to the resultant force acting on the object, and inversely proportional to the mass of the object. As an equation: resultant force = mass × acceleration; F = m a; force, F, in newtons, N; mass, m, in kilograms, kg; acceleration, a, in metres per second squared, m/s². Students should be able to recall and apply this equation, and should recognise and be able to use the symbol for proportionality, ∝. (HT only) Students should be able to explain that inertial mass is a measure of how difficult it is to change the velocity of an object, and that inertial mass is defined as the ratio of force over acceleration. Students should be able to estimate the speed, accelerations and forces involved in large accelerations for everyday road transport, and should recognise and be able to use the symbol that indicates an approximate value or approximate answer, ~."
    },
    {
     "code": "4.5.6.2.2 RP 7",
     "q": "How does acceleration depend on force and on mass?",
     "idea": "Required practical: acceleration, force and mass",
     "content": "Required practical activity 7: investigate the effect of varying the force on the acceleration of an object of constant mass, and the effect of varying the mass of an object on the acceleration produced by a constant force. AT skills covered by this practical activity: AT 1, 2 and 3. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 96)."
    },
    {
     "code": "4.5.6.2.3",
     "q": "What does Newton's Third Law say about interacting objects?",
     "idea": "Newton's Third Law",
     "content": "Newton's Third Law: whenever two objects interact, the forces they exert on each other are equal and opposite. Students should be able to apply Newton's Third Law to examples of equilibrium situations."
    },
    {
     "code": "4.5.6.3.1",
     "q": "What makes up the stopping distance of a vehicle?",
     "idea": "Stopping distance",
     "content": "The stopping distance of a vehicle is the sum of the distance the vehicle travels during the driver's reaction time (thinking distance) and the distance it travels under the braking force (braking distance). For a given braking force the greater the speed of the vehicle, the greater the stopping distance. (physics only) Students should be able to estimate how the distance for a vehicle to make an emergency stop varies over a range of speeds typical for that vehicle. (physics only) Students will be required to interpret graphs relating speed to stopping distance for a range of vehicles."
    },
    {
     "code": "4.5.6.3.2",
     "q": "What affects a driver's reaction time and how is it measured?",
     "idea": "Reaction time",
     "content": "Reaction times vary from person to person. Typical values range from 0.2 s to 0.9 s. A driver's reaction time can be affected by tiredness, drugs and alcohol. Distractions may also affect a driver's ability to react. Students should be able to: explain methods used to measure human reaction times and recall typical results; interpret and evaluate measurements from simple methods to measure the different reaction times of students; evaluate the effect of various factors on thinking distance based on given data. AT 1: measure the effect of distractions on reaction time."
    },
    {
     "code": "4.5.6.3.3",
     "q": "What conditions increase the braking distance of a vehicle?",
     "idea": "Factors affecting braking distance 1",
     "content": "The braking distance of a vehicle can be affected by adverse road and weather conditions and poor condition of the vehicle. Adverse road conditions include wet or icy conditions. Poor condition of the vehicle is limited to the vehicle's brakes or tyres. Students should be able to: explain the factors which affect the distance required for road transport vehicles to come to rest in emergencies, and the implications for safety; estimate how the distance required for road vehicles to stop in an emergency varies over a range of typical speeds."
    },
    {
     "code": "4.5.6.3.4",
     "q": "What happens to energy and to the brakes during braking, and why are large decelerations dangerous?",
     "idea": "Factors affecting braking distance 2",
     "content": "When a force is applied to the brakes of a vehicle, work done by the friction force between the brakes and the wheel reduces the kinetic energy of the vehicle and the temperature of the brakes increases. The greater the speed of a vehicle the greater the braking force needed to stop the vehicle in a certain distance. The greater the braking force the greater the deceleration of the vehicle. Large decelerations may lead to brakes overheating and/or loss of control. Students should be able to explain the dangers caused by large decelerations, and (HT only) estimate the forces involved in the deceleration of road vehicles in typical situations on a public road."
    },
    {
     "code": "4.5.7.1",
     "q": "How is momentum defined? (HT only)",
     "idea": "Momentum is a property of moving objects (HT only)",
     "content": "(HT only) Momentum is defined by the equation: momentum = mass × velocity; p = m v; momentum, p, in kilograms metre per second, kg m/s; mass, m, in kilograms, kg; velocity, v, in metres per second, m/s. Students should be able to recall and apply this equation."
    },
    {
     "code": "4.5.7.2",
     "q": "What does conservation of momentum mean in a collision? (HT only)",
     "idea": "Conservation of momentum (HT only)",
     "content": "(HT only) In a closed system, the total momentum before an event is equal to the total momentum after the event. This is called conservation of momentum. Students should be able to use the concept of momentum as a model to: describe and explain examples of momentum in an event, such as a collision; (physics only) complete calculations involving an event, such as the collision of two objects. AT 1, 2, 3: investigate collisions between laboratory trollies using light gates, data loggers or ticker timers to measure and record data."
    },
    {
     "code": "4.5.7.3",
     "q": "How does rate of change of momentum explain safety features? (physics only) (HT only)",
     "idea": "Changes in momentum (physics only) (HT only)",
     "content": "(physics only) (HT only) When a force acts on an object that is moving, or able to move, a change in momentum occurs. The equations F = m × a and a = (v − u) / t combine to give the equation F = m ∆v / ∆t, where m∆v = change in momentum, ie force equals the rate of change of momentum. Students should be able to apply this equation which is given on the Physics equation sheet. Students should be able to explain safety features such as air bags, seat belts, gymnasium crash mats, cycle helmets and cushioned surfaces for playgrounds with reference to the concept of rate of change of momentum, and to apply equations relating force, mass, velocity and acceleration to explain how the changes involved are inter-related."
    }
   ],
   "skills": [
    "WS 1.2",
    "WS 1.5",
    "WS 2.2",
    "WS 3.3",
    "WS 3.5",
    "WS 3.7",
    "WS 4.2",
    "WS 4.5",
    "MS 1a",
    "MS 1c",
    "MS 1d",
    "MS 2c",
    "MS 2d",
    "MS 2f",
    "MS 2h",
    "MS 3a",
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "MS 4a",
    "MS 4b",
    "MS 4c",
    "MS 4d",
    "MS 4f",
    "MS 5a",
    "MS 5b",
    "AT 1",
    "AT 2",
    "AT 3"
   ]
  },
  {
   "id": "4.6",
   "component": "P2",
   "option": null,
   "name": "Waves",
   "caseStudies": [
    "Required practical activity 8: make observations to identify the suitability of apparatus to measure the frequency, wavelength and speed of waves in a ripple tank and waves in a solid and take appropriate measurements.",
    "Required practical activity 9 (physics only): investigate the reflection of light by different types of surface and the refraction of light by different substances.",
    "Required practical activity 10: investigate how the amount of infrared radiation absorbed or radiated by a surface depends on the nature of that surface."
   ],
   "ideas": [
    {
     "code": "4.6.1.1",
     "q": "How do transverse and longitudinal waves differ?",
     "idea": "Transverse and longitudinal waves",
     "content": "Waves may be either transverse or longitudinal. The ripples on a water surface are an example of a transverse wave. Longitudinal waves show areas of compression and rarefaction. Sound waves travelling through air are longitudinal. Students should be able to describe the difference between longitudinal and transverse waves, and to describe evidence that, for both ripples on a water surface and sound waves in air, it is the wave and not the water or air itself that travels."
    },
    {
     "code": "4.6.1.2",
     "q": "How are amplitude, wavelength, frequency, period and wave speed defined and related?",
     "idea": "Properties of waves",
     "content": "Students should be able to describe wave motion in terms of their amplitude, wavelength, frequency and period. The amplitude of a wave is the maximum displacement of a point on a wave away from its undisturbed position. The wavelength of a wave is the distance from a point on one wave to the equivalent point on the adjacent wave. The frequency of a wave is the number of waves passing a point each second. period = 1 / frequency; T = 1 / f; period, T, in seconds, s; frequency, f, in hertz, Hz. Students should be able to apply this equation which is given on the Physics equation sheet. The wave speed is the speed at which the energy is transferred (or the wave moves) through the medium. All waves obey the wave equation: wave speed = frequency × wavelength; v = f λ; wave speed, v, in metres per second, m/s; frequency, f, in hertz, Hz; wavelength, λ, in metres, m. Students should be able to recall and apply this equation. Students should be able to: identify amplitude and wavelength from given diagrams; describe a method to measure the speed of sound waves in air; describe a method to measure the speed of ripples on a water surface. (physics only) Students should be able to show how changes in velocity, frequency and wavelength, in transmission of sound waves from one medium to another, are inter-related."
    },
    {
     "code": "4.6.1.2 RP 8",
     "q": "How are the frequency, wavelength and speed of waves measured?",
     "idea": "Required practical: measuring waves in a ripple tank and a solid",
     "content": "Required practical activity 8: make observations to identify the suitability of apparatus to measure the frequency, wavelength and speed of waves in a ripple tank and waves in a solid and take appropriate measurements. AT skills covered by this practical activity: AT 4. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 97)."
    },
    {
     "code": "4.6.1.3",
     "q": "What happens to a wave at a boundary between two materials? (physics only)",
     "idea": "Reflection of waves (physics only)",
     "content": "(physics only) Waves can be reflected at the boundary between two different materials. Waves can be absorbed or transmitted at the boundary between two different materials. Students should be able to construct ray diagrams to illustrate the reflection of a wave at a surface. Students should be able to describe the effects of reflection, transmission and absorption of waves at material interfaces."
    },
    {
     "code": "4.6.1.3 RP 9",
     "q": "How does light reflect from different surfaces and refract in different substances?",
     "idea": "Required practical: reflection and refraction of light (physics only)",
     "content": "Required practical activity 9 (physics only): investigate the reflection of light by different types of surface and the refraction of light by different substances. AT skills covered by this practical activity: AT 4 and 8. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 98)."
    },
    {
     "code": "4.6.1.4",
     "q": "How do sound waves cause hearing, and why is human hearing limited? (physics only) (HT only)",
     "idea": "Sound waves (physics only) (HT only)",
     "content": "(physics only) (HT only) Sound waves can travel through solids causing vibrations in the solid. Within the ear, sound waves cause the ear drum and other parts to vibrate which causes the sensation of sound. The conversion of sound waves to vibrations of solids works over a limited frequency range. This restricts the limits of human hearing. Students should be able to: describe, with examples, processes which convert wave disturbances between sound waves and vibrations in solids — examples may include the effect of sound waves on the ear drum; explain why such processes only work over a limited frequency range and the relevance of this to human hearing. Students should know that the range of normal human hearing is from 20 Hz to 20 kHz."
    },
    {
     "code": "4.6.1.5",
     "q": "How are ultrasound, seismic waves and echo sounding used to explore hidden structures? (physics only) (HT only)",
     "idea": "Waves for detection and exploration (physics only) (HT only)",
     "content": "(physics only) (HT only) Students should be able to explain in qualitative terms how the differences in velocity, absorption and reflection between different types of wave in solids and liquids can be used both for detection and exploration of structures which are hidden from direct observation. Ultrasound waves have a frequency higher than the upper limit of hearing for humans. Ultrasound waves are partially reflected when they meet a boundary between two different media. The time taken for the reflections to reach a detector can be used to determine how far away such a boundary is. This allows ultrasound waves to be used for both medical and industrial imaging. Seismic waves are produced by earthquakes. P-waves are longitudinal, seismic waves. P-waves travel at different speeds through solids and liquids. S-waves are transverse, seismic waves. S-waves cannot travel through a liquid. P-waves and S-waves provide evidence for the structure and size of the Earth's core. Echo sounding, using high frequency sound waves, is used to detect objects in deep water and measure water depth. Students should be aware that the study of seismic waves provided new evidence that led to discoveries about parts of the Earth which are not directly observable."
    },
    {
     "code": "4.6.2.1",
     "q": "What is the electromagnetic spectrum and how are its groups ordered?",
     "idea": "Types of electromagnetic waves",
     "content": "Electromagnetic waves are transverse waves that transfer energy from the source of the waves to an absorber. Electromagnetic waves form a continuous spectrum and all types of electromagnetic wave travel at the same velocity through a vacuum (space) or air. The waves that form the electromagnetic spectrum are grouped in terms of their wavelength and their frequency. Going from long to short wavelength (or from low to high frequency) the groups are: radio, microwave, infrared, visible light (red to violet), ultraviolet, X-rays and gamma rays. Our eyes only detect visible light and so detect a limited range of electromagnetic waves. Students should be able to give examples that illustrate the transfer of energy by electromagnetic waves."
    },
    {
     "code": "4.6.2.2",
     "q": "Why do electromagnetic waves refract at a boundary?",
     "idea": "Properties of electromagnetic waves 1",
     "content": "(HT only) Different substances may absorb, transmit, refract or reflect electromagnetic waves in ways that vary with wavelength. (HT only) Some effects, for example refraction, are due to the difference in velocity of the waves in different substances. Students should be able to construct ray diagrams to illustrate the refraction of a wave at the boundary between two different media. (HT only) Students should be able to use wave front diagrams to explain refraction in terms of the change of speed that happens when a wave travels from one medium to a different medium."
    },
    {
     "code": "4.6.2.2 RP 10",
     "q": "How does the nature of a surface affect the infrared radiation it absorbs or radiates?",
     "idea": "Required practical: infrared absorption and emission",
     "content": "Required practical activity 10: investigate how the amount of infrared radiation absorbed or radiated by a surface depends on the nature of that surface. AT skills covered by this practical activity: AT 1 and 4. This practical activity also provides opportunities to develop WS and MS. Details of all skills are given in Key opportunities for skills development (page 98)."
    },
    {
     "code": "4.6.2.3",
     "q": "How are radio waves produced, and which electromagnetic waves are hazardous?",
     "idea": "Properties of electromagnetic waves 2",
     "content": "(HT only) Radio waves can be produced by oscillations in electrical circuits. (HT only) When radio waves are absorbed they may create an alternating current with the same frequency as the radio wave itself, so radio waves can themselves induce oscillations in an electrical circuit. Changes in atoms and the nuclei of atoms can result in electromagnetic waves being generated or absorbed over a wide frequency range. Gamma rays originate from changes in the nucleus of an atom. Ultraviolet waves, X-rays and gamma rays can have hazardous effects on human body tissue. The effects depend on the type of radiation and the size of the dose. Radiation dose (in sieverts) is a measure of the risk of harm resulting from an exposure of the body to the radiation. 1000 millisieverts (mSv) = 1 sievert (Sv). Students will not be required to recall the unit of radiation dose. Students should be able to draw conclusions from given data about the risks and consequences of exposure to radiation. Ultraviolet waves can cause skin to age prematurely and increase the risk of skin cancer. X-rays and gamma rays are ionising radiation that can cause the mutation of genes and cancer."
    },
    {
     "code": "4.6.2.4",
     "q": "What is each type of electromagnetic wave used for, and why is it suitable?",
     "idea": "Uses and applications of electromagnetic waves",
     "content": "Electromagnetic waves have many practical applications. For example: radio waves – television and radio; microwaves – satellite communications, cooking food; infrared – electrical heaters, cooking food, infrared cameras; visible light – fibre optic communications; ultraviolet – energy efficient lamps, sun tanning; X-rays and gamma rays – medical imaging and treatments. (HT only) Students should be able to give brief explanations why each type of electromagnetic wave is suitable for the practical application."
    },
    {
     "code": "4.6.2.5",
     "q": "How do convex and concave lenses form images, and how is magnification calculated? (physics only)",
     "idea": "Lenses (physics only)",
     "content": "(physics only) A lens forms an image by refracting light. In a convex lens, parallel rays of light are brought to a focus at the principal focus. The distance from the lens to the principal focus is called the focal length. Ray diagrams are used to show the formation of images by convex and concave lenses. The image produced by a convex lens can be either real or virtual. The image produced by a concave lens is always virtual. Students should be able to construct ray diagrams to illustrate the similarities and differences between convex and concave lenses. The magnification produced by a lens can be calculated using the equation: magnification = image height / object height. Magnification is a ratio and so has no units. Image height and object height should both be measured in either mm or cm. In ray diagrams a convex lens and a concave lens are represented by the symbols given in the specification. Students should be able to apply this equation which is given on the Physics equation sheet. AT 4, 8: investigate the magnification produced by a range of convex lenses."
    },
    {
     "code": "4.6.2.6",
     "q": "What determines the colour of an object and how do filters work? (physics only)",
     "idea": "Visible light (physics only)",
     "content": "(physics only) Each colour within the visible light spectrum has its own narrow band of wavelength and frequency. Reflection from a smooth surface in a single direction is called specular reflection. Reflection from a rough surface causes scattering: this is called diffuse reflection. Colour filters work by absorbing certain wavelengths (and colour) and transmitting other wavelengths (and colour). The colour of an opaque object is determined by which wavelengths of light are more strongly reflected. Wavelengths that are not reflected are absorbed. If all wavelengths are reflected equally the object appears white. If all wavelengths are absorbed the object appears black. Objects that transmit light are either transparent or translucent. Students should be able to explain: how the colour of an object is related to the differential absorption, transmission and reflection of different wavelengths of light by the object; the effect of viewing objects through filters or the effect on light of passing through filters; why an opaque object has a particular colour."
    },
    {
     "code": "4.6.3.1",
     "q": "What is a perfect black body? (physics only)",
     "idea": "Emission and absorption of infrared radiation (physics only)",
     "content": "(physics only) All bodies (objects), no matter what temperature, emit and absorb infrared radiation. The hotter the body, the more infrared radiation it radiates in a given time. A perfect black body is an object that absorbs all of the radiation incident on it. A black body does not reflect or transmit any radiation. Since a good absorber is also a good emitter, a perfect black body would be the best possible emitter."
    },
    {
     "code": "4.6.3.2",
     "q": "How does the balance of radiation absorbed and emitted set the temperature of a body and of the Earth? (physics only)",
     "idea": "Perfect black bodies and radiation (physics only)",
     "content": "(physics only) Students should be able to explain that all bodies (objects) emit radiation, and that the intensity and wavelength distribution of any emission depends on the temperature of the body. (HT only) A body at constant temperature is absorbing radiation at the same rate as it is emitting radiation. The temperature of a body increases when the body absorbs radiation faster than it emits radiation. (HT only) The temperature of the Earth depends on many factors including: the rates of absorption and emission of radiation, reflection of radiation into space. (HT only) Students should be able to explain how the temperature of a body is related to the balance between incoming radiation absorbed and radiation emitted, using everyday examples to illustrate this balance, and the example of the factors which determine the temperature of the Earth. (HT only) Students should be able to use information, or draw/interpret diagrams to show how radiation affects the temperature of the Earth's surface and atmosphere."
    }
   ],
   "skills": [
    "WS 1.1",
    "WS 1.2",
    "WS 1.4",
    "WS 1.5",
    "WS 2.2",
    "WS 2.3",
    "WS 2.4",
    "WS 2.6",
    "WS 2.7",
    "WS 3.1",
    "WS 3.5",
    "MS 1c",
    "MS 3b",
    "MS 3c",
    "MS 5a",
    "MS 5c",
    "AT 1",
    "AT 4",
    "AT 8"
   ]
  },
  {
   "id": "4.7",
   "component": "P2",
   "option": null,
   "name": "Magnetism and electromagnetism",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.7.1.1",
     "q": "How do the poles of permanent and induced magnets behave?",
     "idea": "Poles of a magnet",
     "content": "The poles of a magnet are the places where the magnetic forces are strongest. When two magnets are brought close together they exert a force on each other. Two like poles repel each other. Two unlike poles attract each other. Attraction and repulsion between two magnetic poles are examples of non-contact force. A permanent magnet produces its own magnetic field. An induced magnet is a material that becomes a magnet when it is placed in a magnetic field. Induced magnetism always causes a force of attraction. When removed from the magnetic field an induced magnet loses most/all of its magnetism quickly. Students should be able to describe: the attraction and repulsion between unlike and like poles for permanent magnets; the difference between permanent and induced magnets."
    },
    {
     "code": "4.7.1.2",
     "q": "What does a magnetic field look like and how is it plotted?",
     "idea": "Magnetic fields",
     "content": "The region around a magnet where a force acts on another magnet or on a magnetic material (iron, steel, cobalt and nickel) is called the magnetic field. The force between a magnet and a magnetic material is always one of attraction. The strength of the magnetic field depends on the distance from the magnet. The field is strongest at the poles of the magnet. The direction of the magnetic field at any point is given by the direction of the force that would act on another north pole placed at that point. The direction of a magnetic field line is from the north (seeking) pole of a magnet to the south (seeking) pole of the magnet. A magnetic compass contains a small bar magnet. The Earth has a magnetic field. The compass needle points in the direction of the Earth's magnetic field. Students should be able to: describe how to plot the magnetic field pattern of a magnet using a compass; draw the magnetic field pattern of a bar magnet showing how strength and direction change from one point to another; explain how the behaviour of a magnetic compass is related to evidence that the core of the Earth must be magnetic."
    },
    {
     "code": "4.7.2.1",
     "q": "What magnetic field does a current produce, and how does a solenoid strengthen it?",
     "idea": "Electromagnetism",
     "content": "When a current flows through a conducting wire a magnetic field is produced around the wire. The strength of the magnetic field depends on the current through the wire and the distance from the wire. Shaping a wire to form a solenoid increases the strength of the magnetic field created by a current through the wire. The magnetic field inside a solenoid is strong and uniform. The magnetic field around a solenoid has a similar shape to that of a bar magnet. Adding an iron core increases the strength of the magnetic field of a solenoid. An electromagnet is a solenoid with an iron core. Students should be able to: describe how the magnetic effect of a current can be demonstrated; draw the magnetic field pattern for a straight wire carrying a current and for a solenoid (showing the direction of the field); explain how a solenoid arrangement can increase the magnetic effect of the current. (physics only) Students should be able to interpret diagrams of electromagnetic devices in order to explain how they work."
    },
    {
     "code": "4.7.2.2",
     "q": "What is the motor effect and how big is the force on a current-carrying conductor? (HT only)",
     "idea": "Fleming's left-hand rule (HT only)",
     "content": "(HT only) When a conductor carrying a current is placed in a magnetic field the magnet producing the field and the conductor exert a force on each other. This is called the motor effect. Students should be able to show that Fleming's left-hand rule represents the relative orientation of the force, the current in the conductor and the magnetic field. Students should be able to recall the factors that affect the size of the force on the conductor. For a conductor at right angles to a magnetic field and carrying a current: force = magnetic flux density × current × length; F = B I l; force, F, in newtons, N; magnetic flux density, B, in tesla, T; current, I, in amperes, A (amp is acceptable for ampere); length, l, in metres, m. Students should be able to apply this equation which is given on the Physics equation sheet."
    },
    {
     "code": "4.7.2.3",
     "q": "How does the motor effect make a coil rotate? (HT only)",
     "idea": "Electric motors (HT only)",
     "content": "(HT only) A coil of wire carrying a current in a magnetic field tends to rotate. This is the basis of an electric motor. Students should be able to explain how the force on a conductor in a magnetic field causes the rotation of the coil in an electric motor."
    },
    {
     "code": "4.7.2.4",
     "q": "How does a moving-coil loudspeaker work? (physics only) (HT only)",
     "idea": "Loudspeakers (physics only) (HT only)",
     "content": "(physics only) (HT only) Loudspeakers and headphones use the motor effect to convert variations in current in electrical circuits to the pressure variations in sound waves. Students should be able to explain how a moving-coil loudspeaker and headphones work."
    },
    {
     "code": "4.7.3.1",
     "q": "What is the generator effect and what affects the induced potential difference? (physics only) (HT only)",
     "idea": "Induced potential (physics only) (HT only)",
     "content": "(physics only) (HT only) If an electrical conductor moves relative to a magnetic field or if there is a change in the magnetic field around a conductor, a potential difference is induced across the ends of the conductor. If the conductor is part of a complete circuit, a current is induced in the conductor. This is called the generator effect. An induced current generates a magnetic field that opposes the original change, either the movement of the conductor or the change in magnetic field. Students should be able to recall the factors that affect the size of the induced potential difference/induced current, and the factors that affect the direction of the induced potential difference/induced current, and to apply the principles of the generator effect in a given context."
    },
    {
     "code": "4.7.3.2",
     "q": "How do an alternator and a dynamo use the generator effect? (physics only) (HT only)",
     "idea": "Uses of the generator effect (physics only) (HT only)",
     "content": "(physics only) (HT only) The generator effect is used in an alternator to generate ac and in a dynamo to generate dc. Students should be able to: explain how the generator effect is used in an alternator to generate ac and in a dynamo to generate dc; draw/interpret graphs of potential difference generated in the coil against time."
    },
    {
     "code": "4.7.3.3",
     "q": "How does a moving-coil microphone work? (physics only) (HT only)",
     "idea": "Microphones (physics only) (HT only)",
     "content": "(physics only) (HT only) Microphones use the generator effect to convert the pressure variations in sound waves into variations in current in electrical circuits. Students should be able to explain how a moving-coil microphone works."
    },
    {
     "code": "4.7.3.4",
     "q": "How does a transformer change potential difference, and why is power transmitted at high pd? (physics only) (HT only)",
     "idea": "Transformers (physics only) (HT only)",
     "content": "(physics only) (HT only) A basic transformer consists of a primary coil and a secondary coil wound on an iron core. Iron is used as it is easily magnetised. Knowledge of laminations and eddy currents in the core is not required. The ratio of the potential differences across the primary and secondary coils of a transformer Vp and Vs depends on the ratio of the number of turns on each coil, np and ns: Vp / Vs = np / ns; potential difference, Vp and Vs, in volts, V. In a step-up transformer Vs > Vp. In a step-down transformer Vs < Vp. If transformers were 100% efficient, the electrical power output would equal the electrical power input: Vs × Is = Vp × Ip, where Vs × Is is the power output (secondary coil) and Vp × Ip is the power input (primary coil); power input and output, in watts, W. Students should be able to apply both equations, which are given on the Physics equation sheet. Students should be able to: explain how the effect of an alternating current in one coil in inducing a current in another is used in transformers; explain how the ratio of the potential differences across the two coils depends on the ratio of the number of turns on each; calculate the current drawn from the input supply to provide a particular power output; apply the equation linking the p.d.s and number of turns in the two coils of a transformer to the currents and the power transfer involved, and relate these to the advantages of power transmission at high potential differences."
    }
   ],
   "skills": [
    "WS 1.4",
    "WS 2.2",
    "MS 1c",
    "MS 3b",
    "MS 3c"
   ]
  },
  {
   "id": "4.8",
   "component": "P2",
   "option": null,
   "name": "Space physics (physics only)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "4.8.1.1",
     "q": "What is in our solar system and how did the Sun form? (physics only)",
     "idea": "Our solar system (physics only)",
     "content": "(physics only) Within our solar system there is one star, the Sun, plus the eight planets and the dwarf planets that orbit around the Sun. Natural satellites, the moons that orbit planets, are also part of the solar system. Our solar system is a small part of the Milky Way galaxy. The Sun was formed from a cloud of dust and gas (nebula) pulled together by gravitational attraction. Students should be able to explain: how, at the start of a star's life cycle, the dust and gas drawn together by gravity causes fusion reactions; that fusion reactions lead to an equilibrium between the gravitational collapse of a star and the expansion of a star due to fusion energy."
    },
    {
     "code": "4.8.1.2",
     "q": "How does a star's life cycle depend on its size, and where do the elements come from? (physics only)",
     "idea": "The life cycle of a star (physics only)",
     "content": "(physics only) A star goes through a life cycle. The life cycle is determined by the size of the star. Students should be able to describe the life cycle of a star: the size of the Sun; much more massive than the Sun. Fusion processes in stars produce all of the naturally occurring elements. Elements heavier than iron are produced in a supernova. The explosion of a massive star (supernova) distributes the elements throughout the universe. Students should be able to explain how fusion processes lead to the formation of new elements."
    },
    {
     "code": "4.8.1.3",
     "q": "How does gravity keep planets and satellites in orbit? (physics only)",
     "idea": "Orbital motion, natural and artificial satellites (physics only)",
     "content": "(physics only) Gravity provides the force that allows planets and satellites (both natural and artificial) to maintain their circular orbits. Students should be able to describe the similarities and distinctions between the planets, their moons, and artificial satellites. (HT only) Students should be able to explain qualitatively how: (HT only) for circular orbits, the force of gravity can lead to changing velocity but unchanged speed; (HT only) for a stable orbit, the radius must change if the speed changes."
    },
    {
     "code": "4.8.2",
     "q": "What is red-shift and how does it support the Big Bang theory? (physics only)",
     "idea": "Red-shift (physics only)",
     "content": "(physics only) There is an observed increase in the wavelength of light from most distant galaxies. The further away the galaxies, the faster they are moving and the bigger the observed increase in wavelength. This effect is called red-shift. The observed red-shift provides evidence that space itself (the universe) is expanding and supports the Big Bang theory. The Big Bang theory suggests that the universe began from a very small region that was extremely hot and dense. Since 1998 onwards, observations of supernovae suggest that distant galaxies are receding ever faster. Students should be able to explain: qualitatively the red-shift of light from galaxies that are receding; that the change of each galaxy's speed with distance is evidence of an expanding universe; how red-shift provides evidence for the Big Bang model; how scientists are able to use observations to arrive at theories such as the Big Bang theory; that there is still much about the universe that is not understood, for example dark mass and dark energy."
    }
   ],
   "skills": [
    "WS 1.1",
    "WS 1.2",
    "WS 1.3"
   ]
  },
  {
   "id": "3",
   "component": "P1",
   "option": null,
   "name": "Working scientifically (assessed on every paper)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "WS 1.1",
     "q": "How do scientific methods and theories develop over time?",
     "idea": "Development of scientific methods and theories",
     "content": "Understand how scientific methods and theories develop over time. In the exam: give examples to show how scientific methods and theories have changed over time; explain, with an example, why new data from experiments or observations led to changes in models or theories; decide whether or not given data supports a particular theory."
    },
    {
     "code": "WS 1.2",
     "q": "How are models used to solve problems and make predictions?",
     "idea": "Using models",
     "content": "Use a variety of models such as representational, spatial, descriptive, computational and mathematical to solve problems, make predictions and develop scientific explanations and understanding of familiar and unfamiliar facts. In the exam: recognise, draw and interpret diagrams; translate from data to a representation with a model; use models in explanations, or match features of a model to the data it describes; make predictions or calculate quantities based on the model or show its limitations; give examples of ways a model can be tested by observation or experiment."
    },
    {
     "code": "WS 1.3",
     "q": "What are the power and limitations of science, and what ethical issues arise?",
     "idea": "Power and limitations of science; ethical issues",
     "content": "Appreciate the power and limitations of science and consider any ethical issues which may arise. In the exam: explain why data is needed to answer scientific questions, and why it may be uncertain, incomplete or not available; outline a simple ethical argument about the rights and wrongs of a new technology."
    },
    {
     "code": "WS 1.4",
     "q": "How are applications of science explained and their implications evaluated?",
     "idea": "Applications of science and their implications",
     "content": "Explain everyday and technological applications of science; evaluate associated personal, social, economic and environmental implications; and make decisions based on the evaluation of evidence and arguments. In the exam: describe and explain specified examples of the technological applications of science; describe and evaluate, with the help of data, methods that can be used to tackle problems caused by human impacts on the environment."
    },
    {
     "code": "WS 1.5",
     "q": "How are risks evaluated in practical science and in society?",
     "idea": "Evaluating risks",
     "content": "Evaluate risks both in practical science and the wider societal context, including perception of risk in relation to data and consequences. In the exam: give examples to show that there are hazards associated with science-based technologies which have to be considered alongside the benefits; suggest reasons why the perception of risk is often very different from the measured risk (eg voluntary vs imposed risks, familiar vs unfamiliar risks, visible vs invisible hazards)."
    },
    {
     "code": "WS 1.6",
     "q": "Why do peer review and communication of results matter?",
     "idea": "Peer review and communicating results",
     "content": "Recognise the importance of peer review of results and of communicating results to a range of audiences. In the exam: explain that the process of peer review helps to detect false claims and to establish a consensus about which claims should be regarded as valid; explain that reports of scientific developments in the popular media are not subject to peer review and may be oversimplified, inaccurate or biased."
    },
    {
     "code": "WS 2.1",
     "q": "How are hypotheses developed?",
     "idea": "Developing hypotheses",
     "content": "Use scientific theories and explanations to develop hypotheses. In the exam: suggest a hypothesis to explain given observations or data."
    },
    {
     "code": "WS 2.2",
     "q": "How are experiments planned and variables controlled?",
     "idea": "Planning experiments and devising procedures",
     "content": "Plan experiments or devise procedures to make observations, produce or characterise a substance, test hypotheses, check data or explore phenomena. In the exam: describe a practical procedure for a specified purpose; explain why a given practical procedure is well designed for its specified purpose; explain the need to manipulate and control variables; identify in a given context the independent variable (the one changed or selected by the investigator), the dependent variable (measured for each change in the independent variable) and control variables (and explain why they are kept the same); apply understanding of apparatus and techniques to suggest a procedure for a specified purpose."
    },
    {
     "code": "WS 2.3",
     "q": "How is the right technique, instrument, apparatus or material chosen?",
     "idea": "Selecting techniques, instruments, apparatus and materials",
     "content": "Apply a knowledge of a range of techniques, instruments, apparatus, and materials to select those appropriate to the experiment. In the exam: describe, suggest or select the technique, instrument, apparatus or material that should be used for a particular purpose, and explain why."
    },
    {
     "code": "WS 2.4",
     "q": "How are experiments carried out safely and accurately?",
     "idea": "Carrying out experiments safely and accurately",
     "content": "Carry out experiments appropriately having due regard for the correct manipulation of apparatus, the accuracy of measurements and health and safety considerations. In the exam: identify the main hazards in specified practical contexts; suggest methods of reducing the risk of harm in practical contexts."
    },
    {
     "code": "WS 2.5",
     "q": "When are sampling techniques needed?",
     "idea": "Sampling techniques",
     "content": "Recognise when to apply a knowledge of sampling techniques to ensure any samples collected are representative. In the exam: suggest and describe an appropriate sampling technique in a given context."
    },
    {
     "code": "WS 2.6",
     "q": "How are observations and measurements made and recorded?",
     "idea": "Making and recording observations and measurements",
     "content": "Make and record observations and measurements using a range of apparatus and methods. In the exam: read measurements off a scale in a practical context and record appropriately."
    },
    {
     "code": "WS 2.7",
     "q": "How are methods evaluated and improved?",
     "idea": "Evaluating methods",
     "content": "Evaluate methods and suggest possible improvements and further investigations. In the exam: assess whether sufficient, precise measurements have been taken in an experiment; evaluate methods with a view to determining whether or not they are valid."
    },
    {
     "code": "WS 3.1",
     "q": "How are observations and data presented?",
     "idea": "Presenting observations and data",
     "content": "Presenting observations and other data using appropriate methods. In the exam: construct and interpret frequency tables and diagrams, bar charts and histograms; plot two variables from experimental or other data."
    },
    {
     "code": "WS 3.2",
     "q": "How is data translated between forms?",
     "idea": "Translating data",
     "content": "Translating data from one form to another. In the exam: translate data between graphical and numeric form."
    },
    {
     "code": "WS 3.3",
     "q": "What mathematical and statistical analysis is expected?",
     "idea": "Mathematical and statistical analysis",
     "content": "Carrying out and represent mathematical and statistical analysis: use an appropriate number of significant figures; find the arithmetic mean and range of a set of data; construct and interpret frequency tables and diagrams, bar charts and histograms; make order of magnitude calculations; change the subject of an equation; substitute numerical values into algebraic equations using appropriate units for physical quantities; determine the slope and intercept of a linear graph; draw and use the slope of a tangent to a curve as a measure of rate of change; understand the physical significance of area between a curve and the x-axis and measure it by counting squares as appropriate."
    },
    {
     "code": "WS 3.4",
     "q": "How is uncertainty estimated?",
     "idea": "Distributions of results and uncertainty",
     "content": "Representing distributions of results and make estimations of uncertainty. In the exam: apply the idea that whenever a measurement is made, there is always some uncertainty about the result obtained; use the range of a set of measurements about the mean as a measure of uncertainty."
    },
    {
     "code": "WS 3.5",
     "q": "How are patterns, trends and conclusions drawn from data?",
     "idea": "Interpreting observations and data",
     "content": "Interpreting observations and other data (presented in verbal, diagrammatic, graphical, symbolic or numerical form), including identifying patterns and trends, making inferences and drawing conclusions. In the exam: use data to make predictions; recognise or describe patterns and trends in data presented in a variety of tabular, graphical and other forms; draw conclusions from given observations."
    },
    {
     "code": "WS 3.6",
     "q": "How are explanations related to hypotheses?",
     "idea": "Reasoned explanations and hypotheses",
     "content": "Presenting reasoned explanations including relating data to hypotheses. In the exam: comment on the extent to which data is consistent with a given hypothesis; identify which of two or more hypotheses provides a better explanation of data in a given context."
    },
    {
     "code": "WS 3.7",
     "q": "How is data evaluated for accuracy, precision, repeatability and reproducibility?",
     "idea": "Accuracy, precision, repeatability, reproducibility and errors",
     "content": "Being objective, evaluating data in terms of accuracy, precision, repeatability and reproducibility and identifying potential sources of random and systematic error. Apply these ideas to evaluate data and suggest improvements: an accurate measurement is one that is close to the true value; measurements are precise if they cluster closely; measurements are repeatable when repetition, under the same conditions by the same investigator, gives similar results; measurements are reproducible if similar results are obtained by different investigators with different equipment; random error makes results vary in unpredictable ways and can be reduced by making more measurements and reporting a mean value; systematic error is due to measurement results differing from the true value by a consistent amount each time; anomalous values should be examined to try to identify the cause and, if a product of a poor measurement, ignored."
    },
    {
     "code": "WS 3.8",
     "q": "How should investigations and conclusions be communicated?",
     "idea": "Communicating the scientific rationale",
     "content": "Communicating the scientific rationale for investigations, methods used, findings and reasoned conclusions through paper-based and electronic reports and presentations using verbal, diagrammatic, graphical, numerical and symbolic forms. In the exam: present coherent and logically structured responses, using the ideas in 2 Experimental skills and strategies and 3 Analysis and evaluation, applied to the required practicals and other practical investigations given appropriate information."
    },
    {
     "code": "WS 4.1",
     "q": "What vocabulary and definitions must be used?",
     "idea": "Scientific vocabulary, terminology and definitions",
     "content": "Use scientific vocabulary, terminology and definitions. The knowledge and skills in section 4 apply across the specification, including the required practicals."
    },
    {
     "code": "WS 4.2",
     "q": "How are scientific quantities determined?",
     "idea": "Scientific quantities",
     "content": "Recognise the importance of scientific quantities and understand how they are determined."
    },
    {
     "code": "WS 4.3",
     "q": "Which units and nomenclature are used?",
     "idea": "SI units and IUPAC nomenclature",
     "content": "Use SI units (eg kg, g, mg; km, m, mm; kJ, J) and IUPAC chemical nomenclature unless inappropriate."
    },
    {
     "code": "WS 4.4",
     "q": "How are prefixes and powers of ten used?",
     "idea": "Prefixes and powers of ten",
     "content": "Use prefixes and powers of ten for orders of magnitude (eg tera, giga, mega, kilo, centi, milli, micro and nano)."
    },
    {
     "code": "WS 4.5",
     "q": "How are units interconverted?",
     "idea": "Interconverting units",
     "content": "Interconvert units, for example between the SI units and prefixed forms used across the specification."
    },
    {
     "code": "WS 4.6",
     "q": "How many significant figures?",
     "idea": "Significant figures",
     "content": "Use an appropriate number of significant figures in calculation."
    }
   ]
  },
  {
   "id": "9",
   "component": "P1",
   "option": null,
   "name": "Mathematical requirements (assessed on every paper)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "MS 1a",
     "q": "How are expressions in decimal form used?",
     "idea": "Arithmetic and numerical computation: decimal form",
     "content": "Recognise and use expressions in decimal form. Questions will target maths skills at a level of demand appropriate to the subject: in Foundation Tier papers questions assessing maths requirements will not be lower than that expected at Key Stage 3; in Higher Tier papers they will not be lower than that of questions and tasks in assessments for the Foundation Tier in a GCSE Qualification in Mathematics."
    },
    {
     "code": "MS 1b",
     "q": "How are expressions in standard form used?",
     "idea": "Arithmetic and numerical computation: standard form",
     "content": "Recognise and use expressions in standard form — for example the radius of an atom, about 1 × 10⁻¹⁰ m, and the wide range of half-life values of radioactive isotopes."
    },
    {
     "code": "MS 1c",
     "q": "How are ratios, fractions and percentages used?",
     "idea": "Arithmetic and numerical computation: ratios, fractions and percentages",
     "content": "Use ratios, fractions and percentages — for example efficiency as a decimal or as a percentage, and ratios and proportional reasoning to convert units and compute rates throughout Forces and motion."
    },
    {
     "code": "MS 1d",
     "q": "How are the results of simple calculations estimated?",
     "idea": "Arithmetic and numerical computation: estimates",
     "content": "Make estimates of the results of simple calculations — for example estimating the magnitude of everyday accelerations, and the forces involved in the deceleration of road vehicles."
    },
    {
     "code": "MS 2a",
     "q": "How many significant figures should an answer have?",
     "idea": "Handling data: significant figures",
     "content": "Use an appropriate number of significant figures when reporting the result of a calculation or a measurement."
    },
    {
     "code": "MS 2b",
     "q": "How is an arithmetic mean found?",
     "idea": "Handling data: arithmetic means",
     "content": "Find arithmetic means — for example the mean of a set of repeat measurements taken during a required practical activity."
    },
    {
     "code": "MS 2c",
     "q": "How are frequency tables, bar charts and histograms constructed and read?",
     "idea": "Handling data: frequency tables and diagrams",
     "content": "Construct and interpret frequency tables and diagrams, bar charts and histograms."
    },
    {
     "code": "MS 2f",
     "q": "What do mean, mode and median mean?",
     "idea": "Handling data: mean, mode and median",
     "content": "Understand the terms mean, mode and median."
    },
    {
     "code": "MS 2g",
     "q": "How is a correlation identified from a scatter diagram?",
     "idea": "Handling data: scatter diagrams and correlation",
     "content": "Use a scatter diagram to identify a correlation between two variables."
    },
    {
     "code": "MS 2h",
     "q": "How are order of magnitude calculations made?",
     "idea": "Handling data: order of magnitude calculations",
     "content": "Make order of magnitude calculations — for example comparing the radius of a nucleus with the radius of an atom."
    },
    {
     "code": "MS 3a",
     "q": "What do the mathematical symbols used in physics mean?",
     "idea": "Algebra: symbols",
     "content": "Understand and use the symbols: =, <, <<, >>, >, ∝, ~ — for example the symbol for proportionality, ∝, between weight and mass and between force and extension, and the symbol ~ that indicates an approximate value or approximate answer."
    },
    {
     "code": "MS 3b",
     "q": "How is the subject of an equation changed?",
     "idea": "Algebra: changing the subject of an equation",
     "content": "Change the subject of an equation — for example rearranging P = V I, ∆E = m c ∆θ or v = f λ to make another quantity the subject."
    },
    {
     "code": "MS 3c",
     "q": "How are numerical values substituted into an equation?",
     "idea": "Algebra: substituting values with units",
     "content": "Substitute numerical values into algebraic equations using appropriate units for physical quantities — the step required by nearly every calculation in Appendix A: Physics equations."
    },
    {
     "code": "MS 3d",
     "q": "How are simple algebraic equations solved?",
     "idea": "Algebra: solving simple equations",
     "content": "Solve simple algebraic equations — for example solving for current, potential difference or resistance in V = I R, or for a total resistance in a series circuit."
    },
    {
     "code": "MS 4a",
     "q": "How is information translated between graphical and numeric form?",
     "idea": "Graphs: translating between graphical and numeric form",
     "content": "Translate information between graphical and numeric form — for example reading a value from a distance–time or velocity–time graph, or determining a half-life from a decay graph."
    },
    {
     "code": "MS 4b",
     "q": "What does y = mx + c represent?",
     "idea": "Graphs: linear relationships",
     "content": "Understand that y = mx + c represents a linear relationship — for example force against extension for a spring up to the limit of proportionality."
    },
    {
     "code": "MS 4c",
     "q": "How are two variables plotted from data?",
     "idea": "Graphs: plotting two variables",
     "content": "Plot two variables from experimental or other data — for example the I–V characteristics of a filament lamp, a diode and a resistor."
    },
    {
     "code": "MS 4d",
     "q": "How are the slope and intercept of a linear graph found?",
     "idea": "Graphs: slope and intercept",
     "content": "Determine the slope and intercept of a linear graph — for example the speed of an object from the gradient of a distance–time graph."
    },
    {
     "code": "MS 4e",
     "q": "How is the slope of a tangent used?",
     "idea": "Graphs: tangents as a measure of rate of change",
     "content": "Draw and use the slope of a tangent to a curve as a measure of rate of change — for example (HT only) the speed of an accelerating object at a particular time from a distance–time graph."
    },
    {
     "code": "MS 4f",
     "q": "What does the area under a graph mean and how is it measured?",
     "idea": "Graphs: area between a curve and the x-axis",
     "content": "Understand the physical significance of area between a curve and the x-axis and measure it by counting squares as appropriate — for example (HT only) the distance travelled (or displacement) from the area under a velocity–time graph."
    },
    {
     "code": "MS 5a",
     "q": "How are angles measured and used?",
     "idea": "Geometry and trigonometry: angular measures in degrees",
     "content": "Use angular measures in degrees — for example in vector diagrams for the resolution of forces and in ray diagrams for reflection and refraction."
    },
    {
     "code": "MS 5b",
     "q": "How are 2D and 3D forms visualised and represented?",
     "idea": "Geometry and trigonometry: 2D and 3D forms",
     "content": "Visualise and represent 2D and 3D forms including two dimensional representations of 3D objects — for example scale drawings of vector diagrams to determine the resultant of two forces."
    },
    {
     "code": "MS 5c",
     "q": "How are areas, surface areas and volumes calculated?",
     "idea": "Geometry and trigonometry: areas and volumes",
     "content": "Calculate areas of triangles and rectangles, surface areas and volumes of cubes — for example the area a force acts over when calculating pressure, and the volume of a regularly shaped object when determining its density."
    }
   ]
  },
  {
   "id": "10.1",
   "component": "P1",
   "option": null,
   "name": "Use of apparatus and techniques",
   "caseStudies": [],
   "ideas": [
    {
     "code": "AT 1",
     "q": "Which apparatus is used to make and record measurements, and to find densities?",
     "idea": "Apparatus for measurements and densities",
     "content": "Use of appropriate apparatus to make and record a range of measurements accurately, including length, area, mass, time, volume and temperature. Use of such measurements to determine densities of solid and liquid objects (links to A-level AT a and b)."
    },
    {
     "code": "AT 2",
     "q": "How are the effects of forces measured and observed?",
     "idea": "Measuring the effects of forces",
     "content": "Use of appropriate apparatus to measure and observe the effects of forces including the extension of springs (links to A-level AT a)."
    },
    {
     "code": "AT 3",
     "q": "How is motion measured?",
     "idea": "Measuring motion",
     "content": "Use of appropriate apparatus and techniques for measuring motion, including determination of speed and rate of change of speed (acceleration/deceleration) (links to A-level AT a, b and d)."
    },
    {
     "code": "AT 4",
     "q": "How are waves and their interaction with matter observed?",
     "idea": "Observing waves and electromagnetic interactions",
     "content": "Making observations of waves in fluids and solids to identify the suitability of apparatus to measure speed/frequency/wavelength. Making observations of the effects of the interaction of electromagnetic waves with matter (links to A-level AT i and j)."
    },
    {
     "code": "AT 5",
     "q": "How are energy changes and transfers measured safely?",
     "idea": "Measuring energy changes and transfers",
     "content": "Safe use of appropriate apparatus in a range of contexts to measure energy changes/transfers and associated values such as work done (links to A-level AT a, b)."
    },
    {
     "code": "AT 6",
     "q": "How are current, potential difference and resistance measured?",
     "idea": "Electrical measurements",
     "content": "Use of appropriate apparatus to measure current, potential difference (voltage) and resistance, and to explore the characteristics of a variety of circuit elements (links to A-level AT f)."
    },
    {
     "code": "AT 7",
     "q": "How are series and parallel circuits constructed and checked?",
     "idea": "Constructing and checking circuits",
     "content": "Use of circuit diagrams to construct and check series and parallel circuits including a variety of common circuit elements (links to A-level AT g)."
    },
    {
     "code": "AT 8",
     "q": "How are the effects of the interaction of waves with matter measured? (physics only)",
     "idea": "Observing the interaction of waves with matter (physics only)",
     "content": "AT 8 (physics only): making observations of waves in fluids and solids to identify the suitability of apparatus to measure the effects of the interaction of waves with matter (links to A-level AT h, j). AT 1–7 are common with combined science; AT 8 is physics only."
    }
   ]
  },
  {
   "id": "12",
   "component": "P1",
   "option": null,
   "name": "Appendix A: Physics equations (recall)",
   "caseStudies": [],
   "ideas": [
    {
     "code": "1",
     "q": "What is the equation for weight?",
     "idea": "Equation 1: weight",
     "content": "Appendix A, equation 1 — students should be able to recall and apply this equation, using standard SI units. Word equation: weight = mass × gravitational field strength (g). Symbol equation: W = m g. weight, W, in newtons, N; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg."
    },
    {
     "code": "2",
     "q": "What is the equation for work done?",
     "idea": "Equation 2: work done",
     "content": "Appendix A, equation 2 — students should be able to recall and apply this equation, using standard SI units. Word equation: work done = force × distance (along the line of action of the force). Symbol equation: W = F s. work done, W, in joules, J; force, F, in newtons, N; distance, s, in metres, m."
    },
    {
     "code": "3",
     "q": "What is the equation for spring force?",
     "idea": "Equation 3: spring force",
     "content": "Appendix A, equation 3 — students should be able to recall and apply this equation, using standard SI units. Word equation: force applied to a spring = spring constant × extension. Symbol equation: F = k e. force, F, in newtons, N; spring constant, k, in newtons per metre, N/m; extension, e, in metres, m."
    },
    {
     "code": "4",
     "q": "What is the equation for moment of a force?",
     "idea": "Equation 4: moment of a force",
     "content": "Appendix A, equation 4 — students should be able to recall and apply this equation, using standard SI units. Word equation: moment of a force = force × distance (normal to direction of force). Symbol equation: M = F d. moment of a force, M, in newton-metres, Nm; force, F, in newtons, N; distance, d, the perpendicular distance from the pivot to the line of action of the force, in metres, m."
    },
    {
     "code": "5",
     "q": "What is the equation for pressure?",
     "idea": "Equation 5: pressure",
     "content": "Appendix A, equation 5 — students should be able to recall and apply this equation, using standard SI units. Word equation: pressure = force normal to a surface ÷ area of that surface. Symbol equation: p = F / A. pressure, p, in pascals, Pa; force, F, in newtons, N; area, A, in metres squared, m²."
    },
    {
     "code": "6",
     "q": "What is the equation for distance travelled?",
     "idea": "Equation 6: distance travelled",
     "content": "Appendix A, equation 6 — students should be able to recall and apply this equation, using standard SI units. Word equation: distance travelled = speed × time. Symbol equation: s = v t. distance, s, in metres, m; speed, v, in metres per second, m/s; time, t, in seconds, s."
    },
    {
     "code": "7",
     "q": "What is the equation for acceleration?",
     "idea": "Equation 7: acceleration",
     "content": "Appendix A, equation 7 — students should be able to recall and apply this equation, using standard SI units. Word equation: acceleration = change in velocity ÷ time taken. Symbol equation: a = ∆v / t. acceleration, a, in metres per second squared, m/s²; change in velocity, ∆v, in metres per second, m/s; time, t, in seconds, s."
    },
    {
     "code": "8",
     "q": "What is the equation for resultant force?",
     "idea": "Equation 8: resultant force",
     "content": "Appendix A, equation 8 — students should be able to recall and apply this equation, using standard SI units. Word equation: resultant force = mass × acceleration. Symbol equation: F = m a. force, F, in newtons, N; mass, m, in kilograms, kg; acceleration, a, in metres per second squared, m/s²."
    },
    {
     "code": "9",
     "q": "What is the equation for momentum (HT)?",
     "idea": "Equation 9: momentum (HT)",
     "content": "Appendix A, equation 9 — students should be able to recall and apply this equation, using standard SI units. Higher Tier papers only (HT). Word equation: momentum = mass × velocity. Symbol equation: p = m v. momentum, p, in kilograms metre per second, kg m/s; mass, m, in kilograms, kg; velocity, v, in metres per second, m/s."
    },
    {
     "code": "10",
     "q": "What is the equation for kinetic energy?",
     "idea": "Equation 10: kinetic energy",
     "content": "Appendix A, equation 10 — students should be able to recall and apply this equation, using standard SI units. Word equation: kinetic energy = 0.5 × mass × (speed)². Symbol equation: Ek = ½ m v². kinetic energy, Ek, in joules, J; mass, m, in kilograms, kg; speed, v, in metres per second, m/s."
    },
    {
     "code": "11",
     "q": "What is the equation for gravitational potential energy?",
     "idea": "Equation 11: gravitational potential energy",
     "content": "Appendix A, equation 11 — students should be able to recall and apply this equation, using standard SI units. Word equation: gravitational potential energy = mass × gravitational field strength (g) × height. Symbol equation: Ep = m g h. gravitational potential energy, Ep, in joules, J; mass, m, in kilograms, kg; gravitational field strength, g, in newtons per kilogram, N/kg; height, h, in metres, m."
    },
    {
     "code": "12",
     "q": "What is the equation for power (energy transferred)?",
     "idea": "Equation 12: power (energy transferred)",
     "content": "Appendix A, equation 12 — students should be able to recall and apply this equation, using standard SI units. Word equation: power = energy transferred ÷ time. Symbol equation: P = E / t. power, P, in watts, W; energy transferred, E, in joules, J; time, t, in seconds, s."
    },
    {
     "code": "13",
     "q": "What is the equation for power (work done)?",
     "idea": "Equation 13: power (work done)",
     "content": "Appendix A, equation 13 — students should be able to recall and apply this equation, using standard SI units. Word equation: power = work done ÷ time. Symbol equation: P = W / t. power, P, in watts, W; work done, W, in joules, J; time, t, in seconds, s."
    },
    {
     "code": "14",
     "q": "What is the equation for efficiency (energy)?",
     "idea": "Equation 14: efficiency (energy)",
     "content": "Appendix A, equation 14 — students should be able to recall and apply this equation, using standard SI units. Word equation: efficiency = useful output energy transfer ÷ total input energy transfer. Symbol equation: no symbol equation is printed. Efficiency is a ratio and may be given as a decimal or as a percentage."
    },
    {
     "code": "15",
     "q": "What is the equation for efficiency (power)?",
     "idea": "Equation 15: efficiency (power)",
     "content": "Appendix A, equation 15 — students should be able to recall and apply this equation, using standard SI units. Word equation: efficiency = useful power output ÷ total power input. Symbol equation: no symbol equation is printed. Efficiency is a ratio and may be given as a decimal or as a percentage."
    },
    {
     "code": "16",
     "q": "What is the equation for wave speed?",
     "idea": "Equation 16: wave speed",
     "content": "Appendix A, equation 16 — students should be able to recall and apply this equation, using standard SI units. Word equation: wave speed = frequency × wavelength. Symbol equation: v = f λ. wave speed, v, in metres per second, m/s; frequency, f, in hertz, Hz; wavelength, λ, in metres, m."
    },
    {
     "code": "17",
     "q": "What is the equation for charge flow?",
     "idea": "Equation 17: charge flow",
     "content": "Appendix A, equation 17 — students should be able to recall and apply this equation, using standard SI units. Word equation: charge flow = current × time. Symbol equation: Q = I t. charge flow, Q, in coulombs, C; current, I, in amperes, A; time, t, in seconds, s."
    },
    {
     "code": "18",
     "q": "What is the equation for potential difference?",
     "idea": "Equation 18: potential difference",
     "content": "Appendix A, equation 18 — students should be able to recall and apply this equation, using standard SI units. Word equation: potential difference = current × resistance. Symbol equation: V = I R. potential difference, V, in volts, V; current, I, in amperes, A; resistance, R, in ohms, Ω."
    },
    {
     "code": "19",
     "q": "What is the equation for power (pd × current)?",
     "idea": "Equation 19: power (pd × current)",
     "content": "Appendix A, equation 19 — students should be able to recall and apply this equation, using standard SI units. Word equation: power = potential difference × current. Symbol equation: P = V I. power, P, in watts, W; potential difference, V, in volts, V; current, I, in amperes, A."
    },
    {
     "code": "20",
     "q": "What is the equation for power (current² × resistance)?",
     "idea": "Equation 20: power (current² × resistance)",
     "content": "Appendix A, equation 20 — students should be able to recall and apply this equation, using standard SI units. Word equation: power = (current)² × resistance. Symbol equation: P = I² R. power, P, in watts, W; current, I, in amperes, A; resistance, R, in ohms, Ω."
    },
    {
     "code": "21",
     "q": "What is the equation for energy transferred (power × time)?",
     "idea": "Equation 21: energy transferred (power × time)",
     "content": "Appendix A, equation 21 — students should be able to recall and apply this equation, using standard SI units. Word equation: energy transferred = power × time. Symbol equation: E = P t. energy transferred, E, in joules, J; power, P, in watts, W; time, t, in seconds, s."
    },
    {
     "code": "22",
     "q": "What is the equation for energy transferred (charge × pd)?",
     "idea": "Equation 22: energy transferred (charge × pd)",
     "content": "Appendix A, equation 22 — students should be able to recall and apply this equation, using standard SI units. Word equation: energy transferred = charge flow × potential difference. Symbol equation: E = Q V. energy transferred, E, in joules, J; charge flow, Q, in coulombs, C; potential difference, V, in volts, V."
    },
    {
     "code": "23",
     "q": "What is the equation for density?",
     "idea": "Equation 23: density",
     "content": "Appendix A, equation 23 — students should be able to recall and apply this equation, using standard SI units. Word equation: density = mass ÷ volume. Symbol equation: ρ = m / V. density, ρ, in kilograms per metre cubed, kg/m³; mass, m, in kilograms, kg; volume, V, in metres cubed, m³."
    }
   ],
   "skills": [
    "MS 3b",
    "MS 3c",
    "MS 3d",
    "WS 4.3",
    "WS 4.5",
    "WS 4.6"
   ]
  }
 ]
};
module.exports = { SPEC_8463 };
