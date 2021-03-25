 
# Thoughts and Ideas about Betacoronaviruses and Covid-19

## Notes
* Many parts are __hypothesis__ and __ideas__ but __not__ [double] checked facts. They are put here as ideas to be checked and evaluated. 
* Chapters with new or not well founded content are tagged with *(explorative)*.
* This page often conversational and some parts aren't rigorous and just ideas in raw form. 
* The page is in work. Parts under heavy work are mostly marked with '[in work]'. Mistakes of any form are likely.
* The license is Creative Commons Attribution 4.0. with the following relaxations: For any use with the main purpose of public health and public information no attribution is needed (as long as its not copy & paste). <!-- in science citing/Referencing is a good and helpful practice.-->
* [Support on ko-fi.com](https://ko-fi.com/H2H72F6XY) is welcome, to enable full-time re-searching on coronaviruses.
* Questions, pointing out mistakes, improvement suggestions and feedback are __welcome__.

## Notes on Reading
* New content is announced in [Updates](#updates). 
* A [Table of Content](#content) is provided. The content is ordered mostly by dependencies i.e. content founding other sections is ahead. The dependencies are often circular however.
* This page is open source on GitHub: [https://github.com/forestgrape/coronavirus/blob/master/index.md](), where it can be read both as Markdown and GitHub Preview and hosted on GitHub Pages: [https://forestgrape.github.io/coronavirus]()

* > ###### Definitions
    > *Definitions* are written like this and are valid throughout this page; sometimes only throughout this page. Redefinition of existing terms is not done on purpose, unless explicitly noted. Please point out!

* > *Comments*, often subjective, are formatted the same as [definitions](#definitions) and sometimes additionally marked with programming style '//'. Otherwise distinction is done by context/content.

* Often references are summarized. Word-by-word extracts are in " ". The summarized are biased towards to results relevant for this page, even though it is tried to capture the essence of the research.


---

## Updates
All updates regarding the current Covid Situation here. 
Larger updates here, smaller updates are noted in the section [Minor Updates](#minor-updates) below.

- 24.3. Regrouping [content](#content) into (currently) 7 topics both as files on github and content on github pages:
    1. Biological Topics
    2. Medical Topics
    3. Immunological Topics
    4. Epidemiological Topics
    5. Prevention and Treatment
    6. Social Topics
    7. Data Topics
- 23.3. [Temperature and Humidity Modulation](5_prevention_and_treatment/temperature_modulation.md) is proposed as a topical treatment: It reduces the number of infectious virions and enhances the immune response. There is solid biological and epidemiological evidence that it works if used early on! (explorative)
- 23.3. Proposal of [Local Treatments of the Respiratory Tract](5_prevention_and_treatment/topical_treatment.md) to cure respiratory infections including Covid. Coronaviruses live on the surface of the respiratory tract and release their progeny as delicate virions to the covering fluids. The idea is to reduce these virions by local treatments. Similar as we disinfect wounds - the medications need to be adapted of course. (explorative)
- 23.3. Clarified summary for [Virion Viability](1_biological/virion_viability.md). [A table with compiled data](./1_biological/virion_viability/viability_data.md) from viability experiments is online. 
- 22.3. [Spread Assumptions section](./6_social/controlling.md#spread-assumptions) on the [controlling page](./6_social/controlling.md) added. Formulations across the page.
- 18.3. [Virion Viability Page](./1_biological/virion_viability.md) in online work (finally!). 
    * Virions decay fast in sunlight, soap and disinfectants (the halflife time is a few minutes).
    * From 0 to 40 degrees the decay is faster at increased temperature and depends on the biochemical environment. In saliva, nasal mucus and sputum the halflife time is about 8 hours at 4 degrees and about 2 hours at a room-temperature of 22 degrees, especially at air humidities around 40%. In dry air or high but not very high humidity the decay is slower.
    * Above 45 degrees the decay fastens (doubling about every 2 degrees) due to the spring-loaded proteins (spikes and sometimes N) loosing their structure and thereby the stored energy.

- 17.2. [Masks](./masks.md) now on separate page (moved from controlling). Added section about [Personal Mask Preferences](./masks#personal-mask-preferences)
- 13.2. How Coronaviruses overcome Immune System obstacles moved to separate page [Immune Evasion](./3_immunological/immune_evasion.md).
- 11.2. Corrected mistakes (T Cell Training) on the [Immune System page](./3_immunological/immune_system.md) and added/completed section how SARS-2 overcomes antibodies.
- 2.2. How [Movement](./2_medical/covid19.md#movement) helps to produce a good immune response and helps recovering from Covid on the [Covid-19 page](./2_medical/covid19.md).
- 2.2. Many small updates and clarifications across the page. E.g. added the importance of ventilation of stairwells in [large buildings](./6_social/controlling.md#large-buildings) on the Controlling page.

> ### A word of Caution regarding Vaccines (28.1., updated 14.2.)
> What worries me most at the moment is the vaccination rushes and races. It is great and an extraordinary achievement to have vaccines and vaccination programs are well organized. It increases the safety and life quality for people at risk for severe Covid-19. 
> 
> Regarding vaccine recommendations the known and the unknown are important:
> * What has been shown for the approved vaccines is, that they efficiently prevent Covid-19 with typical symptoms combined with positive NPS PCR test and severe Covid-19 at tolerable reactogenicity (typical vaccine side effects). 
> * What is mostly unknown/not investigated/not published are adverse effects such as immune system disorders or long-term effects. Especially in view of vaccinating young people, timely investigations/estimates (long-term) and publishing is needed. Both effects are less a concern for inactivated virus vaccines or other protein based vaccines as long as the adjuvants are harmless (which is not always sure e.g. the safety profile of aluminum is surprisingly unclear despite being in use for 90 years.). For other technologies the effects depend on the exact specifications. RNA vaccines are in general __not__ comparable to protein only vaccines (mRNA vaccines do produce proteins but they thereby often [likely always, to check] mess around with the depths of eukaryotic life. This induces a strong immune response with antibodies, stronger than for proteins alone).
> * There are open questions how  SARS-CoV-2 infections are changed apart from reducing typical/severe Covid-19: The effects of vaccines on virus shedding, virus evolution (both point mutations and recombination) and changed pathogenesis are mostly unknown/not investigated/unpublished.
>  
> An unbiased discussion is missing since many risks ignored and unknown risks are dismissed as not possible. 
> In my opinion, for the time being, the vaccines should be used as the evaluations published show clear benefits: For seronegative and PCR negative people at risk for severe Covid. If it turns out, that the benefits outweigh the risks, summer would be a good time to vaccine many/those not at risk. 
> [Argumentation in advanced work.]


- 22.12.-23.1. [Diagnosis and Viral Load](./2_medical/diagnosis_and_viral_load.md) (before 18.1. on the Covid19 page). 
  - Repeated morning saliva and sputum have a reliable viral load which predicts the disease progression. 
  - Nose swabs have a detection rate of about 60% and the viral load does not predict disease progression.
  -  Experiences from HongKong (Summary [Wong](./2_medical/diagnosis_and_viral_load.md#summary-wong)) and an investigation from Dubai [Summary Senok](./2_medical/diagnosis_and_viral_load.md#summary-senok).
  
- 17.1. Respelled Salvia to Saliva. 
- 22.12. [Covid-19](./2_medical/covid19.md) redone. New sections about Diagnosis and Viral Load in online work - saliva has a similar sensitivity as nose samples. moved see 17.1.21
- 30.11. [Corona Conform Skiing](./6_social/controlling.md#corona-conform-skiing) on the page [Controlling](./6_social/controlling.md)
    > Motivated by current discussions and recent personal experience. 
- 24.11. New Page on [Economics](./economics.md): The proposal is to provide universal capital services (e.g. credits) instead of providing targeted support in different situations/crisis (e.g. the current Covid situation). Goals are:
  - Everyone in need can redesign and reorganize their (economic) life in any situation.
  - Making the economic system more fair in the sense that everyone has the opportunity to choose the economic way of life.
- 9.11. Formulations corrected and improved.
  > I spend more time on reading and analyzing than on formulations and proof reading. Although I try, sometimes words are not weighted carefully and it can take a couple of days to discover & improve unworldly formulations.
- 7.11. Updates in [Spread Analyses](4_epidemiological/spread_analyses.md) in work:
  - [Infector Distribution](4_epidemiological/spread_analyses.md#infector-distribution): 20% of infected were responsible for 80% of the transmissions detected by the contact tracing in Hong Kong.
  - Section on [Pre-symptomatic Infectors](4_epidemiological/spread_analyses.md#pre-symptomatic-infectors) in work
- 6.11. Renamed ~~"Monitor Failure"~~ to [Estimates Out of Bounds](./monitor_and_control.md#detect-estimates-out-of-bounds). Case numbers are case numbers and not estimates.
    > Mainly I was shocked by the very steep increase of deaths and still am [analyses in work]. Even though I spent/d a lot of time learning to analyse.
- 5./6.11. Updates in [Spread Analyses](4_epidemiological/spread_analyses.md) in online work:
    * Evidence for super-spreader events at large scale sporting events with spectators. Evidence: 1) players are more frequently infected in regions with spectators and 2) there seem to be increased infection rates in the stadiums catchment areas.
      > Not proven yet but evidence strong enough that risk regions should **stop allowing large scale events** even with protection measures. As of 4./5.11. there still seem to be football matches with many thousand spectators.
    * Sections about observed spreading events in food production factories and airplanes.
- 1.11. [Strategy](./6_social/controlling.md#strategy) and [On Numbers](./7_data/monitoring.md#on-numbers) sections, where I give my point of view how to tackle Covid and for actions at different incidence levels.
- 31.10. [Detect Monitor Out of Bounds](./monitor_and_control.md#detect-monitor-out-of-bounds) in the extended section [Monitor Prevalence](./monitor_and_control.md#monitor-prevalence) describes how to check estimates in the past: The current death rate multiplied by 400 (inverse fatality) should be about the case estimated a few weeks ago.
- 28.10. (only summaries available) Early results from [Spread Analyses](4_epidemiological/spread_analyses.md) show that the Covid-19 transmission probability increases with the amount of air exchanged between people. Air exchange is high when indoors (either heated or air-conditioned) and at increased breathing (high altitude, sport, singing). This strongly indicates that [aerosol](./4_epidemiological/transmission.md#summary-airborne-transmission) transmission plays a key role. Thus good ventilation, less populated and good and clean mask help indoors and being outside with some distance is safe.
    > During the summer droplet transmission seemed most important, because of Covid-19 waves in regions where the sun was high combined with some research indicating that aerosol transmission is rare in humid and warm settings. Steep increase in Europa as climate cooled in October 2020 combined with extensive droplet preventions in place questioned the dominance of droplet transmission. Reconsideration and a detailed look show: The Covid waves, when the sun is high, occurred/occur either in hot areas and are well explained by air-conditioning or by high altitude:
    * Air-conditioning: Brazil, Middle East and Southern US (in California noteworthy is the difference between hot Los Angeles and temperate San Francisco)
    * High altitudes which means cold nights and increased breathing: La Paz in Bolivia, Quito in Ecuador and Bogota in Columbia or at high altitude combined with heat: Mexico City and currently (28.10.) in Kenya.
- 25.10. New page [Spread Analyses](4_epidemiological/spread_analyses.md) in work: Observations and analysis how Covid-19 spreads in different settings.
-  > 24.10. Part of the early-online-updates below (16.10.) is a note about [corona conform schooling](./monitor_and_control.md#corona-conform-schooling) which needed correction: Pupils are **not** likely to play a major role in the past and current Covid spread while protection measures are in place.
-  15./16.10. Early Online Update for the sections [Protection Measures](./monitor_and_control.md#thoughts-about-social-measures) and [Transmission](./4_epidemiological/transmission.md) in online work. Due to steep increase of cases in Europe and new pieces of evidence regarding transmission.
    > The steep increases despite protection measures in place is noteworthy, since it indicates many hidden/undetected cases.
- 5.10./6.10. moved from literal single-page (all content in index.md) to multiple pages. Pages including short description are in the in the [content](#content). 
  > Even though I liked the single page version since it acknowledges the connections, multi-page is simpler to manage and easier to make the topics as self-contained as possible.
- 21.9. new section [Backtracing Sars-CoV-1/2](#backtracing-sars-cov-12)
- 30.7. Updates and corrections across the page in work/in the process of writing down:
	* I wrongly ignored upper respiratory infections for a long time (because most hospitalized/severe cases were/are in the lungs) -> [Disease patterns](#infection-tropism-and-diseas-patterns)
	* In the first months Sars-CoV-2 didn't have the ability to spread well in humid climate. This has changed: the currently circulating strains spread well in humid climate too.  
- 27.7. [Disease pattering](#infection-tropism-and-disease-patterns)
- 29.4/3.5. Reordering of content and new Sections 'Coronaviruses with a Focus on Sars-CoV-2' and 'Immune Protection with a Focus on Coronaviruses' 
- 17.4.20 00:04 GMT  New section online: Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs
- 9.4.20 Extended section [Prevent Early On Mucus Accumulations](./5_prevention_and_treatment/increasing_the_mucus_flow.md), previously named Early On Ventilators 
- 4.4.20 Added Section Ideas to Explore
    - starting with [Early On Ventilators](./5_prevention_and_treatment/increasing_the_mucus_flow.md): Increase the mucus flow and clearance by humidified air early on,  to decrease the risk for developing ARDS. 
- 25-30.3/9.4.20:  Corrected and looked up aerosol/particulate inhalation which yields to the new section [Particles in the Respiratory Tract](./4_epidemiological/transmission.md##particle-dynamics-in-the-respiratory-tract).
    In the first version, I had written that aerosols don't enter the lungs. False. Aerosols DO enter the lungs. The train of thought yielding this mistake: Entering the lungs is halfway entering the body. So there must have been enough evolutionary pressure to prevent this. This is ~~double~~ triple wrong:
    1. The evolutionary roots of the lungs are the alimentary system (some dozens millions of generations ago), so substances coming in were just cleared down. Even as the lungs and the alimentary separated this process stayed. As we often do too, evolution usually gradually bends things right, rather than rebuilding from scratch.  
    2. The lungs developed before we were upright (just a couple of hundred thousand generations ago) and in the original case the clearance of aerosols is earlier and better; shown for mice in [Kleinstreuer](./4_epidemiological/transmission.md#kleinstreuer-2018). Ciliate based movement works even uphill, as ski tourers know. But there are limits. A gradual adaption evolved first, the oscillation frequency of the cilia increased, but wasn't yet enough so a workaround evolved:  smallest particulates are cleared by macrophages [citation to be added].
    3. Upright clearance evolved when we all were in warm and mostly humid parts of Africa (well it likely got a little drier in the winter months and savanna replaced rainforest in East Africa, so we had motivation to stand up more and more). In such humid environments, clearance works better. In evolutionary dimensions, there has been only a short time for the adaption to cold and dry climate (how much depends on the overall drive for adaption, which isn't straight forward to say since migration routes have twists, crossings and turns, desert nights tend to be cold around the world and lifestyles were and are different). To a permanent stay in heated indoor spaces, there has been and no genetic adaption at all.  

### Minor Updates
- 22.12. split up the page monitor_and_control.md into two pages [monitoring.md](./7_data/monitoring.md) and [controlling.md](./6_social/controlling.md)
- 22.12. section Coronavirus Disease Pattering moved from the section Ideas to Explore to its own page ideas_to_explore/[Coronavirus Disease Pattering](./2_medical/coronavirus_disease_patterns.md)
- 24.10. Completed & added & linked summaries regarding insects for the section [Backtracing SARS-1/2](#backtracing-sars-cov-12)
- 20-23.10. Clarifications and corrections across the page with a focus on the sections Transmission, Immune System and Coronaviruses.
- 18.10. Reconsidering [Mask Types](./monitor_and_control.md#mask-types) and aerosol protection: Only high filtration mask reliably prevent the spread of aerosols. Various sections are updated accordingly and existing comments emphasized ([Summary airborne transmission](./4_epidemiological/transmission.md#summary-airborne-transmission)). More on the topic in work. 
- 16.10. [Monitor Prevalence](./monitor_and_control.md#monitor-prevalence) and testing priorities
- 15.10. moved [Covid section](./2_medical/covid19.md) to its own page
- 10./14.10. References to section 'Backtracing SARS-like' re-added. The references are found in the article [Hypotheses about Nidovirales](1_biological/hypotheses_nidovirales.md)
- 8.-13. 10. Public Advice and Suggestions renamed to [Public/General Suggestions and Thoughts](#public-suggestions-and-thoughts) and adapted
- 3.8. [Airborne Transmission](./4_epidemiological/transmission.md#recap-airborne-transmission) section added 
- 7.7. 7 Storage options to memorize metabolism on the [Coronaviruses](./1_biological/coronavirus.md) page
- 2.7. Mask section redone and grouped into it mask related comments scattered throughout the page
- 12.6. sections in *online work* on the tropism of Covid-19 and Sars-Cov-2 (github branch)
- 12.5. added note that [outside is safer](./monitor_and_control.md#outside-is-safer)
- 1.5.- 9.5. Formulations in Monitor, Exposure to BCoVs and Coronavirus sections
- 30.4. Regrouped and extended topic on measures and data into a new section [Thoughts on Monitor and Controlling Sars-CoV-2](./monitor_and_control.md)
- 28.4. Short note to support public health in the data section
- 25.4. Data availability section
- 20.4.20 Section cross protections: Human infection by BCoVs has been observed.
- 18.4. Added section data availability
- 10.4.20 Added section Habitat of betacoronaviruses and combined with/reordered sections in Evidence from Biological Properties
- 9.4.20 Started section Covid-19
- 5.4.20 Clarified Early On Ventilators section and added more ref
- 4.4.20 Updated section evidence from spread patterns (Cruise Ship)
- 27.3.-4.4.20: Public Advice extended and clarified. 
- 2.4.20 Short notice about masks. 


## Content
[**partly out of date, new sections are found in [updates](#updates)**]

### 0 Introduction
* [Updates](#updates)
* [Public Suggestions and Tips](#public-suggestions-and-tips)
    Keep distance and hygiene. Then outside is safe. Inside ventilate well and/or wear a mask. Transmission can be smoke-like. Don't burden the immune system.

### 1 Biological Topics
* [Coronaviruses with a Focus on Sars-CoV-2](./1_biological/coronavirus.md#top)
Various aspects of coronaviruses are described with a focus on understanding. 
    - The starting point are first principles: life forms on earth. 
    - Viruses are defined as life forms which are dependent on extern enzymes and aspects such as life cycle and movement options are sketched. 
    - We then look at coronaviruses with a focus on SARS-CoV-2.

- [Virion Viability](./1_biological/virion_viability.md)
    * Virions decay fast in sunlight, soap and disinfectants (the halflife time is a few minutes).
    * From 0 to 40 degrees the decay is faster at increased temperature and depends on the biochemical environment. In saliva, nasal mucus and sputum the halflife time is about 8 hours at 4 degrees and about 2 hours at a room-temperature of 22 degrees.
    * Above 45 degrees the decay fastens and is less dependent on the biochemical environment since the spring-loaded proteins loose their energy.
    * A fast decay seems to occur in the presence of osmotic pressure e.g. when the concentration of salts is very low in the surrounding water. This is the case in distilled water and in situations with a lot of condensation.

- [Backtracing Sars-CoV-1/2](./1_biological/hypotheses_nidovirales.md#backtracing-sars-cov-12) (*explorative*)
    The natural habitat of SARS-CoV-1/2 includes domestic animals and insects in the region Northern Yunnan. The life cycle of SARS-like is alternating in hosts and follows nutrient cycles. 

### 2 Medical Topics
* [Covid-19](2_medical/covid19.md)
    The Covid-19 results from the interplay between the immune system and SARS-CoV-2. SARS-CoV-2 can infect different locations throughout the respiratory tract and  the immune response experienced depends on the location. Therefore Covid-19 is a disease with many faces. 
* [Diagnosis and Viral Load](2_medical/diagnosis_and_viral_load.md) How to diagnose Covid with a focus on methods detecting parts of viruses (virus RNA with PCR or virus proteins with antigen test) at different locations (e.g. in the nose, mouth, lungs).
- [Infection Tropism and Disease Patterns](./2_medical/coronavirus_disease_patterns.md) (*explorative*)

### 3 Immunological Topics
* [Immune System](3_immunological/immune_system.md)
  Selected topics of the immune protection with a focus protection versus coronaviruses are discussed. 
* [Immune Evasion](3_immunological/immune_evasion.md) How coronaviruses circumvent immune system obstacles.

### 4 Epidemiological Topics 
* [Transmission of Sars-CoV-2 with Focus on a Proposed Dry Form Transmission](./4_epidemiological/transmission.md)
    Sars-CoV-2 is mostly transmitted airborne and even a Dry Form aerosol infection is possible.
    - A summary of airborne transmission, 
    - Proposal of a new dry from transmission model,
    - describe how particles behave in the respiratory tract,
    - analyse spread pattern of Covid-19 which indicate aerosol transmission
    - and based on the discussions protection measures are suggested: smoke protection and masks.
- [Spread Analyses](4_epidemiological/spread_analyses.md) Situations where Covid-19 spreading is observed or is *not* observed are described. High transmission of severe Covid is observed in situations where much air is exchanged between people. Much air is exchanged when spending a lot time indoors without ventilation, crowded confined settings, at high altitude and when deep breathing (e.g. sports, singing).
- [Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs](#evidence-for-increased-immune-protection-against-sars-cov-2-from-exposure-to-bcovs) (*explorative section*)

### 5 Treatment and Prevention
* [Movement](5_prevention_and_treatment/movement.md) How movement helps to get a better immune reaction upon a Covid infection and to recover faster and better.
- [Topical Treatments of the Respiratory Tract](5_prevention_and_treatment/topical_treatment.md) to prevent and cure respiratory infections including Covid. Coronaviruses (and other respiratory viruses) live on the surface of the respiratory tract and release their progeny as delicate virions to the covering fluids. The idea is to reduce these virions by local treatments. Similar as we disinfect wounds - the medications need to be adapted of course. (explorative)
  - [Temperature and Humidity Modulation](5_prevention_and_treatment/temperature_modulation.md) is proposed as a topical treatment: It reduces the number of infectious virions and enhances the immune response. There is solid biological and epidemiological evidence that it works if used early on! (explorative)
  - [Increase the mucus Flow by humidified air](./5_prevention_and_treatment/increasing_the_mucus_flow.md): Humidify inhaled air early on to increase the mucus flow and wash the virions out. The goal is a reduce viral load and better prognosis. (explorative)

### 6 Social Topics
* [Thoughts about Controlling Sars-CoV-2](6_social/controlling.md)
    Thoughts how to tackle and control Covid-19. Different kind of measures are discussed from physical (mask, ventilation) to social measures such as an early closure of nightlife.

### 7 Data Topics
* [Monitoring](7_data/monitoring.md)
    About testing, monitoring, gathering and publishing data.




## Public Suggestions and Tips

[in rework]
Covid-19 can be serious in the short-term and such serious infections can damage organs. For less virulent Covid-19 sometimes longer lasting tiredness or immune system overreaction are observed. For a healthy recovery it is important to have a healthy lifestyle with movement. But experiences and research are still limited and so whether other effects cannot be excluded. Though long-term adverse effects are possible for many things including other viruses causing subtle infections e.g. common colds. *Awareness* for viruses and *knowledge* what they do and how they can harm or help is important. No reason to be afraid or panic however, unlike viruses we've got a mind, better communication and a superb body police called immune system. The immune system is crucial since avoiding viruses is _not_ possible. Viruses can be harmful, but mostly the immune system handles them and they even can support us evolving.

> Regarding effects: short-term and long-term, adverse and beneficial, unwanted and wanted effects are known and even proven for many things and behaviors, so its about setting priorities. Ideally we all - if we want - are capable to take own educated decisions on priorities or at least can be contributing to decisions. 

> Trying to contribute to knowledge and explain knowledge on coronaviruses is a major motivation for this page.
 
Time to act mindfully, carefully and circumspectly & work together in an open, fair and honest way. 


### Sars-CoV-2 Transmission 
SARS-CoV-2 is mostly transmitted through the air, either by droplets (virions in water droplets flying like balls) or by aerosol (the virions move with the air). For Covid-19 aerosol transmission is more frequent and much more dangerous. A short overview below and a more in depth description is in the section [Airborne Transmission](./4_epidemiological/transmission.md#recap-airborne-transmission).
* __Droplet Transmission__: Droplets fly in trajectories similar to balls thrown. How fare they fly depends on the initial movement: when coughing or sneezing they fly farther than when talking. Transmission risk is in situation when bad breath/reek of alcohol is smelled. Droplet can be exchanged when close range face-to-face talking and this gives a transmission opportunity. Prevent
    - Masks
    - Distance
    - Side-a-side instead of face-to-face
    - Plexiglas
* __Aerosols Transmission__: Aerosols behave soot/dust-like. Aerosol transmission occurs mainly in heated indoor rooms: the cooler outside the drier in heated indoor rooms and the likelier aerosol transmission. Aerosol transmission is hard to completely prevent, but it can be efficiently reduced:
    - being outside, ventilation, distance and less people inside 
    - masks, preferably with a good fit and [filter](./5_prevention_and_treatment/masks.md#mask-types) and changed/cleaned frequently
    - if possibly infected (e.g. having any kind of respiratory symptoms) staying home and *out* of foreign indoor rooms 

    Keeping the smoke model in mind makes it easier to detect and avoid situations with aerosol transmission: 
    - Just smelling smoke is the theoretical possibility of infection. Being that exposed to smoke that the cloth start smelling, likely corresponds to a probability of a few percentages to get infected.  
    - A neighbors candle won't harm through doors, but in a place with an indoor barbecue, smoke travels to the next floor. For Covid-19 this means: A single neighbor being infected is no risk, but in place with possibly many infected people e.g. a hospital treating Covid-19 patients, wearing a mask in _all_ rooms is important. 


### How to Reduce Covid-19 Infection Paths
> Remark: The following advices were written mostly in early spring 2020 when Sars-Cov-2 induced ARDS/SARS disease patterns peaked in Europe. Updates in work.  

In brief: Think ahead. To reduce the infection possibilities keep some distance or wear a mask and prefer fresh air. 

* #### Outside
    [Outside is safe, if some distance is kept](./6_social/controlling.md#outside-is-safer). Ideally, walk or cycle directly from home. Outside most infection occur when close range face-to-face talking. In heated and few ventilated regions, beware the corridor and stairwell, don't stay too long or wear a mask. 

* #### Ventilate
    [Ventilation](./6_social/controlling.md#ventilation) has been shown to be effective to reduce airborne virus spread. 
    * Open the windows. In cold climate: ventilate the rooms regularly by opening all windows for 5 minutes.  
    * If possibly infected, ventilate before opening the door of your room or flat. 

* #### Masks
    Wear a [mask](./6_social/controlling.md#masks) 
    - Outdoor and indoor: for close range face-to-face contact/talking. 
    - In indoor places where susceptible or infectious people can be.  The longer one stays, the more people there are and the less ventilation there is, the more important. This because the infection risk increases with the amount of indoor air breathed.

    The mask should be clean/fresh, have a good fit and a good filter. In some situation high-filtration is especially important: in hospitals and if one is possible infected. But if symptomatic staying home or at least at of crowds is crucial, since masks may reduce spread but do not prevent it. The same is true for all other prevention measures such as distancing and hygiene, they reduce but do not prevent spread. 

    Masks can be reused if [cleaned](./5_prevention_and_treatment/masks.md#mask-cleaning) regularly. From time to time it should changed or washed thoroughly - there's more than Sars-CoV-2, that's not to forget!

* #### Distancing
    Distancing reduces infection risk.

* #### No Dry Air
     In dry air, both dust and viruses stay longer in the air. Dry air also reduces the defences of the respiratory tract against pathogens. In areas with indoor heating, drying the frequently washed cloths inside keeps the air humid. 

* #### Hygiene
    Keep proper hygiene. Especially wash hands before eating and after toilet. Soap destroys coronaviruses. Hygiene is important because:
    * Transmission pathways of Covid-19 are still unclear. So just avoid them all. 
    * Large numbers of coronaviruses can be in the shit (besides many other pathogens). This even when the respiratory infection is over. Wash hands well with a lot of soap and ventilate the toilet. 
    * Many pathogens are transmitted through fomites. Pathogens can cause tissue damage and/or weaken the immune system. E.g. common cold viruses attempt to weaken the immune system [[kikkert](./3_immunological/immune_evasion.md#kikkert)] and therefore can induce an increased infection risk.    

    But do NOT rely on hygiene alone, since there is strong evidence, that the majority of [transmissions occur through air](./4_epidemiological/transmission.md).

- #### Transport
  * Cars: Considering, that many people, especially children, will and should go outside right where they live, limited use of cars in cities is polite - it's nicer and safer with light traffic.
  * Public transport: Masks, distance if possible and ventilation


### Observe 
Observe the body, write down the observations and if possible measure.
The more common Covid-19 in a region is, the more likely it is, that an observed infection is Covid-19 and not flu/common cold. In my case - South East Switzerland, a day hike away from Northern-Italy - Covid-19 is/was (as of March 2020) the most prevalent disease. 

* Sars-CoV-2 can infect most locations in the respiratory tract except the vocal folds and the trachea. So all respiratory symptoms except a hoarse voice can indicate a SARS-CoV-2 infection.
* The precaution measures against Covid-19 protect against all respiratory diseases, so all respiratory diseases are reduced. Common colds are not common right now. So respiratory symptoms means being careful and even can mean figuring out all the people one could have infected and informing them to watch for symptoms.
* Every morning first smell and then taste your favorite breakfast drink.  
* Measure the temperature several times every day and best in the same situations and record the values. An increased temperature can be an early sign of a possible Sars-CoV-2 infection. However many people have only a slight increase, which doesn't "meet the definition of fever", see [Covid-19 symptoms](./2_medical/covid19.md#symptoms). 
Keep in mind that the temperature varies during a day and with the activities performed. That's why several measurements. 

    > It's time [for medicine] to move on from digitalization schemes to the continuous color-space of statistics. There's no hard border for fever at 37.5 or at 38 degrees.

### Estimate and Adaptive Planning
While we often prefer straight plans, adaptive planning is more suitable here. Like a game plan where one starts with a plan but needs to adapt depending on the moves of the adversary players. Viruses behave like adversary players and unpredictability/randomness is involved. One reason is that virions don't move on their own and so their movement is mostly random. Nevertheless probabilities can be estimated. E.g. a few days before visiting the grand grand parents, going out late every evening in densely populated pubs is not the best idea. However even if all precautions are taken, there is some probability that one falls sick, in that case it is important to withdraw from social gatherings.

Increased infection probability:
* **Increased Exposure to Viruses**:being in a densely populated and poorly ventilated indoor spaces or close range face to face talking
* **Increased Susceptibility to Viruses**: diminished immune system and increased inhalation of air (e.g. sports, high altitude)

Keeping benefits and risks in mind:
* whether, when and what to do and care about
* whether to take additional carefulness otherwhere. E.g. in the Tour the France not a single cyclist has caught Covid-19 [to check] despite excessive sports diminishes the immune system. This likely because they were able to reduce exposure to viruses by being careful and overall a good organization.

### Respect and Take Care 
> *We all should be able to live the life we want, as long that's respecting the rest of the world doing so too.* That needs compromises. Every day compromises are searched, negotiated, found and enabled - thanks to everybody! We live in groups with complex interactions, so *we* stands for groups of friends, families, communities, societies, countries and even us all. 

[*in rework: overall cases should be lower in cold season, since self protection is more difficult due to aerosol transmission (high filtration mask are possibly needed but these are (still) only limited available).*]
Respecting others having a different view of Covid yields an intermediate approach: base protections enabling people to avoid it, but not narrowing others much. 

* Precautions/Protection measures in place in public spaces which everybody needs to use. 
* In *non* general public settings respecting everybody to take/resume/go on with the lifestyle preferred - a considerate lifestyle of course. Depending on the epidemiological situation protections measures can be community/local decisions. E.g. universities provide both on campus and off campus studying.

> Many tasks and challenges are solved best or can only be solved by groups. Even small groups often need some organization, guiding and rules to work. For large groups such as societies these points are even more important. The better group members understand each other, understand the task and work together, the more liberal the settings and relaxed the rules can be.

Controlling SARS-CoV-2 is an individual, a local and global task. The better everybody helps to control it, the lesser the negative effects and the fewer rules and restrictions need to be put into place. 

* Staying out of crowds and taking care even with mild respiratory disease symptoms, a runny nose is enough reason to stay home. E.g. home office/school (e.g. reading)
  > much of the knowledge for this page I acquired by reading. Thanks to everybody making knowledge and articles available!
* Giving infections time to cure. It is known for various virus infections that they can become persistent.
* Respecting everybody who wants or needs (either directly since in risk group or indirectly since direct/indirect contact to persons who need/want to protect) to protect to do so. Long-term effects seem to be rare but experiences are still limited. Keeping cases low is good for everybody and the more people help doing so the better.
* Some slowdown of life: E.g. no party weeks, going home at time. For all including the young, a good immune system in place is crucial, which detects infections early, induces symptoms and clears them. 


### Live Healthily
A good immune system goes hand in hand with a healthy lifestyle:
* Sleep enough, eat healthily, relax and do some sport. 

and avoid anything that weakens the immune system:
* avoid excessive caffeine, excessive sport (if in a very high risk region), excessive alcohol ...
* avoid being cold or even freezing for a longer period. For this reason, in cold climates, windows shouldn't be open permanently. 
* avoid immunosuppressants unless necessary for medical reasons. 
* try reducing stress for yourself and others. Trying too hard won't help though. 
    
Stress is an important factor, who hasn't experienced falling sick after a stressful period? It's about balancing the different kinds of risks and chances we have been and are facing through our entire evolution. 


# Ideas to Explore
* [Backtracing Sars-CoV-1/2](#backtracing-sars-cov-12)
* [Infection Tropism and Disease Patterns](#infection-tropism-and-disease-patterns)
* [Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs](#evidence-for-increased-immune-protection-against-sars-cov-2-from-exposure-to-bcovs)
* [Early On Prevent Mucus Accumulations](./5_prevention_and_treatment/increasing_the_mucus_flow.md)


## Backtracing Sars-CoV-1/2
moved to a chapter on the page [Hypotheses about Nidovirales](1_biological/hypotheses_nidovirales.md).

## Infection Tropism and Disease Patterns
moved to separate page [Infection Tropism and Disease Patterns](./2_medical/coronavirus_disease_patterns.md)

## Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs
[Mostly written in April 2020, partly outdated]
moved to separate page [Bovine Farming and Covid](4_epidemiological/reduce_covid_bovine_farming.md)

    


## References

* References are grouped by topic. If several topics apply, one has been chosen. 
* Sometimes reviews or remarks in introductions are referred which point further to the original work/articles. 
* The references are named by the correspondence author, the primary authors or a descriptive tag. Studies carried out in 2020 are often named: first author followed by the correspondence authors. [todo more consistent naming]


    
