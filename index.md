# Thoughts and Ideas about Betacoronaviruses and Covid-19

## Note
* [Updates](#updates) in progress. Much content even more experimental! 
* This page is open source on GitHub: [https://github.com/forestgrape/coronavirus/blob/master/index.md](#https://github.com/forestgrape/coronavirus/blob/master/index.md), where it can be read both as Markdown and GitHub Preview and additionally hosted on GitHub Pages: [https://forestgrape.github.io/coronavirus](#https://forestgrape.github.io/coronavirus)
* This is work in progress, so mistakes of any form are likely. Parts under heavy work are often marked with '[in work]'.
* The page started with a proposal for a Dry Form Transmission Model and that the Covid-19 transmission can be metaphored smoke-like.  More [content](#t-content) has been added since and noteworthy changes are mentioned in [updates](#updates). 
* These are __hypothesis__ and __research ideas__ but __not__ [double] checked facts. They are put here as ideas to be checked and evaluated. 
* This page is intended to be like an inspiring conversation and many parts aren't rigorous and just ideas in raw form. 
* A thanks may be more suitable than citing (if to put as a license: at most Creative Commons). For copy & paste like rewriting attribution is appropriate. <!--Summarized: copy paste like needs attribution. For inspiration, thanks are enough and welcome. -->
* Two sections are marked as __public__, which contain suggestions and conversational descriptions: [Public Suggestions](#public-advice) and [Covid-19](#public-description).
* Pointing out mistakes especially relating to content, improvement suggestions and feedback are __welcome__.

> *Definitions* are written like this and are valid throughout this page. Sometimes only throughout this page.

> *Comments*, often subjective, are formatted the same and sometimes start with programming style // to mark them. Otherwise distinction is done by context/content. 


<p id="t-content">-----</p> <!-- workaround to set ids: Markdown generates ids from titles but github preview/jupyter keeps cases while github pages converts to all lower case. Sometimes these auto-generated title ids are used and these titles are written all lower case. -->

## Content

* [Updates](#updates)
* [Public Suggestions](#public-advice) <br> 
    Keep distance and hygiene. Then outside is safe. Inside ventilate well and/or wear a mask. Transmission can be smoke-like. Don't burden the immune system.
* [Covid-19](#covid)
    - [Public Description](#public-description)
* [Thoughts on Monitor and Controlling Sars-CoV-2](#monitor-and-control)
    * [Protection Measures](#protection-measures)
    * [risk assessment](#risk-assessment)   
    * [Monitor](#monitor)
    * [Data Availability](#data)
* [Coronaviruses with a Focus on Sars-CoV-2](#coronaviruses)- 
    - [Introduction to Life](#intro-to-life)
    - [Introduction to Viruses](#intro-to-viruses)
    - [Introduction to Coronaviruses](#intro-to-coronaviruses)
    - [Life Cycle](#life-cycle) 
    - [Tropism](#tropism)
    - [Habitat](#habitat)
    - [Habitat of Sars-CoV-2](#habitat-of-sars-cov-2)
    - [Evolution and Adaption](#evolution-and-adaption)
* [Immune System](#immune-system)
* [Ideas to Explore](#ideas)
    - [Infection Tropism and Disease patterns](#disease-pattering)
    - [Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs](#litvac2)
    - [Prevent Early On Mucus Accumulations](#early-vents) <br>
    Humidify inhaled air early on to increase the mucus flow and thereby the overall prognosis.
    - [Data Availability](#data) Public availability of well specified and finegrained data.
* [Transmission of Sars-CoV-2 with Focus on a Proposed Dry Form Transmission](#transmission-models) <br> 
    Sars-CoV-2 is mostly transmitted airborne and even Dry Form infection is possible.  
    - [Abstract](#abstract)
    - [Airborne Transmission](#airborne-transmission)
    - [Dry Form Model](#dry-form-model)
    - [Intermezzo Particle Dynamics in the Respiratory Tract](#particles)       
    - [Evidence for the Dry Form Transmission Model](#evidence)
        * [Evidence from Biological Properties](#biological-properties)
        * [Evidence from the observed Spread Patterns](#spread-patterns)
* [Suggested Protections Measures](#measures)<br>
    Smoke protection measures and masks work well. 
    - [Masks](#masks)
    - [Ventilation](#ventilation)
* [References](#references)

<p id="updates">-----</p> 

## Updates and Added Content
#### new online
- 2.8. Sections added to section Disease Patterns
- 30.7. Updates and corrections accross the page in work/in the process of writing down:
	* I wrongly ignored upper respiratory infections for a long time (because most severe cases were/are in the lungs) -> [Disease patterns](#disease-pattering)
	* In the first months Sars-CoV-2 didn't have the ability to spread well in humid clima. This has changed: the currently circulating strains spread well in humid clima too.  
- 27.7. [Disease pattering](#disease-pattering)
#### existing
- 3.5. Reordering of content and new Sections 'Coronaviruses with a Focus on Sars-CoV-2' and 'Immune Protection with a Focus on Coronaviruses' added to github pages/master branch (since 29.4. published as github branch coronasection)
- 17.4.20 00:04 GMT  New section online: Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs
- 9.4.20 Extended section [Prevent Early On Mucus Accumulations](#early-vents), previously named Early On Ventilators 
- 4.4.20 Added Section Ideas to Explore
    - starting with [Early On Ventilators](#early-vents): Increase the mucus flow and clearance by humidified air early on,  to decrease the risk for developing ARDS. 
- 25-30.3/9.4.20:  Corrected and looked up aerosol/particulate inhalation which yields to the new section [Particles in the Respiratory Tract](#particles).<br>
    In the first version, I had written that aerosols don't enter the lungs. False. Aerosols DO enter the lungs. The train of thought yielding this mistake: Entering the lungs is halfway entering the body. So there must have been enough evolutionary pressure to prevent this. This is ~~double~~ tripple wrong:
    1. The evolutionary roots of the lungs are the alimentary system (some dozens millions of generations ago), so substances coming in were just cleared down. Even as lungs and the alimentary separated this process stayed. As we often do too, evolution usually gradually bends things right, rather than rebuilding from scratch.  
    2. The lungs developed before we were upright (just a couple of hundred thousand generations ago) and in the original case the clearance of aerosols is earlier and better; shown for mice in [Kleinstreuer](#kleinstreuer). The ciliate based movement works even uphill, as ski tourers know. But there are limits. A gradual adaption evolved first: increase the frequency of the cilia, but wasn't yet enough so a workaround evolved:  smallest particulates are cleared by macrophages [citation to be added].  
    3. Upright clearance evolved when we all were in warm and mostly humid parts of Africa (well it likely got a little drier in the winter months and savanna replaced rainforest in East Africa, so we had motivation to stand up more and more). In such humid environments, clearance works better. In evolutionary dimensions, there has been only a short time for the adaption to cold and dry climate (how much depends on the overall drive for adaption, which isn't straight forward to say since migration routes have twists, crossings and turns, desert nights tend to be cold around the world and lifestyles were and are different). Finally to a permanent stay in heated indoor spaces, there has been and no genetic adaption at all.    

#### Minor Updates
- 3.8. [Airborne Transmission](#airborne-transmission) section added 
- 7.7. 7 storage options to memorize metabolism (in offline work)
- 2.7. Mask section redone and grouped into it mask related comments scattered throughout the page
- 12.6. sections in *online work* on the tropism of Covid-19 and Sars-Cov-2 (github branch)
- 12.5. added note that [outside is safer](#outside-is-safer)
- 1.5.- 9.5. Formulations in Monitor, Exposure to BCoVs and Coronavirus sections
- 30.4. Regrouped and extended topic on measures and data into a new section [Thoughts on Monitor and Controlling Sars-CoV-2](#monitor-and-control)
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



<p id="public-advice">-----</p>

## Public Advice, Suggestions and Thoughts
[in rework]
Covid-19 can be serious in the short-term and whether long-term effects can be caused is unknown - tough such effects can occur too for other (corona)viruses causing common colds - awarness for viruses and knowledge what they do and how they can harm or help is important. However no reason to be afraid, unlike viruses we've got a mind, better communication and a superb body police called immune system. The immune system is crucial since completely avoiding viruses is _not_ possible. Viruses can be harmful, but mostly the immune system handles them and they even can support us evolving. 

Time to act mindfully and work together in an open and honest way. 

### Sars-CoV-2 transmission 
* can happen in situation when bad breath/reek of alcohol is smelled: E.g. droplet exchange when close range face-to-face talking gives a transmission opportunity.
* can be soot/dust-like, especially in indoor places with dry air. How smoke behaves we know, since we can smell it, unlike the viruses. Just smelling smoke is the theoretical possibility of infection.  Being that exposed to smoke that the cloth start smelling, likely corresponds to a probability of a few percentages to get infected. Keeping the smoke model in mind makes it easier to detect and avoid risky situations: A neighbors candle won't harm through doors, but in a place with an indoor barbecue, smoke travels to the next floor. For Covid-19 this means: A single neighbor being infected is no risk, but in place with possibly many infected people e.g. a hospital treating Covid-19 patients, wearing a mask in _all_ rooms is important.


### Thoughts how to reduce Covid-19 infection risk and paths
> Remark: The following advices were written mostly in early spring 2020 when Sars-Cov-2 induced ARDS/SARS disease patterns peaked in Europe. Updates in work.  

* Wear a mask<br> 
    - for close range face-to-face contact/talking. 
    - in indoor places where infectious people can be. The longer one stays, the more people there are and the less ventilation there is, the more important. This because the infection risk increases with the amount of indoor air breathed.

    Masks can be reused if [cleaned](#mask-reuse-and-cleaning) regularly.   From time to time it should changed or washed thoroughly - there's more than Sars-CoV-2, that's not to forget!

* Distancing reduces infection risk.

* Ventilate well<br>
    [Ventilation](#ventilation) has been shown to be effective to reduce airborne virus spread. 
    * Open the windows. In cold climate: ventilate the rooms regularly by opening all windows for 5 minutes.  
    * If possibly infected, always ventilate before opening the door of your room or flat. 


- Keep proper hygiene. Especially wash the hands well with a lot of soap after toilet. Before eating wash them too. Soap destroys coronaviruses. Hygiene is important because:
    * transmission pathways of Covid-19 are still unclear. So just avoid them all. 
    * it is known that other pathogens can be transmitted through droplets or fomites. Pathogens often can cause tissue damage or weaken the immune system e.g. common cold viruses try to weaken the immune system [[kikkert](#kikkert)] and therefore can induce an increased infection risk. 
    * avoiding respiratory diseases is important, because Covid-19 symptoms can be similar. This could mean quarantine and figuring out all the people one could have infected and informing them to watch for symptoms.   

    But do NOT rely on hygiene alone, since there is strong evidence, that the majority of [transmissions occur through air](#spread-patterns).


- [Outside is safe, if some distance is kept](#outside-is-safer).  Ideally, walk or cycle directly from home. Primarily Covid-19 is transmitted indoors. In heated and few ventilated regions, beware the corridor and stairwell, don't stay too long or wear a mask. 

* Cars: Considering, that many people, especially children, will and should go outside right where they live, limited use of cars in cities is polite - it's nicer and safer with light traffic. 
* Public transport:
    * Wear a mask to reduce infection paths. 
    * Ventilation is important in public transport.
    * If there are old toilets, that go to the rails, do _not_  shit!

- Don't have dry air inside. In areas with indoor heating, drying the frequently washed cloths inside keeps the air humid. In dry air, both dust and viruses stay longer in the air. Dry air also reduces the defences of the respiratory tract against pathogens. 


### Observe
Observe your body, write down the observations and if possible measure.<br>
The more common Covid-19 in a region is, the more likely it is, that an observed infection is Covid-19 and not flu/common cold. In my case - South East Switzerland, a day hike away from Nothern-Italy - Covid-19 is/was (as of March 2020) the most prevalent disease. 

* Every morning first smell and then taste your favorite breakfast drink.  
* Measure the temperature several times every day and best in the same situations and record the values. An increased temperature can be an early sign of a possible Sars-CoV-2 infection. However many people have only a slight increase, which doesn't "meet the definition of fever", see [Covid-19 symptoms](#symptoms). 
Keep in mind that the temperature varies during a day and with the activities performed. That's why several measurements. 


> It's time [for medicine] to move on from digitalisation and black-white schemes to the continuous colorspace of Bayesian statistics. There's no hard border for fever at 37.5 or at 38 degrees. 


- Live a healthy lifestyle 
    * sleep enough, eat healthily, relax and do some sport 
    and avoid anything that weakens the immune system:
    * avoid excessive caffeine, excessive sport (if in a risk region), excessive alcohol ...
    * avoid being cold or even freezing for a longer period. For this reason, in cold climates don't open the windows permanently. 
    * avoid any kind of immune suppresives unless necessary for medical reasons. 
    * try reducing stress for yourself and others. Trying too hard won't help though. 
    
  Stress is an important factor, who hasn't experienced falling sick after a stressful period? It's about balancing the different kinds of risks and chances we have been and are facing through our entire evolution. 


<p id="covid"> -------</p>

# Covid-19

### public description
Covid-19 can have many forms it start in the upper respiratory tract and feel similar to a common cold with a sore throat and a runny nose. Loss of smell or taste occur and these are more specific to coronavirus infections. Coughing is typical too, the body wants to get rid of the viruses in the respiratory tract. But it can also start from within, from the lungs, and so early symptoms can be chills (because the body is increasing the temperature to fight the viruses) or just strange feeling, similar to a weak poisoning when having eaten something rotten or drunken too much. Feeling tired, energy-less and having an increased recovery time after sports are indications too. Most symptoms are not specific to Covid-19, they can have other causes: having eaten something rotten, not having had enough sleep or an infection with other viruses. Later symptoms can be a strange feeling in the chest like something sticky being inside (dry mucus loaded with viruses) or even shortness of breath (the lungs are inflamed). Diarrhea can both start early and later on and can outlast the respiratory infection by days or even weeks. If most of the symptoms are observed in the described order it is/was likely Covid-19.

> I likely had Covid-19 myself in late winter 2020 but temperatures still reaching below 0 in my area. For me the experience was very different from a respiratory disease and diagnosis was not obvious, at least back then. Partly due to the lack of respiratory symptoms - not a single cough if I recall correctly - and partly the supposed low prior probability according to official prevalence and partly because I didn't want to have it and so was satisfied with not experiencing known and obvious symptoms. It first felt like a minor food poisoning but no vomiting or the like. Just felt strange for one to two days. A temperature increase was there too - up to 35.5 - 36.5 from my normal range at rest 34.5 - 35. But since I didn't record the temperature systematically before, the temperature measurements around 36 degrees were more calming instead of ringing the bells. Symptoms faded. Later, there was a strange sticky feeling in the chest starting one or two days after an intense sport session - at this point, I started seriously considering Covid. Counting everything up it likely was Covid-19 and the sports session likely gave the viruses the opportunity to spread within the lungs. Noteworthy too: before the first symptoms, I had a long day and a rather stressful sleep afterwards, so the immune system likely not had enough time and resources to control the viruses. 

### symptoms
see the experimental section [disease-pattering](#disease-pattering) 

#### early symptoms
[in rework]
* A slightly increased temperature, often below 38 degrees, has been observed in many patients ([Zhang](#zhang), [Wong](#wong), [Zhong](#zhong)). An increase as low as one degree can indication an infection.
* loss of smell or taste; sore throat; 


### infection tropism 
How a virus infection behaves is an interplay of host factors including the host immune system, the tropism of the virus and environmental factors.

* __Host factors__ relevant for the tropism of Covid-19 are
    - Cells suscecpible to infection and capable of producing viruses (e.g. red blood cells are not). 
    - Host immune system responses. The immune reactions depend both on the personal history and possible exposure of anchestors (genetic adaption).
* __Tropism of Sars-Cov-2__ 
    * Virions enter just cells containing a matching receptor and having been activated by proteases, more in the section [Coronavirus Life Cycle](#life-cycle)
* __Environmental Factors__ effect
    - the travel of virions between hosts and thus the mode of the initial infection. 
    - Environmental factors influence host factors and thus indirectly the course of the disease.   





<p id="monitor-and-control">-----</p>

# Thoughts on Monitor and Controlling Sars-CoV-2
This section extends and   [Public Advices and Suggestions](#public-advice) section. 
## Content
* [Protection Measures](#protection-measures)
    - [support immune protection](#support-immune-protection)
    - [masks](#masks)
    - [ventilation](#ventilation)
    - [distancing](#distancing)
* [risk assessment](#risk-assessment)
    - [outside is safer](#outside-is-safer)   
* [Monitor](#monitor)
* [Data Handling](#data)

<p id='protection-measures'></p>

## Protection Measures
The following relies on the assumption that the main transmission of Sars-CoV-2 is airborne (either droplet, aerosol or dry form transmission). This is not yet confirmed. Evidence for dry form transmission is described in [Proposal of a Dry Form Transmission Model](#transmission-models). Airborne transmissions can be thought [smoke like](#metaphor-and-measures) or like the reek of alcohol in the case of close range droplet transmission. For the first non-smokers protections measures are suitable and for the latter distancing is enough.

### support immune protection
Completely avoiding Sars-CoV-2 can be as hard as avoiding dust and smoke. This is hard. Even in laboratory settings virus protection is difficult [[Wurtz, Raoult et al](#raoult), [Artika and Ma'roef](#artika)] and  Sars-CoV-1/2 protection is especially difficult. There have been several cases of infections in labs with Sars-CoV-1 [Orellana et al](#orellana), [Lim et al](#lim) and recommendations for autopsies of Covid-19 fatalities are very strict [Finegan et al](#finegan). Out of labs, once a coronavirus is widespread, complete avoidance is nearly impossible. Sars-Cov-2 is widespread. The best protection available is a good immune system. Vaccines - if once available - just prepare the immune system and do not replace it. So the long-term focus should be to support the overall health of humanity. In tropical regions where Sars-CoV-2 causes less virulent but there are many more infectious diseases, this should be the main focus. 
[in work]
Proposals for good health:
* providing settings that support good health
    - allow people outside to move
    - enviromental protection including clean air
* lessen stress 
    - secure and affordable life including basic health care
    - less pressure overall
* healthy nutrition 
* providing information and tips to focus on health and the immune system

There are many reasons and not just Covid, good health including an intact immune system are important.


### masks
Mask reduce spread since they mitigate both the infection and spread risk. 

#### mask effectiveness
* [Milton et al.](#milton2013) measured the influenza viruses spread from patients with and without wearing a surgical mask. They found:
    - Particles greater than 5 micro meter: Surgical masks nearly eliminated viral RNA detection in the coarse aerosol fraction: resulting in a 25 fold reduction in the number of viral copies 
    - Particles smaller than 5 micro meter:  statistically significant 2.8 fold reduction in viral copies detected in the fine aerosol fraction.
    - Overall: Surgical masks significantly reduced the overall number of RNA copies by 3.4 fold.
    
    > Assuming a reduction of exhaled aerosols by a factor of 2.5 (60% reduction) and a reduction by a factor 2 (50% reduction) for inhaling: everybody wearing a mask yields a total reduction factor of 5 = (2 times fewer particles inhaled) * (2.5 times fewer particles in the air since fewer exhaled) for aerosol transmission. This can yield a significant reduction of transmission in public indoor rooms (e.g. Supermarkets or Public Transport). <!--This would be a greater reduction in the reproduction factor than  observed for other measures. A factor 5 reduction would be enough to reduce the reproduction factor below 1 if an initial value of 4 is estimated (an estimate from the imperial college in London by Ferguson, Bhatt et al](#ferguson-bhatt).[in work]-->

#### mask types
Common types of masks are:
* _Surgical masks_ are constructed for comfort and inside-out protection and not outside-in protection. 
* _Protection masks against dust_ are constructed for outside-in protection and therefore good for self protection.
* _Textile masks_ are available in a lot of sizes and styles. They may not offer the best protection in theory but they may offer the best fit and be worn most often due to fitting comfort and style. 

#### mask use cases
* For self protection good fit and a good outside-to-inside filter are important. 
* In dry air, water droplets shrink, thus fine grained filters are especially important for self protection. 
* To avoid person to person droplet transmission e.g. when speaking, consequent wearing in close distance face-to-face situations is necessary. 

#### mask reuse and cleaning
* wash with a lot of soap/machine wash the mask
* heat to around 70 degrees for 20 minutes e.g. hot water, steam or in the oven - all measures which have been scientifically proven to destroy the Sars-CoV-2 viruses and leave the mask intact [citation coming] [Chan et al.](#chan) have shown that Sars-CoV-1 is inactivated above 50 degrees.
* if washing or heating is not available (e.g. camping), putting the mask to the bright sunlight is an alternative in areas with intense sunlight. 

#### mask recommendation
Officially recommend masks for spread reduction in indoor rooms. Without an official recommendation, people can be put off or look afraid of masks, at least [were] in Europe, which is not desirable, since masks are protective. 
The recommendation should be strong for people feeling sick or with coughs in indoor public rooms.

<!--  
Reasons against masks seem sometimes rather searched:
* touching more often the face. 
> Infection is not possible by touching the skin alone, this is true for the skin in the face too. Touching into the mouth or the nose is something else, but for this, masks are protective. 
* Reserve for healthcare workers is needed for the big wave. 
> If masks help to prevent the big wave in its roots, then that's the better option.-->


### ventilation
Ventilation reduces the indoor airborne spread, since the virion density in [outside air](#outside-is-safer) is much lower than in indoor air.

* [Escombe et al](#escombe) show natural ventilation is a valid measure and that in the first few minutes of opening the windows a major part of air is exchanged ([escombe: Figure 1](#https://doi.org/10.1371/journal.pmed.0040068.g001)).
* [Salathe et al](#salathe) simulate both the airborne (aerosol) and droplet spread of influenza, based on observed contact patters of high school students. They find that good ventilation is in their setting as effective as vaccinating around half of the population. 


### distancing
Both aerosol/droplets (reek of alcohol like spread) and dry particulates (smoke-like) can be reduced with distancing. Outside or with good ventilation, less distance is required. So if inside 2 meters is good, outside likely half a meter is enough. Wind direction should be considered outside. Inside, the airflow can have a direction too: e.g. the kitchen hood and the toilet venting draw air.


### Handling Covid-19 Cases and Quarantine
The focus should be on monitoring cases both for disease progression and to figure out infection paths.

#### instructions
* a mask order in public indoor space (including inside own building). 
* avoid crowded places
* instructions how to ventilate the room and flat before opening extern doors

#### isolation/home-lockdown
To reduce spread isolation/home-lockdown is a radical measure. The more is known about Sars-CoV-2 and its spreading the more finegrained the measures can be. 
* isolation should be used with care since it can discourage people from testing or disclosing socials contacts and travel history. 
* there are reasons against a complete stay at home order in my opinion as of 31.7.2020:
    - going outside is important for an intact immune system and good health. This is especially important for infected. 
    - indoor sports or movement can produce a lot of exhaled breadth condensate/aerosols and thus put people in the same building at 
    risk.

    Avoiding indoor and crowded public spaces is important however.

Isolation may be working for people with own houses with gardens but for people living in big buildings, permanent home stay introduces transmission opportunities.





<p id='risk-assessment'></p>

## Risk Assessment

### balancing of measures
* Monitoring the personal/frequent customers of open(ed) businesses can be an indication for a new/increased Sars-CoV-2 spread. Representative samples twice per week should do the job. 
* Step by Step adjusting helps to find a balance without sudden abrupt changes. 
* All people belonging to a risk group for severe Covid-19 should be eligible to obtain free masks from pharmacies and doctors. The health care professionals should evaluate the model for a good fit and instruct the usage. 
* Workers and patients of old-age homes, hospitals and similar institutions should monitor their health closely, watch for early Covid-19 signs and have easy access to Covid-19 PCR tests. Tests can also be used to do sampling to have an overview. Early action is important in these settings. Overall good life quality should be the goal. E.g. longterm prohibit visits is likely no solution. 

### outside is safer
Outside the viruses get dilluted and then are inactivated faster than inside. Due to inactivation and clearance there's no accumulation. However, outside infection probability is not zero just smaller than inside. At close distance there is still chance for transmission. 
- [dilution](#dilution): The virion density decreases rapidly due to the air exchange that is present outdoors. 
- [virion destruction](#virion-decay): sunlight and heat  destroy virions or at least increases the decay.<!-- check humidity effect on virus survival-->
- [virion clearance](#virion-clearance): Humidity, rainfall and abundant attachment surfaces clear the air from virions.

#### dilution
Outside there is much more air per person than inside:
* In an indoor room with 3 meters high and each person has a distance of 2 meters to the next, there are 12 cubic meters of air per person.
* In the most densely populated cities the population density reaches 100'000 person per square kilometer. Assuming that only the lower 150 meters of air are mixed, yields an average of (1'000'000 m^2 * 150 m) / 100'000 persons = 1500 cubic meters of air per person. <!--Compared to an indoor room with a high of 3 meters this corresponds to a distance of 22 meters to the next (if only aerosols transmission and not droplet transmission is taken into account). -->
* Large areas/entire world: Assuming a mixing of air in the lower 1500 density meters and an average population density of about 15 persons per square kilometer:<br> 
(1'000'000 * 1500 cubic meters)/15 persons  = 100 million cubic meters of air per person. 

#### virion decay
Virion decay happens everywhere in the air, in the body, in water. Depending on the environment at different speed and with different mechanisms. The principal reasons for the virion decay are:
* the genome is [stored in unstable ssRNA](#ssRNA)
* the envelope of coronaviruses consists of fatty acids which form the cell membranes of the virus host organism. In multicellular organism the cell membrane has not evolved to be stable outside the organism. 
* virions have no repair mechansim since they don't have a metabolism

Process and situations virions decay:
- sunlight inactivates virions<br>
    mainly the UV part destroys RNA. Even stable DNA in the inner layer of the skin, protected by outer layer of the skin, a cell membrane and inside a the cell nucleus takes damage from exposure to UV (the more light absorbing melanin the less sunlight reaches the inner layer of the skin). 
- heat<br>
    particles and surfaces exposed to sunlight reach easily temperatures over 45 degrees. At this temperature virions don't stay intact for long [Chan et al 2011](#chan).
- disintegration<br>
    * digestive enzymes from other organisms e.g. bacteria in water (sea, oceans, rivers) or in the alimentary disintegrate the envelope
    * soap destroys the lipid envelope and renders virions uninfectable
- decay<br>
    * single stranded RNA is unstable and thus even under optimal conditions virions have a probability to decay
    

#### virion clearance
Virion are cleared from the air by the mechanism below.  and due to [virion decay](#virion-decay) there's no accumulation.
- [virion decay](#virion-decay) in air: occurs mainly through sun light
- condensation 
- washed out by rain
- virion attachment to non infectable materials (which is nearly everthing except a tiny fraction of cells in the scarce hosts) 
    * earth
    * water
    * rocks





<p id='monitor'></p>

## Monitor 

### monitor evolution
[in work]
From time to time full genome samples should be analyzed to monitor evolution of Sars-CoV-2 and to deduce international spread. 


<p id="data"> ---</p>
    
## Data 
Data production/collection, data description and data analysis can be done separate today. Remark: Separation of roles has a long tradition in science: Tycho Brahe collected the planetary motions, Kepler described them and Newton explained them. 

Today separation of roles can be done faster, easier and in cooperation, thanks to modern communication technologies. The basis is, that data is observed/produced, recorded (often free of costs nowadays), annotated and searchable published.


### efficient handling
In computer/data science it is well known that distributed data handling work best even on computers with only a couple of cores.
* Map reduce and similar
* Paradigms enabling parallel data handling

We humans have billions of brains, so with good communication we've got a lot of brain power to tackle any task. 

<!--
* there are many skilled data scientists around the world. Many spending their time presenting us the most relevant ads. Relevant usually means highest click rate i.e. most distracting. Whether the distraction is good or bad depends on pre and post activity, e.g. to analyze Covid data for a change can be welcome. Remark: I consider adds as useful for product information and spread. -->


#### data specifications
For data analysis it is important to have accurate, consistent and clearly specified data and notifications if the data may not be accurate or the specifications changed. Notified corrections are helpful too.  
The different data measurement methods related to Covid-19, combined with no or few specifications, have a lot of space for improvement all around the world and a worldwide agreement on annotations and publishing of country/region specific specifications would make the data at least partially comparable. 

E.g. In Switzerland, the testing policy, which is mostly followed, is to test only people who are sick _and_ belong to a risk group as of 17.4.20. This is hard to find on the official page from the BAG (Swiss Health Department, bag.admin.ch in the German Covid-19 FAQ) and even left out on the English version (as of 17.4.20). The official statistics on the same domain, has no note about this testing scheme. The data are analysable (since generally consistent) and expressive but just not comparable to countries, where everybody who is sick or even everybody who could be infected is tested.
Remark: As of 1.5.20 more people are allowed to test. 

> Subjective Remark, May 2020: While not perfect, the government and the BAG in Switzerland do overall a good job. What I consider done right: A slow down of life to have people focus on the important things among those health. A temporary slow down of spread to buy some time for preparation, experience gain and research. Personally, I liked (and helped me doing this page) that there was no stay at home order. Allowing people and especially children to go outside is important. The longer Covid-19 spread patterns can be analyzed the more evidence is there is, that the virus spreads mainly in dry indoor environments. A gradual reopening starting in April makes sense. 
Room for improvement: Masks benefits indoors and that outdoors infection risk is fare smaller should be clearly stated. 
To rate afterthought is much easier than to be there in charge with few proven and sure knowledge. In that view for all countries, there were difficult decisions and no clear right or wrong. Most countries found their path according to their situation. But I think now it is time to ease lockdowns step by step, especially in areas where there are not many severe Covid-19 cases. Around the world it remains important, however, to support public health. Keeping some slow down can be part of that. In case of new findings and knowledge, **adaption of strategies** is important. 
Right or Wrong and Perfection anyways are often a matter of viewpoint and angle. 

#### data features
* For analysis is useful to have as complete, exact and accurate data as possible and data protection laws permit e.g. age, medical conditions and locations.
* Clinical observations well annotated and as complete as possible. 
* Interpretation and analysis are nice to have but not necessary. 

#### easy readable
Data ideally are in a common format (e.g. CSV), on a public API (e.g. GitHub repository/REST API) and are annotated e.g. contain a readme with the specifications what and how is measured. 




<p id="coronaviruses">-------</p>

# Coronaviruses with a Focus on Sars-CoV-2
[in work]
This short overview reviews various aspects of coronaviruses. The overview mostly covers topics relevant for other part part of [this site](#t-content).

- [Introduction to Life](#intro-to-life)
- [Introduction to Viruses](#intro-to-viruses)
- [Introduction to Coronaviruses](#intro-to-coronaviruses)
- [Life Cycle](#life-cycle) 
    * [Metabolic Phase](#metabolic-phase)
    * [Virion Phase](#virion-phase)
    * [Intermezzo Movement of Virions](#movement-of-virions)
- [Tropism](#tropism)
- [Habitat](#habitat)
- [Habitat of Sars-CoV-2](#habitat-of-sars-cov-2)
- [Evolution and Adaption](#evolution-and-adaption)




<p id='intro-to-life'>-----</p>


## Introduction to Life

### forms of life
> <span id='form-of-life'> A *form of life* in a given environment is an identifiable thing that can interact and influence parts of its environment and thereby produce things which are near the same and thus have near the same interaction patterns. These are called *progeny* or *next generation*. </span>

In other words, a form of live has memorized environment interactions and passes rough copies of those memories to the next generation.

All known forms of life on earth interact with the environment at the molecular level on the basis of enzymes made of RNA and proteins (only RNA in the case of [viroids](#viroid)), which catalyze interactions in watery solutions. 

The simplest forms of life are:
> <span id='viroid'>*Viroids* are pieces of RNA able catalyze self reproduction.</span>  

All other known forms of life also encode enzymes made of proteins:
> <span id='protein'>*Proteins* are amino acids chained together.</protein>

Proteins are made by ribosomes:
> <span id='ribosome'> *Ribosomes* read positive sense RNA</span>, called <spand id='mrna'> *messenger RNA* or just *mRNA* </span>, and select a amino acid for each tripple of RNA acids and chain these amino acids together to form proteins. This process is called <span id='translation'>*translation*</span> since the mRNA is translated to a protein.


### lifetime storage
[in work]
4 forms of lifetime storage are known to be used on todays earth. 

* ##### ssrna
    single stranded RNA:
    - unstable 
    - difficult and mutation rich duplication 
    - recombinations are possible upon duplication  
* ##### dsrna
    double standed RNA: 
    - unstable
    - somewhat reliable duplication possible
* ##### ssdna
    single stranded DNA: 
    - difficult to reliable duplicate
    - mediocre stability
* ##### dsdna
    double stranded DNA: 
    - very stable
    - reliable duplication possible 
 

### storage and decoding
7 forms of combinations of lifetime storage and decode mechanisms are known to be in use on earth, known as Baltimore classification:
* (+)ssRNA := Single stranded RNA, + sense
* (-)ssRNA := Single stranded RNA, - sense
* ssDNA := Single-strand DNA
* dsDNA-RT := gapped DNA
* dsRNA := Double strand RNA
* ssRNA-RT := DNA-RNA reverse transcribing
* dsDNA := Double stranded DNA

#### notes on storage
* only dsDNA forms are able to encode all enzymes for their entire metabolism and are able do photosynthesis on todays earth. All other forms are dependent on some enzymes produced by dsDNA forms and as defined below are called [viruses](#virus).
* Some forms of life alternate the storage formats through their life cycle: ssRNA-RT (retroviruses).

> A *gene* denotes a piece of storage which encodes a single protein. 

So genes are sequences of single/double stranded DNA or RNA which are transcribed to positive stranded RNA which in turn can be translated to proteins. 

### Interactions between different Forms
Nearly all forms of life are dependent on other forms of life in one way or another. Mostly they need substances for their metabolism which are only produced by other forms of life:
* All forms of life except those who are able to do photosynthesis or use thermal energy are dependent on forms of energy produced by other forms of life. 
* Besides energy mammals including us humans need extern sources for vitamins, essential amino acids, essential fatty acids, ...
* Many forms of life live in symbiontic relations with many other forms of life: each form providing what it is best at providing at. Sometimes out of relations, permanentely coupled forms of life develop: E.g. mitochondria as cell organelles. 

> Cell forming forms usually just need the ingredients/raw material and are able to produce the enzymes/machines. Where as viruses can't produce all needed enzymes/machines

### cell forming life
[in work]
As noted all forms of life which encode their entire metabolism are dsDNA based. 
Many [to check if all] of these forms shield their metabolism by a semipermeable membrane. 
* Prokaryotes 
* Eukaryotes

Some forms additionally shield their genome by an inner membrane
* Eukaryotes


<p id='intro-to-viruses'>-----</p>

## Introduction to Viruses

(in work and to be checked)

> <span id='virus'> A *virus* is a form of life on earth, that can't produce all necessary enzymes for its replication. </span> 

So viruses have to integrate enzymes provided by other forms of life into their metabolism. 
Since all known molecular independent forms of life on today's earth are cell based and the metabolisms is inside the cells, viruses need to be within cells for carry out their metabolism. 

> <span id='infected-cell'> A cell is called *infected* by a virus if it contains genetic material of the virus which influences the cell's metabolism. These can mean that the virus is replicating inside the cell. But a cell is also called infected if only some viral genes are translated and the resulting enzymes are active. </span>

Most cells don't live forever (in the prevalent mulitcellular organisms most cells don't survive and only few cells have the change of being part of the single cell giving raise to a descendant [in work]). Viruses infected cells often die even faster. So viruses need to jump to other cells. To achieve this, most viruses, including coronaviruses, have a 2 phase [life cycle](#life-cycle). 
* Virus phase: Using a cells metabolism to produce proteins and ultimately progeny.
* Virion phase: Travel, wait and upon match with an [infectable cell](#infectable-cell) induce infection. 

> <span id='virion'> A _virion_ is form of a virus outside a cell and ready to infect a cell. </span>

Virions are similar to seeds of plants: They don't have a metabolism running and are dormant except for some grabbing spikes and wait for activation to initiate fusion with a cell. 

> <span id='infectable-cell'> A _infectable cell_ is a cell which can be infected. There are [constraints on a cell](#cell-tropism) to be infectable </span>

Once a virus infects cells, it changes the cell's metabolism. To survive to produce rough copies of itself. Therefore viruses are dependent on the host cells. Longterm surviving virus strains generally have a symbiotic relationship with their natural host life form as a whole but still can be fatal for individuals. The survival of fit ecosystems is ubiquitous in nature. 

> <span id='infected-object'> An object is called _infected_ by a virus if it contains cells that are infected. An object can be a tissue, an organ, a structure or an organism. There are constraints on a [object to be infectable](#tropism-of-coronaviruses).</span> 

So an organism is infected if it has some cells that are [infected](#infected-cell).

> <span id='infectable-object'> An object is *infectable* if it can become [infected](#infected-object). An object can be a tissue, an organ, a structure (e.g. upper respiratory tract) or an organism.</span>

### Virus Entity
[in work and experimental]
For many biological questions regarding multicellular organism it makes sense to consider them as a whole and not the single cells. This since the cells communicate and differentiate to form more capable organism. E.g. we usually are more interested in how fast an organism moves forward/runs and not how fast some single muscle cell contracts.<br>
Similarly for viruses infecting organisms often to grasp the full picture it is necessary to consider all viruses as an entity and not as unrelated. they still show different behaviours in different cells and upon different situations:
* DNA viruses can in theory encode the same differentiation mechanism as eukaryotes
* RNA viruses don't encode the same mechanisms as DNA based forms of life e.g. for gene expression. However they still are able to show [different behaviours](#tropism-of-coronaviruses). 
<!--
> A virus entity denotes all viruses contributing to a viral infection in an organism.--> 

> <span id='virus-entity'>A *Virus Entity* denotes all viruses in an organism resulting from a single infection occurence. Upon a new infection the infections can interact and give rise to a *new entity*. </span>

Similar to the different cells in multicellular organism only few viruses in a virus entitiy are likely to infect new hosts and thereby form a new entity. 

> // Virus entities are a concept haven't read about in literature. Similar concepts may exists possibly under different names. 

#### life cycle of virus entities
In outside living vertebrate hosts, the typical life cycle of a coronavirus entity is [citations and argumentation in work]:
* enter the respiratory system
* spread to the lower respiratory tract and replicate to high titers (often in ciliated epithelial cells) 
* dimish parts of the host immune system
* reach the intestine (or sometimes the kidney) by spreading through blood or through the alimentary tract via stomach
* establish a possibly longer lasting infection in the intestine(/kidney) and contineously have progeny released
* progeny: the virions get transported by wind or water to new susceptible hosts



<p id='intro-to-coronaviruses'>-----</p>

## Introduction to Coronaviruses

### Nidovirales
Coronaviruses belong to the order of Nidovirales. Nidovirales are positive single-stranded, non-segmented and enveloped RNA viruses. This means that their genetic material is encoded as a single positive strand of RNA - the same way as messenger RNA pieces of the cell. Enveloped means they have a membrane.  Nidovirales share a gene expression pattern in which several genes are encoded on the same RNA piece in a nested way[todo add ref lai 92], that's where Nido comes from: Nidus means nest in latin.


### Coronaviruses
The membrane is spherical and consists of structural proteins coated in a lipid bilayer aquired from the host cell, called envelope. Among the membrane proteins are large spike proteins. Theses spike protein point out of the spherical, which gives coronaviruses a corona (latin for crown or solar corona) like appearance under the electron microscope.


### coronavirus proteins  
[in work]
- structural proteins: used to give newly built viruses structure. These are the membrane proteins (E, S, M, [HE]) and the internal protein N stabilizes the RNA
- diminish host defence
- RNA dependent RNA polymerase 
- cleavage other proteins and RNA [to check]


### coronaviruses species
[in work]
#### sars-cov-1
Betacoronavirus identified causing Sars in 2003/2004.
* yields mainly lower respiratory tract infections
#### sars-cov-2
Betacoronavirus identified causing the current Covid-19 pandemics. A focus of this page and many sections contain special notes about features of Sars-CoV-2.  
### mers-cov
Betacoronavirus identified causing MERS. 
* It infects mainly cells in the deep lungs (bronchi and alveolis). 
* The natural hosts are dromedary camels. 
* the main spreading events all have been observed in extremely dry air. 
### bovine coronaviruses
Abbreviated BCoV. Betacoronavirus causing diarrhea and respiratory infections in cattle. 



<p id='life-cycle'>-----</p>

## Life Cycle 
As mentioned in the [introduction](#intro-to-viruses) the coronavirus life cycle has two phases:
* [Virion Phase](#virion-phase)
* [Metabolic Phase](#metabolic-phase)

### virion phase
Travel and Wait for Activation<br>
Virions have behave similar as seeds of plants: Travel and wait for the right conditions to unleash their energy (spring loaded proteins for viruses and starch for seeds) to start the active phase. 

#### virion travel 
Once released from a cell virions are moved (see [movement-of-virions](#movement-of-virions)) until they are [activated](#virion-activation) to start the cell infection process.
A virion needs to reach possibly a host, the  location of the target cells (e.g. an organ), a specific cell and then it needs to be matched to a receptor on the cell membrane in the order of nanometers. All this without being able to move on its own and thus relying on [external movements](#movement-of-virions). The virion-target match can happen because the virion is moved to the target, the target is moved to the virion or a combination. 

The infectable cell can be:
* in the same host| another host 
* in the same tissue| another tissue
* of the same cell type| another cell type



<p id='movement-of-virions'></p>

## Intermezzo Movement of Virions
Once virions are released from a cell the virions are moved by whatever movements are in their surroundings.   

### swim with the tide
All forms of life on earth are water based. Both protein and RNA/DNA synthesis occur in water. So virions are pro therefore start out their journey in watery fluids, often the cytoplasm of a cell. Upon release they are exposed to whatever substances there are around. For most viruses their virions will always be dissolved in watery fluids and will not survive being dissolved in other fluids such as alcohol or air. 
* __Fluid dissolved in__:
    - Salty water in oceans: Water in the oceans is also likely where life and RNA viruses as an early form of life developed and still contains a huge number of virions. 
    - Water in lakes and rivers: These waters serve as an intermediate place for many virions. 
    - Fluid in an organism: Virions of viruses infecting multicellular life first start out in the fluids of the hosts and in many cases never leave the host fluids. 
    - Water droplets can be dissolved in air. 
    - Air. Air contains reative oxygen and most virions will be destroyed, since they expose activator proteins on the outside. Coronavirus virions are a rare exception staying infectious in dry form. 
* __Material attached to__: These can be any solid material e.g. a part of living organism or any kind of non living matter. The movement of virions follows the movement of the materials attached to. These particles are in turn dissolved in fluids, mostly water, or attached to other particles. 


### Movement within a host
Often virions get moved within a host. Some even evolved not to leave the host organism at all. Within a host the movement of virions depends on the location they are released and the kind of material they are attached to: 
- movements with fluid flows:
    * the blood flow if the virion is in the bloodstream
    * the mucus flow 
    * respiratory tract lining fluid
    * the air breathed in and out and the [particle dynamics in the respiratory tract](#particles) associated.
- solid movements within the host i.e. the virion is attached to a moveable part:
    * inside cells with the centrosome. Especially important for viruses which need to enter the cell nucleus e.g. influenza viruses.
    * attached to particles get moved around within a host. 
    * the movement of body parts e.g. an extremity (hands and feets) or the lungs.  
- Brownian Motion: The Brownian motion of viruses is slow and by Brownian motion alone a virion usually just moves a few micro meters to reach close by cells. However if given engough time virions can diffuse to many locations both within tissues or within cells. 


<!--td move in out-->


### Movement between hosts
[in work]
Many forms of life cannot move well on their own: Plants, bacteria and fungi. In the oceans this is less a problem thanks to the currents. On land however, all forms of life with no ability to move have the challange to spread and genetically interact. The main options are the same for them all: Being carried by wind, water or moving organsims. Virions have to rely on this options to spread through a host populations:

* __Moveable Organism__: This is mostly the host where the virus was built but it can be an animal  primarily carrying the virion called a carrier. 

    > <span id='carrier'> A _carrier for a virus_ is an organism which is important for its carrier function in the life cycle of a virus.</span>

    When the carrier moves the virions move with it. The farther, faster and the more possible hosts at new location the better for the virus to distribute. Optimal transportation are migrating and/or fare flying animals: birds and bats. The usage of horses and the inventions of trains, cars and airplanes made us humans new optimal hosts. Jetting around the world from city to city is optimal for viruses since: fast travel to a new set of hosts. 
    - Movement induced by the organism:

* __Wind__: Wind movement has challanges:
    - The movements induced by wind are random in the sense that evolutionary adaption to directional movement is hardly possible. <br>
    => Organisms relying on wind usually compensate this randomness often with huge numbers. We all can see this seasonally by the flow of pollen.  
    - The air contains reactive oxygen and sunlight exposure is frequent. Therefore genetic material needs to be well protected.
    - Only tiny particles or small particles with large surfaces resist gravity and are moved by the winds. 

    Different form of lives solved these challanges: 
    * Many plants rely on wind both for genetic recombination and spread. 
    * Viruses rarely can spread with the winds. Coronaviruses are one of the few exceptions.   

* __Water__: 
    Water movement is directional to the oceans and particles need to be "fished out" not to end up there. One of the few escape options are drinking animals. 
    * Plants rarely used water since ending up in the oceans is not the goal of land plants.
    * Viruses infecting animals often rely on water. Animals drinking brings them directly to possible hosts. 


### Travel Probabilities
Getting matched to an infectable cell involves the following steps (steps in [...] are facultative):
- [reach a host]  
- [reach a tissue]
- reach an infectable cell

Each step has a success rate of at most a few percents, so the combined probability of reaching a target can be very low. 

The probability to reach a *next* exploitable host, is especially low, due to many traps and hostile environment:
* get attached to a wrong thing. High probability due to the random movement and usually the surface of non targets is fare greater than the target surface. Except confined indoor settings, in this case the surface of the combined lungs is the greatest surface - greater than the surface of all the walls.  
* sunlight destroys virions. 
* heat
* chemical environment
<!--transmission bottleneck important for evolution-->


#### cell entry
- the virus gets attached to the matching receptor on the target cell mostly via the spike protein
- fusion of the viral envelope with host cell membranes once [primed]: 
    * initiated by the fusionpeptides of the spike protein 
    * which in turn is driven by the conformational energy of the spike protein, 
    * which is released upon cleavage at specific cleavage sites
- release of genetic material and proteins into the cell
- once the viral RNA is in the cytoplasm of a cell the [metabolism](#metabolic-phase) can start


### metabolic phase
The metabolism starts once the genetic material of a virion is processed by a cell and thus the virus influences part the cells metabolism. Since all this happens in a foreign cell and cells have mechanism in place to prevent its natural metabolism being changed, each of the following steps has a noteworthy probability of failling. 

#### metabolism phase 1: preparation
[in work]<br>
The goal of the first phase in the metabolism is to produce RdRP (RNA dependent RNA Polymerase protein). Addionally let the ribosoms produce some proteins that dimish the cells immune mechanisms such that the cell doesn't ring the bells. Steps:<br>
Realease RNA -- let the host ribosomes translate two ORFs of the viral genome with frame-shifting---> two large proteins<br> 
--cleave--> pieces of proteins<br> 
--like magnets these pieces self arrange to structures--> 
* proteins providing the right setting for the phase 2 metabolism e.g. prevent the cells protection mechanisms working<br>
* polymerase protein (protein capable of transcription of RNA to RNA) <br>

#### metabolism phase 2: replication
The metabolism can produce new virions that are released from the cell. The properties and and the environment of the cell influence the propreties of the virions produced. This phase is initiated by the transcription of the (+) strand RNA to a (-) strand RNA template mediated by the polymerase protein:<br>
(+) RNA --transcription--> (-) RNA template<br>
-- transcription--><br>
*  pieces of subgenomic mRNAs which get translated to mostly structural proteins (N, S, M, E, [HE])
*  (+) RNA genomes to get packed together with the N proteins to form the nucleocapsids of new virions and thus building up new virions.




<p id='tropism-of-coronaviruses'>-----</p>

## Tropism of Coronaviruses

> *Tropism*: The word comes from Greek 'tropos' which means turning. For the movement of an organism, tropism describes the change of direction upon a stimulus. This is generalized to describe how organisms behave under different stimuli or circumstances. Tropism in the case of viruses describes how viruses react to different circumstances.

> In literature, the term tropism of viruses is sometimes used more narrowly: which cells and tissues are suspectible to infection or in which an infection is observed. Here, for observed infections the term habitat is used. 

Questions relevant for the tropism of coronaviruses:
* To which receptors under which conditions the virions attach? 
* Factors initiating cell entry of virions?
* What metabolism is started in which cells under what conditions? 

Both evolution and biological constraints yield the tropism of viruses. Evolution favours successful survival both short-term and long-term. Key factors for the tropism are:
* cell types:   
    - receptors expressed
    - biochemistry inside the cells
* environmental factors throughout the lifetime of a virion and around the cells mainly determine entry:
    - physical environment: e.g. temperature
    - chemical environment: e.g. pH value
    - biological environment: e.g. Virions are primed for cell entry by specific proteins
    


### tropism virion phase

Plant seeds evolved first to travel and then to be activated under favourable conditions for growth, at least as much as the seeds are able to check the conditions. Similarly virions need to be activated to initiate cell fusion and thereby start the [metabolic phase](#metabolic-phase). Plants mainly need and check the right physical and chemical conditions to growth. Correspondingly seeds are activated by their physical environmental factors such as temperature, humidity, light and minerals dissolved in the surounding water to start their metabolism. Viruses need the right biological conditions inside the cells, therefore viruses evolved to check biological conditions: receptors on the cell membrane and proteases available. 
<!--#### virion attachment-->

#### virion attachment and activation
To enter a cell a virus uses its spike protein, which first serves as a grappling hook by binding to a receptor on the cell membrane.  Next the virus needs to pass the cell membrane. This step is often initiated by cleavage of the spike protein which yields fusion with the cell membrane.
* enviromenment around the cell
    - The spike proteins of coronaviruses needs to be primed which usually means cleaved for cell entry. This cleaving can require proteases and the right physiological conditions[Holmes](#holmes).
* matching receptor


### metabolic phase tropism
[in work: incomplete and citations/confirmation in work]<br>
> Generally the virion tropism better investigated than the tropism in the metabolic phase. This since cell entry can be investigated with retroviruses expressing the coronavirus spikes and transfected cells expression the right receptors. To investigate the metabolic phase, ideally one could look into the cells. 
* ciliated epithelia and secretory cells support well replication of coronaviruses both cells located in the airway and the intestine
* immune system cells are infected but usually aptosis is induced before replication takes place. 
[todo: search&read]

#### conditions inside the cell
* The cell environment shouldn't deactivate the virus or alarming the immune system to do so.
* The cell should be able to produce lots of virions and thus should have a performant metabolism.

 

### cell tropism

> *Cell tropism* describes how a virus behaves upon match of a virion to a specific cell type. 

The cell tropism is the combination of the [virion tropism](#virion-tropism) which determines cell entry and the [tropism in the metabolic](#metabolic-tropism) phase which determines the changes in the cells metabolism induced upon viral entry.  

For viruses in natural equilibrium, the cells infected are involved in the survival of the virus strain:
* cell used as entry point. For coronaviruses these are often cells on the aptical epithelial layer of respiratory tract. 
* cells that support efficient virus replications takes place and virions easily reach the next cells to build up a population. Often these are secretory or ciliated cells in the respiratory tract.
* cells relevant to leave a host. Often these are cells in the intestine or the kidney. For indoor living hosts these are 
* cells which are relevant for the host immune response. Coronaviruses infect immune system cells (dentritic and T cells) and induce aptosis. 

#### cell tropism of sars-cov-2
[in work]
* efficient replication
    - alveolar type 2 cells
    - alveolar macrophages
* infection but no replication
    - dentritic cells [check: if ACE2 expressed/other mechanism of phagocytosis]: aptosis induce
* no entry
    - Cells not expressing ACE2. Except if the cells phagocyte virions on their own and the virions are able to fuse the membranes once phagocyted. 

> Phagocytose  can occur e.g. for antibody marked virions which may get phagocyted by macrophages. This is both relevant upon reinfection and for the design of vaccacines. Antibodies against the outer membrane proteins (e.g. the spike) can be a two-sided sword.

### tissue tropism
* coronaviruses are often is tissues with large aptical surface and the [virions are released](#orientation-matters) again on the aptical side to spread via the covering fluids. 
* coronaviruses are to big to diffuse effiently inside tissues [to verify].



<p id='section-habitat'>-----</p>

## Habitat
[in rework]
As outlined in [tropism](#tropism) there is a variety of conditions for a virus to start to metabolism and even more too successfully replicate. These environments form the habitat of a virus strain:
><span id='habitat'> The *Habitat* of a virus are the locations which are frequently infected: [cells](#infected-cell), tissues, organs or [organism](#infectable-organism). E.g. Sars-CoV-2 frequently infects alveolar type 2 epithelial cells. These are called a habitat as well as the surrounding organ: the human lungs and the host organism: us humans </span>

### organisms habitat aka hosts
The organisms forming the habitat are called hosts:
><span id='host'>A *host* of a virus is an [infectable organism](#infectable-organism) and these infections occur frequently and are relevant for the spread of the virus i.e. are part of the life cycle.</span>

><span id='endemic'> A virus strain is *endemic* in a collection of organisms if that collection is a habitat of the virus.</span>

Sometimes it is helpful to name frequently infected organism which play no role in the virus spread:
><span id='side-host'>A *Side Host* of a virus is a [host](#host) but the infections yield *no* relevant spread of the virus. E.g. the virus cannot replicate effienctly or the virions cannot leave the host. These infections can be viewed as side-effects of the random virus spread. Viruses can evolve such that a Side Host becomes a Host</span> 

### conquering new habitats
The virus can get attached to a cell types or hosts the given strain which are not part of its current habitat. Most likely the entity of viruses doensn't manage to adapt to the new target. However if a lineage of viruses manages to adapt to this new target, this becomes a new habitat. If the new target is a new species an interspecies transmission has occurred. Since in new habitats there often is a different evolutionary drive, the line of viruses can give rise to a new virus strain.  
The new habitat can be:
- a new cell type
- a new tissue type
- a new host type: [conquering new hosts](#conquering-new-hosts)

### conquering new hosts
As the [movement of virions](#movement-of-virions) is not directed, virions get attached to things at random. If a virus strain reaches animals of some species, there are several cases <!--[in programming languages: switch(animal) or animal match]-->:
* the animal reached is a host -> continue life cycle 
* the animal reached is not a host:
    - it is not infectable -> break
    - it is infectable. This yields an [*interspecies infection*](#interspecies-infection). Again two cases:
        * the virus can *not* leave to infect other hosts -> break i.e. it is a cul-de-sac 
        * virions can leave to infect other hosts -> gives rise to a new life cycle: an [*interspecies jump*](#interspecies-jump) has happend. Since likely the evolutionary drive changes this gives raise to a new virus strain. 
    
> <span id='interspecies-infection'> An _interspecies infection_ is when an animal which is not an existing [host](#host) animal becomes infected by a virus strain. </span>

> <span id='interspecies-jump'> An *interspecies jump* denotes a transmission to a new species and the species becomes a new [host](#host) i.e. the new species becomes part of the habitat of the virus. The virus strain may evolve to an adapted new strain.</span>

> <span id='zoonosis'> An [interspecies jump](#interspecies-jump) where the target is a human is called *zoonosis*.</span>

So an interspecies infection denotes a transmission without spread in the new species. If these infections occur frequently the new species becomes a side host but not a natural host. Frequent infections allow the virus strain to adapt to the new host. The host may become part of a life cycle of a possibly new virus strain which is then an [interspecies jump]


#### observed interspecies infections
* all occurrences where [interspecies jumps](#interspecies-jumps) occurred at least one [interspecies infection](#interspecies-infection) must have occurred. But it is likely that many interspecies infections occurred before the jump happened. 
* Infections of Humans:
    - In the 70s and 80s there were a couple of reports that BCoV regularly causes infections in the human intestines. Most of them are based on EM images and serological evidence. However, since most groups couldn't cultivate the viruses and there's some doubt [citations on the way]. 
    - The HECV-4408 coronavirus was isolated from a child having diarrhea [Zhang et al](#zhang94)
#### observed interspecies jumps
* jumps: The bovine coronaviruses have likely jumped to a whole range of hosts: canine, human, wild ruminants, porcine [Bidokhti et al](#bidokhti).
* jumps to humans, also called zoonotic events: MERS, Sars-CoV-1 and OC43 are all jumped from animals to humans [refs in work]. 



<p id='habitat-of-sars-cov-2'>-----</p>

## Habitat of Sars-CoV-2
[will be redone to remove errata and to clarify]<br>
The task determine to habitat of Sars-CoV-2 in humans can be tackled either a [theoretical constraint based reasoning](#constraint-reasoning) or by an [empirical reasoning](#empirical-reasoning) based on observations of Covid-19.

### constraint reasoning
In the following the habitat of Sars-CoV-2 is deduced from the [life cycle](#life-cycle) and its [cell tropism](#cell-tropism). 

#### cell entry and receptor
[in rework/reorder]
The cell entry receptor used by SARS-CoV-1 [[Jiang](#jiang)] and SARS-Cov-2 [[LiF](#lif)],[[Hoffmann](#hoffmann)] is ACE2.

#### orientation matters 
* The barrier function of the apical cell layer against coronavirus virions make an initial aptical entry necessary. 
* In vitro [cell culture to check] experiments from [McCray & Co](#mccray05) show both increased apical ACE2 expression and a corresponding increased cell entry from the apical side. [McCray & Co](#mccray05) also observed that Sars-CoV-1 exits the cell on the apical side following an apical entry with a preference of more than 1000:1. Similarly was observed for the common cold causing coronavirus 229E: It infects the cells, corresponding to its receptor, amino-peptidase N, expression, preferably from the apical surface [[McCray](#mccray)]. 229E exits apically with a preference of 10:1 (about 91%) for an apical entry and 5:1 (about 83%) for a basal entry.    

#### ace2 receptor distribution
[**in rework**]
There are two common methods to measure tissue distribution of proteins:
* ##### antibody staining
    detecting ACE2 using anti-ACE2 antibodies. Detects proteins on cell surfaces. [Timens](#timens), [McCray](#mccray05) 
* ##### measure mrna
    Measure ACE2 [mRNA](#mrna) expression. Necessary condition for a cell to produce a protein. However not sufficient for ACE2 on apical cell surface [to confirm]. The mRNA expression across the human body is shown in  [Li et al](#li).

##### caveats of ace2 detection
[in work, verification needed]
For serving as an entry point, ACE2 should be built into the cell membrane as a receptor i.e. being useable from the outside. So if _both_ of above methods yield positive, this is very likely. Moreover since coronaviruses have a preference for [aptical tissue sites](#tissue-tropism) the ACE2 should be expressed on the apical sites. 
* [Antibody staining](antibody-staining) alone can yield false positives if the cells are not properly cleaned and ACE2 is just attached to the cell without being built into the cell membrane. 
* [Measuring mRNA](#measure-mrna) just detects if the cells produces ace2. But proteins produced by a cell can  
    - stay in the cell i.e. in cytoplasm or more into the nucleus
    - be released from the cell
    - being built into the cell membrane as a receptor on any site. 

ACE2 is apically available 
* in the lower respiratory tract
    - well-differentiated and ciliated airway epithelia [[mcray05](#mccray05)] 
    - alveolar epithelial type 2 cells [to check/find citation].

* in the upper respiratory tract
    - the basal layer of the non-keratinised squamous epithelium of the nasal and oral mucosa and the nasopharynx expresses ACE2 [Timens](#timens), [Lau](#lau). 
    - goblet cells[todo: other cells (goblet) too in rework]


### empirical reasoning
Viral load in combination with the [movements of virions](#movement-of-virions) inside the body can be used to track tissue preferences of Sars-CoV-2. 

#### betacoronavirus type 2 viral load
The viral load observed in different parts of the body are consistent with airborne infection and the tissue distribution of ACE2:
* The only location where _all_ patients had viral Sars-CoV-1 load are the lungs [Farcas et al](#farcas). 
* For MERS-Cov [Memish et al.](#memish) found that both the viral load and the Genome Fraction obtained was higher in the lower respiratory tract (broncho-alveolar lavage fluid, tracheal fluid) than in the upper respiratory tract (nasopharyngeal swab, sputum). The three broncho-alveolar lavage fluid samples investigated, showed the highest average viral load and contained the most complete genome. <br>
Remark: Mers-Cov has a different cell entry receptor (DPP4). However the ability of a virus to efficiently takeover a cell depends not on the cell entry receptor alone (extended explanation in work). This is just a piece of evidence in the overall picture. 

That in swab tests there are viruses in the nose and the mouth can be either caused by replication there or by breathing them up. [Kleinstreuer et al](#kleinstreuer) have shown that upon exhale particles are deposited in the nose. An widespread infection in the upper respiratory tract would likely yield a viral load in the lymph nodes too [to be confirmed, citation needed].  



<p id='evolution-and-adaption'>-----</p>

## Evolution and Adaption
The genetic evolution of coronaviruses is fast compared to other forms of life because:
* a short average generation-time (only a few hours [to be confirmed]) 
* properties of RNA replication. The mechanism of RNA copying [[Woo et al.](#woo)] [more refs coming] is: 
    - RNA-dependent RNA polymerase, which yields a high rate of random point mutations compared to DNA polymerases, which generally have better proofreading capabilities. 
    - a homologous recombination mechanism. 
* Genome is [encoded in RNA and not in DNA](#lifetime-storage) 
* large population size both within hosts and the number of infected hosts (for Sars-CoV-2)

Coronaviruses have large genomes (in comparison to other RNA viruses and messenger RNAs) which both back the mentioned recombinations and encode complex proteins. Coronaviruses can adapt fast to changed or new environments if given time and opportunity.   
[in work]

### conserved patterns
[in work]
Some parts of the coronavirus genome 
* Functional units of proteins. The more fundamental there function is, the more conserved they tend to be.
* Internal proteins of viruses are more difficult to target for the immune system, therefore the corresponding genes have less evolutionary drive to adapt.
* For coronaviruses, the replication mechanism is well conserved and thus the proteins involved.

Examples of well conserved proteins for coronaviruses are:
* RNA viruses need to duplicate their RNA for replication, which requires an RNA-dependent RNA polymerase protein. This protein is well conserved [to check, citation coming]. 
* The coronavirus RNA is packaged with the help of a nucleocapsid protein, usually denoted by N. 

### changing patterns
[in work]



<p id='immune-system'>-------</p>

# Immune System

[in work and incomplete] Selected topics of the immune protection relevant for other parts of [this site](#t-content) are described. 
> The immune system denotes organs and processes that keep the body and metabolism free of unwanted things either by preventing entry or getting rid of them. 

Nearly all forms of life have some immune mechanisms. Even viruses encode proteins to stop the host from interferring with their metabolism: E.g. the host immune system tries to stop the virus metabolism and so the the virus immune system in turn tries the stop the host immune system. 

A lot of completely different immune mechanism have evolved in the different forms of life. Immune mechanism can be classified according to various criteria:
- [protection locations](#protection-locations): local or global
- [immune system mechanism](#immune-system-mechanisms): physical, biological or chemical
- [immune system specificity](#immune-system-specificity): 
    Which and how substances and forms of life are recognized and targeted. 


## protection locations
Immune responses can be global (affecting the entire body), local for some tissue or even inside single cells:
* entire body (e.g. fever, circulating antibodies or the skin)
* tissue specific (e.g. local inflammation, Tissue resident cells e.g. T cells)
* cell intern (intra cellular processes). The oldest form of protection that developed already in prokaryotes.

## immune system mechanisms
[in work and incomplete]
### physical protections
The outer layer of a body i.e. the surface of a body - anything that can be reached while the body is not injured - is called epithelial layer and the cells epithelial cells i.e. the cells on the surface. This layer has often various protections e.g. dead cells (which is the case for the skin) or mucus (which is the case in the respiratory tract). So even if a virion reaches a target host there still many obstacles to reach an exploitable tissue:
* acidic fluids (e.g. stomach acid)
* mucus clearance
* protecting layers: dead cells on the epithelium (e.g. skin)

### chemical part
* change of pH

### biochemical part
* antibodies target specific structures of proteins

## immune system specificity
[in work]
> There are many possible degrees of specificity, the following categories are just a coarse approximation.

* broad e.g.:  
    - skin: keep everything out
    - neutrophil granulocytes: local shutdown of all forms of life
* semi specific e.g.:
    - intracellular processes from eukaryotes targeting single stranded DNA
    - membranes: only permeable for specific substances
* specific:     
    Some of the biological immune mechanisms are specific
    - constant targeting throughout lifetime (can be stored in lifetime storage)
        * RNA pieces silencing mRNAs / other RNAs [to check whether this can't be adapted, probably unused DNA is used produce some silence RNA so the overall possibilities would be constant but what is in used would be adaptable]
    - variable targeting throughout lifetime: [variable immune system](#variable-immune-system)
        
    

#### variable immune system
A collection of immune cells which can target substances which have been learned to be unwanted, where unwanted can mean: 
- foreign substances
- cells that are considered out of order
- things recognized as being harmful. These are often specific parts of proteins. 

##### Examples
* antibodies: bind to specific proteins and thereby inactivate or mark them
* Trained T cells


### adaption of the immune system
The entire immune system adapts the way and strength of protection provided at each location in the body. The immune adaption depends both on the personal history of exposure to pathogens and the one, ones the anchestors have been exposed to (genetic adaption)
* personal history of exposure to antigens experienced to be harmful: E.g. antigens similar the Sars-Cov-2 yields cells capable of producing targeted antibodies
* personal and ancestral exposures yields the overall adaption of both the innate and adaptable immune system



## immune protections against coronaviruses
### prevent target reaching
* physical: 
    - skin <- circumvented by coronaviurses by entering via breathing
    - mucus <- less mucus in the lungs and nasal cavity
    - cell membranes <- bind to receptor and fuse membranes with spikes
* chemical:
    - stomach acid <- cirumvented by coronaviruses by going via blood or replicate to high numbers and hope some virion sneek through when drinking (when drinking fluids usually don't rest in the stomach)
* biological:
    - phagocytize 
    - inactivate with antibodies
### prevent unwanted metabolisms

#### self checks
Self checks of the cells: inside the cells there are various systems to keep to cells metabolism immune

#### extern checks
Cells present what they produce on the outside: T cells inspect these substances and can induce aptosis or ring the bells. In fighting coronaviruses T cells play a key role [citations in work].

##### t cells
T cells are in the blood and locally in tissues. 
T cells play a central role in checking if cells do what they are supposed to do. Virus infected have a changed metabolism and often produce many virions, which can be [detected by T cells](#extern-checks). To control coronaviruses infections T cells are key [citation coming].

> *Tissue resident T cells* or just *local T cells* are T cells which survey the tissues cells integrity. They are located especially at commonly observed entry points of metabolism changing pathogens which mostly are viruses. 




<!--
### protections based on general patterns
[in work]

### protections based on conserved proteins
 [in work]   
 -->

 ## cross immune protections
All form of life on earth share common molecular patterns. The more genetically related the forms, the more genes and corresponding proteins they share. These [common patterns](#conserved-patterns) are possible targets to develop cross protections either by the immune system or artificial medications. 
 
### cross protections observed
*  [Van der Hoek et al.](#vanderhoek2012) observed that some serum conversions against one coronaviruses are not followed by serum conversion against another coronavirus as follows:
    - OC43 -protects-> HKU1 (only unidirectional, both OC43 and HKU1 are betacoronaviruses)
    - NL63 -protects-> 229E (only unidirectional)
* [Han et al](#han) showed that calves innoculated with HECV-4408 get immune protection against the BCoV strain DB2. HECV-4408 is a BCoV strain that has been observed to cause [diarrhea in humans](#human-bcov-infections).


<p id='ideas'> -------</p>

# Ideas to Explore
* [Infection Tropism and Disease Patterns](#disease-pattering)
* [Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs](#litvac2)
* [Early On Prevent Mucus Accumulations](#early-vents)


<p id='origin'>-----</p>

## Backtracking Sars-like

Both the natural habitat of both Sars-CoV-1 and Sars-CoV-2 as of 12.8.20 unclear. The goal of this section is to backtrack the natural habitats of Sars-like viruses. 

### Relevance
* knowing the habitat can help to prevent additional jumps to humans.
* observing the natural habitat provide knowledge to develop medications and treatments. 

<p id='disease-pattering'> -----</p>

## Infection Tropism and Disease Patterns
**[in work]**<br>
### Abstract Diseas Patterns
Coronaviruses can cause infections at different locations and thus induce different diseases: 
* The human endemic coronaviruses (OC43, HKU1, NL63 and E229) cause mainly upper respiratory tract infections.
* The coronaviruses directly emerging from zoonoses from wild/outside animals MERS-CoV and Sars-CoV-1 cause lower respiratory tract infections and frequently spread to the intestine. 

In the case of bovine coronaviruses the same strains can cause different infections. These are recognized as different diseases and until the 90's it hasn't even been clear that both are cause by the same coronavirus since they occur often independent:
* enteric diseases (neonatal calf diarrhea, winter dysentery) 
* respiratory diseases (shipping fever and genral pneunomia). 

For Sars-CoV-2 too, different infection patterns are observed:  Virulent lower respiratory tract infections, similar to Sars-CoV-1 and Mers-CoV and more subtle upper respiratory tract infections similar to the human endemic coronaviruses. These yields the question how these infection are related and under which circumstance which infection pattern occurs:
* What drives and causes the different infection location patterns?
* How to prevent and treat depending on locations?
* Which are complications and risks?
* What immune protections are raised under which circumstances. 

Namely the following hypotheses are discussed:
* Coronavirus can induce distinct infection patterns 
* The infection patterns are the result of and can be predicted by the factors:
    - the virus strain
    - the history of the initial virion[s] i.e. the cell and location they got produced and the physical, chemical and biological factors they have been exposed on their travel
    - the initial infection location
    - the host immune system and its experience with the virus strain
* The pathogenesis, possible complications and the optimal treatment depend on the infection patterns. 

### Infections caused by Human Coronaviruses

##### Abbreviations
- LRI = lower respiratory infection
- URI = upper respiratory infection
- EI = enteric infection

Infection Type| Coronavirus  | Symptoms | Immune_response | possible Complications | Infection Path | Notes
--------------|--------------|----------|---------------|------------------------|---------------|----
URI | NL63, OC43, HKU1, E229, Sars-CoV-2  | Sore throat, upper cough, sneezing | often local response (Tissue resident T cells), sometimes antibodies |  LRI, possibly longer lasting infection, local spread | droplet, aerosol | Immune system in the pharynx is used to viruses => milder symptoms and viruses need capabilities to evade/hide. 
LRI | MERS-CoV, Sars-CoV-1, Sars-CoV-2, (NL63), (OC43) | shortness of breath, fever, dry cough | local T cells if available, else anitbody response, fever, inflammation of lung areas | ARDS which can cause death, viraemia which can cause death, EI| aerosol, dry form | mainly in dry air since in humid air less likely to reach LR, the lung surface is big so lots of space to spread
EI  | Sars-CoV-1, (Sars-CoV-2), MERS-CoV| diarrhoea| local T cell or antibodies | - | through viraemia, through alimentary either by URI or by oral intake| Adequate immune response likely

* The coronaviruses directly emerging from zoonoses from outdoor living animals MERS-CoV and likely  Sars-CoV-1 cause mainly LRI and spread to the intestine. In wild animals this is the [way to spread and survive](#life-cycle-of-virus-entities). 
* The coronaviruses well adapted to our 'modern' way of life with dense population and in indoor rooms mainly infect to upper respiratory tract and ignore the intestine. 

> The origin of Sars-CoV-1 is unclear: Related viruses are found in bats and even more similar in civet cats. However seroprevalence of antibodies in civet cats suggest that Sars-CoV-1 is not endemic to civet cats and thus there was a jump to civet cats around the same time (2002) when Sars-CoV-1 jumped to humans. [citations in work]

> The origin of Sars-CoV-2 is unknown. Considering its tropism, animal farming origin with frequent and even persistent infections of farmers seems possible. Goats or sheeps could be the hosts of the Sars-2 viruses, possibly even of Sars-like in general. That Sars-CoV-2 was discovered  in a live-animal-market goes in line or a least is no contradiction with a farming orign: Rare severe cases in rural areas may not have rung the bells. However severe lung disease cases connected to a live-animal-market, triggered thourough investigations resulting in the discovery of Sars-CoV-2. That there is a capable virology research facility in Wuhan may

> Virus discovery is not easy and requires the right settings. Some of the settings often need to be guessed since the virus in question are unknown. The human coronaviruses HKU1 and NL63 have been discovered only in 2004/5 despite both being endemic for over 50 years and virologists had the (theoretical) possibilities to discover coronaviruses since the 70's. MERS got discovered in 2012 but likely human infections have occured long before. [citations in work] [in consideration/thinking]



### diseases caused by the bovine coronavirus
[raw form coming soon]



### Infections caused by Sars-CoV-2
[in work]<br>
Sars-CoV-2 has been observed to cause
Revisiting the infection types table with focusing on Sars-Cov-2 and zooming the locations.

#### infection locations and immune responses
[in work and partly **estimated/guessed**, citations coming/in search]

Infection Type  | Location | Symptoms | Immune response | Comments and Risks/ possible complications | Infection Path |
----|----|----|----|----|----
URI| Nose (nasal cavity / nasopharynx)| sneezing, loss of smell, headache, red eyes (especially if mask open towards the eyes)  |runny nose (mucus), local T cells or antibodies |  LRI, local spread| aerosol
URI| Mouth (oropharynx) | loss of taste | local T cells|  (LRI), (spread through olfactory route could occur)| droplet, direct contact, (indirect contact)
URI| Throat (laryngopharynx) |sore throat, upper cough | inflammation, local T cells|  LRI| droplet, aerosol
LRI | bronchi | strange feeling in the lungs, shortness of breath, fever, dry cough | anitbodies, fever, inflammation of lung areas | ARDS which can cause death, distribution throughout the lungs, (viraemia)| fine aerosol, dry form 
LRI | alveoli | strange feeling in the lungs, shortness of breath, fever, feeling sick | anitbodies, fever, inflammation of lung areas | ARDS which can cause death, viraemia which can cause death and spread to many organs| fine aerosol, dry form 



#### not infectable locations
Not infecteble since no ACE2 and thus the symptoms from the corresponding location indicate an **agent other** than Sars-2

Infection Type  | Location | Symptoms | Immune response | Comments and Risks/ possible complications | Notes
--------------|--------------|----------|---------------|------------------------|---------------
MRI| Vocal folds | hoarse | - | no ACE2 cells thus no virus replication |
LRI | trachea | cough  | irritation due to virions deposited| [no ACE2 cells](#ace2-receptor-distribution) thus no replication| viral load in sputum due to deposition 


#### Ressources/ Readings
[in work]
> Many concepts in this section are raw ideas and often not 1-1 in literature. A lot of illustrative papers provided observations, inspiration and sometimes similar ideas founding the ideas here.

* ##### Review Epdemiology, Genetic Recombination, and Pathogenesis of Coronaviruses; S Su, Y Bi, G Gao et al
    - Table 1: comparison of the infection caused by the HCoVs 229E, OC43, Sars-CoV, NL63, HKU1, MERS-CoV 
    

* ##### Virological assessment of hospitalized patients with COVID-2019; R Woelfel, C Drosten, C Wendtner et al
    - Figure 2: Viral load kinetics in Swab, Sputum and Stool and seroconversions

* more coming





<p id='litvac2'> -----</p>

## Evidence for Increased Immune Protection against Sars-CoV-2 from Exposure to BCoVs
[Note: this is work in progress]

### Content
* [overview](#overview)
* [relevance](#relevance)
    - epidemiologic(#epidemiologic)
    - medications(#medications)
* [biological basis](#biological-basis)
* [epidemiological evidence](#epidemiological-evidence)
    - [covid-19 in switzerland](#covid-19-in-switzerland)
    - [covid-19 in spain](#covid-19-in-spain)
    - remarks
* [mechanisms of crossprotection](#mechanisms-of-crossprotection)
* [next steps](#next-steps)

### overview
While there are possible explanations for many epidemiological observations of the Sars-2 strains, causing Covid-19, spread in the first months of 2020: spread mainly in absolutely dry and cold air and less spread in warm and humid air. Thus increased spread with increasing latitudes and away from coastal areas. Because cold and dry air likely increases both the [airborne transmission](#dry-form-model) and decreases the [mucus clearance](#decreased-mucus-clearance). Air pollution (-> [decreased mucus clearance](#decreased-mucus-clearance)) and increased public transport (-> increased spread) could contribute to the preference for cities of Sars-CoV-2. However some regional patterns fall through these reasons:
* in Switzerland not only the highest prevalence in severe cases (mild and moderate cases were not admitted to testing and thus not recorded in February/March/April 2020) but also the highest death rates are observed in Geneva (GE) and Ticino (TI), areas which have few cattle farming. On the other hand areas, where cattle farming is widespread across the entire area, seem to have an increased resistance: only a couple of deaths and few cases are recorded in the cantons LU, AI, AR, OW, UW, AG, TG. 
* Spain: In communities where cattle farming is common (Galicia, Basque Country and La Rioja)[to be confirmed], the death rate is lower and the recovery rate higher than in Central Spain. 
* Across the world no Covid-19 hotspot with many severe cases has been observed in regions with a lot of cattle farming. Teheran, Wuhan, Madrid, Mailand and New York are not known as cattle farming regions. 

A possible explanation is that in cattle farming areas bovine coronavirus (BCoV)  are transmitted to humans such that the immune system is trained to fight Betacoronaviruses. Transmissions and the induced build up of some form of resistance could occur regularly or just once as an infant and possibly yield lifelong increased protection. Such an immune protection could explain why some people notice no or only few symptoms. Noteworthy some seniors remain mostly asymptomatic and other seniors experience severe or even fatal Covid-19.

The hypothesis above is possible in theory by the following exemplary observations (described in more detail in [biological basis](#biological-basis)).

Coronavirus infections in humans can elicit immune protection (more precisely no additional serum conversion is observed) to other coronaviruses  [Van der Hoek et al.](#vanderhoek2012):   
   - OC43 -protects-> HKU1 (only unidirectional)
   - NL63 -protects-> 229E (only unidirectional)
    
A bovine coronavirus strain, namely HECV-4408,  was isolated from a child from a rural area in Texas suffering diarrhoea [Zhang et al](#zhang94).

If a cross protection between BCoVs and Sars-CoV-2 exists and if yes how it works remains to be determined. Depending on the mechanism of action it could be used in many ways.


### Relevance 
The relevance depends on the [mechanisms of crossprotection](#mechanisms-of-crossprotection) and how much protection is provided. 
Possible use cases are polyvalent:

#### epidemiological
- knowing that people have an increased immune protections and therefore experience only mild symptoms and possibly have reduced spreading of Sars-CoV-2 is relevant to manage the current Covid-19 pandemic. 
- Serum conversion occurrences: It could be that a different or no seroconversion occurs to people previously exposed to different strains of betacoronaviruses.  

#### medications
Knowledge of cross immune reactions can help to develop medications and even literal vaccines are thinkable vice versa. 
- increase the immune response against Sars-CoV-2 or even provide paths for full immunisation
- even a literal vaccine is thinkable (the long-term pathogenesis of BCoVs needs to be reevaluated first)
- Sars-CoV-2 infections could protect against OC43 or other BCoV infections, which could be more harmful in the long run than Sars-CoV-2


### Evidence from Distribution of Covid-19 
In the following the in country distribution of Covid-19 is described. Since inside countries the testing schemes tend to be more or less uniform ([data specifications](#data-specifications)). Namely the data Switzerland and Spain are used , two countries in which only severe Covid-19 cases have been recorded. <!-- [todo: data wikipedia][in work] -->

#### covid-19 in switzerland
> The following analysis is for the months March and April 2020. In this period only severe Covid-19 cases were tested. Mild and moderate cases were not admitted to testing and thus not recorded in February/March/April 2020.

Incidence rates of both cases and deaths varies a lot between the different regions (Cantons which correspond to states).  
* In areas where cattle farming is prevalent  (AG, LU, AI, SG, FR, NE, ZH, VS, BE, FR, JU etc.), the number of deaths per 100K is about 6 in median and 8 in average (March and April 2020).

> Remark: Cattle farming is very common in many areas in Switzerland due to a long tradition and an accompanying tradition of making a variety of tasty cheeses. Care has been taken to preserve traditional recipes and the microbes used, throughout the industrialization of agriculture in the 20th century. Addionally the market for milk and meat is protected and significantly subsidized. The support is higher than for other forms of agriculture.

> Subjective Remark: I consider distributed agriculture as important and worth preserving. Both subsidies and protected markets are suitable means to support desired industries whether worth preserving or giving space to develop.<br>
Economy solely on global effectiveness trimmed, yields that. But often only that. Question is, in which situations this is wanted. 

* Contrary to areas where cattle are less common the average number of deaths per 100K is about is about 30 in average and 32 in median [more accurate statistics in work].
    Cantons with few cattle farming:
    - GE is a city canton and sourrounded by Lac Lemon and France so less subventions there, 
    - BS is a city canton which has a long urban and trade tradition. In the south there are some forested hills, and in the west France and north east is Germany
    - TI, has a few cattle farming but mostly close to the mountains and away from the cities. The largest city Lugano is surrounded by the Lago di Lugano and forests 
    - VD has cattle farming but most of the population lives around the Lac Lemon, where also the largest city Lausanne is. Lausanne is surrounded mainly by vineyards and forests in the North and Lac Lemon in the South.  
    
The same patterns are observed when considering only cantons with large cities or when considering only uniform language regions: Areas with a lot of cattle farming have lower death rates (both per positive tested cases and per capita):
* Urbanized Areas: ZH, ZG have a lower rates GE, BS
* French Speaking Region: JU, FR, NE and VS have  lower rates both per cases and per population than GE and VD.
* German Speaking Region: TG, AI, SG, LU, AG have lower rates than BS.


#### covid-19 in spain
As in Switzerland the same pattern is observed in Spain:
The cattle rich regions in the North and North East: Galicia, La Rioja, Basque Country have a lower death rate and higher recover rate than Madrid, Valencia, Castile, Catalonia and Leon. As expected from the humid climate in the communities Canary Islands, Melila and Balearic Islands the recover rates are high and the death rates are low compared to central Spain. 

#### Remark
Similar patterns seem to be in the USA and France. For analysis, ideally the partitioning of population is fine-grained to a level of at most a few 100K people per partition. 

### biological basis
[in rework]
First observations of cross immune protections are described. Then examples of host species jumps of betacoronaviruses are described including jumps from BCoV to humans.

#### observed cross immune protections between different coronaviruses
[Cross immune protections](#cross-immune-protection) against coronaviruses have been observed for different strains, therefore cross protections can exists for coronaviruses.
Examples of observed cross immune protections are:
* As already noted in the introduction  [Van der Hoek et al.](#vanderhoek2012) observed by analysing serum conversions (no additional serum conversion occurs):
    - OC43 -protects-> HKU1 (only unidirectional)
    - NL63 -protects-> 229E (only unidirectional)
    
* [Han et al](#han) showed that calves inoculated with HECV-4408get cross-protective immunity against the strain BCoV DB2. HECV-4408 is a strain that has been observed to cause acute diarrhoea in humans, see [human bcov infections](#human-bcov-infections)

#### observed interspecies jumps
 There are many examples where BCoVs jumped species borders, for which at least [interspecies infection](#interspecies-infection) is necessary but likely many occur until one yields a species jump. Frequent enteric coronavirus infections to humans occur(ed) likely but they are not easy to prove [citation coming].
Examples where they have proven or there is strong evidence are:
* The HECV-4408 coronavirus was isolated from a child having diarrhoea in 1994 as described in [Zhang et al](#zhang94)
* OC43 likely was a BCoV jump to humans.


### mechanisms of crossprotection
[in rework]
In the following mechanism of actions are guessed:
* tissue resident T cells distributed through the respiratory tract recognize preserved parts of the initially translated ORFs and induce aptosis in infected cells [citations and argumentation in work 14.7.]. 
* Antibodies against some well preserved parts of proteins. 
    - some extern proteins, which are preserved. The antibodies could either render the viruses uninfectious or acting as opsonins. Candidates:
        * S1
    - non extern proteins presented via MHC 1. The antibodies act as opsonins or are directly receptors of cytotoxic cells.
        * N

* combination of tissue resident T cells and antibodies marking infected cells. 
     

previous guesses, likely false:
* Epigenetic adaption of alveolar macrophages [netea](#netea), [xing](#xing)
     
     
### next steps
* Analyse spread patterns in other countries: USA, France, ...
* Widespread serology for HCoVs and statistics if there's a relation to pathogenesis of Covid-19. 
* Analyse birth and grow up locations of elderly Covid-19 patients.
* figuring out whether BCoVs genetically cross/combine with other HCoVs. This could yield new strains with altered and possibly more severe pathogenesis. 
     

    
<p id='early-vents'> -----</p>
    
## Early On Prevent Mucus Accumulations 

### Subsections
* Overview
* Reverse Cascade - From ARDS to Decreased Mucus Flow
* Ideas to Decrease Virus Distribution
* Appendix for Early On Ventilators

### Overview
For the development of a virus-induced ARDS, a decreased mucus clearance seems to be a key factor; shown in the case of influenza induced ARDS by [Yuen et al](#yuen). The idea is to increase the clearance by increasing the mucus flow. The following observations suggest that the mucus flow is increased by humidified air:
- [Hong and colleagues](#hong) found that the mucus flow increases when using humidified air for ventilation. 
- [Hasani et al.](#hasani) found the same by humidifying the air in the entire room. 

That humid air increases the mucus flow, can be used as described or in other settings e.g. a stand-alone heated humidifier. 

Moreover, breath-support-devices can modify the distribution and spread of viruses in the lungs because of altered movement of the lungs and thus altered movement of air. The altered spread should be considered. 

#### cascade of influences
Increase humidity of inhaled air --> Increases the mucus clearance --> Decrease the viral load in the lower respiratory tract --> Increase the well-being and the overall prognosis
 
#### Causes for severe Outcome of Covid-19
A main complication of a severe Covid-19 and possible death cause is acute respiratory distress syndrome (ARDS) see e.g. findings from [Song and colleagues](#song). 

#### mucus hypothesis 
The reason for developing ADRS both for Covid-19 and influenza seems to be a delayed mucus clearance of viruses. This yields a high number of viruses distributed across the entire lungs.


### Reverse Cascade of Evidences
In the following evidence is shown in reverse order for the [cascade of influences](#cascade-of-influences).  The cascade reversed:
* ARDS is caused by widespread virus distribution [how: work in progress]
* widespread virus distribution is caused by a decreased mucociliary clearance and increased distribution from locations of infected cells-
* decreased mucus clearance is caused by dry air, hypertension, diabetes

#### evidence for widespread virus distribution
- In most severe cases (especially, where ADRS is observed and mechanical ventilation is needed) the images show _bilateral_ lung lesions/patches [Bhatraju et al.](#bhatraju),[Zhong et al.](#zhong).
- [Yuen et al](#yuen) found high late viral load for patients with an ARDS . 

#### causes of widespread virus distribution
For the widespread viral load distribution in the lower respiratory tract, possible reasons are:

- [increased replication](#increased-replication)
- [increased distribution across the lungs](#increased-distribution) 
- [decreased mucus clearance](#decreased-mucus-clearance)


##### increased replication?
likely NO since:<br>
[in rework]
There isn't much evidence for an higher replication rate of Sars-CoV-2 in ARDS risk group compared to hospitalized cases which don't develop ARDS. For people with only mild symptoms (especially children) early immune systeme responses possibly limit the viral replication [in work]. There is limited data available comparing the viral load kinetics of people with mild symptoms [in rework: new studies suggest similar viral loads]. In the following the focus is on hospitalized cases. 

- data suggest no strong correlation between a diminished immune system and severe Covid-19 (see e.g. [zhong](#zhong))
- patients with ADRS seem not to have especially low antibody levels as results obtained by [To, Tsang et al.](#to_tsang) indicate. 
- data by [To, Tsang et al.](#to_tsang),[Yuen et al.](#yuen) suggest that an early high viral load is no clear indication for developing an ARDS.
- in young people the cell machinery tends to be more performant. So in theory viruses could spread more quickly. However their immune systeme is also more quick to react.

<!--todo: immune reaction -->

##### increased distribution?
likely NO since:<br>
The Sars-CoV-2 entry ACE2 is expressed in large quantities in alveolar type 2 cells. From these locations, many particles are exhaled upon deep breathing [[Larsson](#larsson)], which could yield increased spreading both inside and outside. Thus to some extent the virus distribution depends on breathing patterns and so active people would be more at risk. Overall evidence is not strong that the widespread virus spread is solely caused by increased distribution.  

##### decreased mucus clearance?
likely YES since:<br>
* observed for influenza by [Yuen et al](#yuen)
* Factors known to decrease the mucus clearance are major risk factors for developing ARDS, both for influenza and Covid-19. For more detail on factors see [appendix](#appendix-vents):
    * intern factors
        - age
        - obesity
        - diabetes
        - hypertension
        - smoking history
        - air pollution history (likely a risk factor for ARDS since most deaths are in larger cities. A decreased clearance has been shown for a variety of pollutants.)
    * extern factors
         - dry air 
             * humidified air increases mucus transport [Hong](#hong), [Hasani](#hasani)
             * generally fare fewer deaths and a lower death-rate in humid air countries, see [death rates](#death-rates). Rough estimate 0.2 % in humide air countries. Dry air countries are more difficult to estimate since treatment likely is much more relevant, see [methods](#increase-the-mucus-flow). 
             * For greyhounds under anesthesia, breathing air at 37 °C, a decrease in the tracheal mucus flow was observed if the relative humidity was decreased below 50% [[Forbes](#forbes)].
* Virus RNA early on in the alimentary seems not to be an indication for ARDS even though this indicates a high overall viral load:
    * there's indication that patients with early detection of viruses in stool, do not have worse outcome [case-series-france](#case-series-france)
    *  diarrhea is not risk for ADRS in influenza [Yuen](#yuen). 
    * increased nausea or vomiting seem to be no indication for a severe disease outcome [Zhong](#zhong)(despite these indicating higher a viral load in the stomach, so viruses are just better cleared to the alimentary). However vomiting a slight indication for ADRS in influenza [Yuen](#yuen).


### Ideas to Decrease Virus Distribution [in work]

#### new methods ideally are  
- thought through by a variety specialists from different fields
- simulated
- tightly supervised, observed and recorded
- published, including raw data

__Note__:
These are unchecked proposals and should be carefully supervised. Ideally methods are __first simulated__, e.g. by methods described in the section [Particle Dynamics in Respiratory Tract](#particles). Anything that alters the natural airflow and thus possibly the distribution of viruses could cause irritations and infections in new locations. Methods likely doing this (e.g. High Flow Therapy) will not be further discussed here. <!-- todo add ref-->
 
#### increase the mucus flow
Increase the mucus flow and clearance by increasing the humidity [Hong](#hong), [Hasani](#hasani)
This prevents the accumulation of viral loaded and dry mucus early on. This in turn should both increase the well-being as well as the overall prognosis. 

__Caution__: If there are already a lot of (dry) mucus accumulations, liquefying them could yield a likely __temporary but possibly dangereous__ increased distribution of virus parts and therefore an additional inflammation/irritation. While immune suppresive are generally discouraged, because they could yield a diminished immune reaction and possibly yield prolonged virus spread, in this situation they can be appropriate. 

* heated humidifiers in combination with a ventilator as described by [Hong et al. in 2014](#hong) i.e. in the way in which many pneumomia patients around the world receive successful treatment. 
    __Benefit__: This increases both the [humidity](#hong) and also decreases the spread of particles from the alveoli as observed by  [Lindstedt and colleagues](#lindstedt). __Risk__: general risks of invasive ventilation, temporary irritation due to liquefying of mucus. 

* a heated humidifier stand-alone i.e. as above but with no ventilator. __Benefit__: Increase humidity and thus mucus flow and easy to use with an oxygen mask. __Risk__: temporary irritation due to liquefying of mucus.
 
* Increasing the humidity in the entire room, increases the mucus flow too, as shown by [Hasani and colleagues](#hasani). __Benefit__: Simple use and a slight increase in mucus flow.  __Risk__: Some irritation due to liquefying can be possible. "Well tested" in tropical clima zones around the world.  

* Steam inhalation in the traditional way with a pot of hot water and a towel can help too. 
Careful handling: 
    - The steam inhaled should not be very hot, so some distance to the hot water is required. 
    - Start carefully and see how the body reacts
    - Use in early phase/not severe cases only since the steam may further irritate the mucous membranes.
    - Careful handling of the hot pot: A solid stand/table is recommended.

    __Benefit__: Simple use and a temporary increase in mucus flow. __Risk__:  If handled carefully the risks should be little. Irritation due to liquefying the mucus or because to hot steam is inhaled is possible.
    
#### reduce the spread of viruses    
reduce spread -> reduce opening and closing of alveoli i.e. deep breathing [[Larsson](#larsson)][to be confirmed and checked how relevant this is for pathogenesis][simulate first what happens]
- patients should breath as calm as possible
- slightly increased pressure may reduce opening and closing of alveoli [to be confirmed]
- ventilators possibly reduce the spread of particles [[Lindstedt and colleagues](#lindstedt)]
  
 




<!--
#### Mechanical Ventilators
Mechanically ventilated patients exhale less particles: "Mechanically ventilated patients exhibit decreased particle flow in exhaled breath as compared to normal breathing patients" by [Lindstedt and colleagues](#lindstedt). That has to be taken into account. 
[work in progress: To be investigated: it could mean that they shed less viruses and less viruses are distributed throughout the lungs or it could mean that more viruses stay in the lungs since there is less clearance. ]
-->


<p id="appendix-vents">---</p>

### Appendix for Early On Ventilators
Just indications are listened and no statistical testing has been done. Some times correlations have been determined in the papers given as sources. Ideally the statistics takes into account correlations between the various factors too; e.g. there is likely a correlation between age and chronic heart disease]. [todo: math, check dependence between observables][todo: add average for entire populations as comparison]


#### Factors Associated to severe Covid-19:

* [Zhong et al.](#zhong) noted characteristics of hospital admitted Covid-19 patients which are grouped into mild, severe and fatal cases. 
The numbers in parenthesis are observation rates in % of (fatal cases, severe cases(including fatal), mild hospitalized)

    strong relation:
    - Chronic obstructive pulmonary disease (10.4 vs 3.5 vs 0.6)
    - Diabetes (27 v 16 vs 5.7)
    - Hypertension (36 vs 23.7 vs 13.4)
    - Coronary heart disease (9 vs 6 vs 2)
    - (Cerebrovascular disease)

    weak relation:
    - cancer (1.5 vs 1.7 vs 0.8)
    - chronic renal disease (3 vs 2 vs 0.5)

    very weak/no relation:
    - immunodeficiency (0 vs 0 vs 0.2)


* [Bhatraju et al.](#bhatraju) noted characteristics of Covid-19 patients from the Seattle-area with ARDS.

    strong relation:
    - Diabetes 58%
    - high body mass index (33.2±7.2)
    - Age (64±18 (23–97))

    weak relation:
    - former/current smoker 22%
    - asthma 14%

* In Italy [Onder et al.](#onder) analysed a subsample of 355 patients with COVID-19 who died in Italy: 

    strong relation:
    * mean age was 79.5 years (SD, 8.1) 
    * 117 patients (30%) had ischaemic heart disease
    * 126 (35.5%) had diabetes
    * 72 (20.3%) had active cancer
    * 87 (24.5%) had atrial fibrillation

    some relation:
    * 24 (6.8%) had dementia
    * 34 (9.6%) had a history of stroke

* The Covid-19 fatality rates are higher in cities and especially in cities which are not known for very clean air. Many Covid-19 related deaths are recorded in: Madrid, Milano, Teheran, New York and Wuhan [citation to be added]. According to findings from [Wolff](#wolff) dirty air can reduce the mucus clearance in various ways. 

<p id='influenza'></p>
    
#### Factors Associated with ADRS in Influenza    
The following characteristics are observed in the  [paper from Yuen et al.](#yuen):
- For patient developing a ARDS coughing was more common than for patients, who didn't develop an ARDS. Since coughing is an emergency measure of the body to clear respiratory tract this an indication of bad clearance. 
- The Nasopharyngeal Viral load was even a little higher in the group, who didn't develop an ARDS.
- The tracheal viral load was much higher in the ARDS groups (less clearance!)
- Diabetis, Age, Chronic hear disease positively correlate with ARDS development. 
    


    
#### factors influencing the mucus flow

* [Nakagawa et al.](#nakagawa) found that "Ageing, Diabetes, and Hypertension Are Associated With Decreased Nasal Mucociliary Clearance". The mechanisms of mucus production in the nose are likely similar to those in the trachea and therefore similar associations are expected [to be confirmed]. 

* In the review from [Houtmeyers et al.](#houtmeyers) "Regulation of mucociliary clearance in health and disease" has references to findings which indicate a decreased mucus flow and ciliary activity with age. 

* Dry Air especially below 50% relative humidity decreases the mucus flow in the trachea. Observed by [Forbes](#forbes)  for greyhounds under barbiturate anaesthesia breathing air at 37 °C.

* [Leopold et al.](#leopold-mahony-lian) observed smoking-associated shorter airway epithelial cilia which, according to their argumentation, yields a decreased mucus flow (described in the section "Implications of Reduction of Cilia Length on Mucociliary Clearance"). 

* In his review on ["Effects of Airborne Pollutants on Mucociliary Clearance"](#wolff)  Ronald K. Wolff summarizes "A variety of pollutants have been shown to impair mucociliary clearance following acute or subchronic exposures." 



#### humidity related death rates

* Around the world fewer deaths per capita in humid air countries indicating a lower death-rate. There is a lower death-rate in Singapore/Kuwait/Qatar/Isreal than in Island/Norway, countries which all have a good health care system and do widespread testing ([data specifications](#data-specifications)). 
    - __Remark__: Norway and Isreal probably get half of the cases tested positive, so the death rate should be divided by 2. 
    - __Remark__: Mucus clearance may not be the only reason for lower death rates in humid air, but also that [Dry Form Infection](#abstract) and aerosol infection is less likely and therefore Covid-19 starts more in the upper respiratory tract than in the bronchi or alveolis. 

* In a analysis ["Effects of temperature variation and humidity on the death of COVID-19 in Wuhan, China"](#luo) Luo et al. find a correlation in a time series analysis between a decreased humidity and and increased death rates (which likely corresponds to lowering the ARDS risk). The argumentation given here provides a possible explanation for their findings. The analysis depends however, on how accurate and consistent the analysed data are. In nearly all heavy hit regions around the world, the priority was and is and should be to save lives and not to count accurately. Remark: To recent news, the deaths published in Wuhan were those  in hospitals and not the total number of deaths. In this case the data is consistent and the treatment schemes tend to be more uniform for people in hospitals, so to analyse to impact of humidity this data is suited for analysis ([data specifications](#data specifications)). 



<p id="transmission-models">--------</p>

# Transmission of Betacoronaviruses with Focus on Sars-CoV-2 and a Proposed Dry Form Transmission 

<p id="abstract-transmissions">-----</p>

## Abstract Proposed Dry Form Transmission
[in rework]
A dry form transmission model for Betacoronaviruses is proposed. It is known that Sars-CoV-1 has the unusual ability for viruses to survive in dry form, this makes a dry form transmission possible and also likely to occur since evolutionary drive is needed to develop this ability.
The transmission models described in the literature - a recent recommended review is [Herfst](#herfst) - for viruses are:
* Contact (direct and indirect via fomites)
* [Droplets](#droplet)
* [Aerosols](#aerosol)

this new model is added:
* Dry form transmission 

Compared to aerosols - which tend to spread local both in time and space, an example is the scent of a freshly cooked soup -, tiny dry particulates behave dust/smoke like - smoke is a collection of tiny dry particulates diffusing around - so they move with the air and stay in the air even longer. Dry particulates have a potentially more infectious lung deposition and less clearance. 

It is argued 
* the described properties of dry form transmission explain well the observed transmission patterns for Sars-CoV-1/2. 
* the entry receptor of Sars-CoV-1/2 (ACE2) distribution in body tissues and the observed viral load in different organs indicate that Sars-CoV-1/2 has the lower respiratory tract as the main entry point.  Particle deposition at inhalation, which shows that mainly aerosols and dry particulates are entering the lower respiratory tract, suggests that these two are the main transmitters of  Sars-CoV-1/2. Viral load in the pharynx can be attributed to deposition of particles upon exhalation. 

Overall the argumentation provides evidence, that the most relevant transmission models are aerosol and the proposed dry form. 

Based on the aerosol and dry form transmission models, expected spread patterns are discussed and the smoke-like transmission metaphor.  Measures for controlling the Sars-CoV-2 transmission are outlined. Key is ventilation of indoor spaces and wearing a mask in risky indoor spaces. 

<p id="airborne-transmission">-----</p>

## Airborne Transmission 
[in work]
    
### Objects in the Air
The movement of an object in the air depends on the ratio of its surface divided by its volume.
<!--

    a = g * E_d + v^2 * k/r * (S_p/V) * E_-v 
    
where a=acceleration; g=gravity (9.81m/s^2); k=constant depending on form of object; r=density of the objet; S_p = surface perpindicular to v; v=movement relative to sourounding air; V=volume; E_d = unit vector pointing downwards; E_-v = unitvector pointing in -v direction

-->
* ##### small ratio => gravity and initial movement 
    heavy object and small surface: the acceleration is the gravity which points downwards and the horizontal movement stays constant: Examples are heavy balls in sports, rain droplets or snowballs. 
* ##### large ratio => go with the air
    light objects with large surfaces: the movement goes with the airflow since the air resistance is big compared to the weight i.e. they are carried by the winds. Feathers, dust particles and dry snowflakes are examples.

Of course any movement form inbetween exists too: Footballs and tennis balls have quite a large surfaces compared to their weight, so strong winds influences their movement. Even a larger ratio have table tennis balls. Golf balls on the other hand are less subject to the wind compared to table tennis balls.

##### smaller size => larger ratio
Since the volume increases in cubic and the surface only in square:
* Large objects tend to have small ratios
* Small objects tend to have large ratios

Tiny objects have very large ratios and thus go with the wind. An example is flour: a whole pack of flour behaves ball like, while the single flour particles fly in the air. This is the case too for very small water droplets that can't seen as single particles: They move with airflow. Since they can't be seen as single particles, they look like dissolved in the air and thus are called aerosols.

##### droplet or aerosol
> <span id='aerosol'> An *aerosol* is a collection of tiny droplets with a diameter smaller than 5 micro meter. Aerosol comes from Greek aero=air and sol=solvent, since tiny droplet can't be seen and thus look like dissolved in the air. However an aerosol is a bunch of heaps of water molecules possibly including some other materials e.g. virions. Thus an aerosol is not actually dissolved but just behaves like regarding visibility for our eyes and movement.</span>

The larger droplets keep their name and are just called droplets:
> <span id='droplet'>*Droplets* in the context of transmission models denote watery particles with a diameter greater equal 5 micro meter. </span>

> // The change both of movement and visibility is contineous and not digital as the classification border of 5 micro meter suggests. That water droplets fade from visibility and start flying when getting as small as a couple of milimeters is a coincidence. At least there is no obvious causal connection.  

##### drier & smaller => larger ratio 
The spherical form yields the smallest surface for a fixed volume. Thus round objects have smaller ratios surface/volume than non round objects. Watery particles tend to have a minimal surface and are roundish, thus the ratio of surface/volume tend to smaller than of the dry particles. E.g. dry leafs, feathers, flour and dust ... all go with the wind. 


### overview airborne transmission
Watery droplets in the air that cannot be seen, are called aerosol since it looks dissolved in the air. The main reason the distinction between droplets and aerosols is driving forces of their movement: droplet behave like heavy balls but aerosols mostly move with the air. Tiny and dry particles always go with the air. 


Key aspects of the airborne transmission in table form; for details on Actions and Sources in [Particles in the Respiratory Tract](#particles) and on masks in [Protection Measures](#protection-measures). [citations in work  ]

Model    | Metaphor   | Actions | Source | Situations/Clima|   Prevent              
---------|------------|-----------------|------------|------|---
[droplet](#droplet)  | bad breath, cone of a spray |  coughing, sneezing, shouting| mouth, pharynx| any | Any mask in face-to-face situations, distance 
[aerosol](#aerosol)  | reek of alcohol, scent of parfum, cooking smells | Speaking, breathing, droplets drying out| central lungs (trachea, bronchi), nose | cool and low absolute humdity but not very dry| (dense-)mask in face-to-face situations and crowded or heated rooms, distance, ventilate
[dry form](#dry-form-model) | soot of smoke, dust   | breathing (opening and closing of the deep lungs), drying of aerosols| deep lungs (alveolis)  | dry (low relative humidity) e.g. indoor heated| (dense-)mask in heated and (crowded) indoor rooms, ventilate



<p id="dry-form-model">-----</p>

## Dry Form Transmission Model
[in rework]<br>
In the following, the proposed model of dry form transmission is explained. The virus is attached to dry particulates or even just as a single particle. These dry particles dust like fly around or in the case of tiny particulates diffuse smoke like around. 

In their very illustrative paper [Chan et al.](#chan) show that the Sars-CoV-1 keeps its infectiousness in dry form, so dry form infection is possible in theory.

The newly proposed infection:
* Dry particulates in air -> Lung

where Dry Particulate is a small particulate with one or more viruses attached or possibly viruses attached to each other. 

The above infection pathway is in addition to the known aerosol/droplet pathways:
* Aerosol with virus in air -> Respiratory Tract
* Droplet with virus in air -> Respiratory Tract

Aerosols containing particulates and dry particulates can convert to each other in the air:

* Dry Particulates -> Small Aerosol containing a Particulate (more likely in humid air, particulates act as condensation nuclei)
* Dry Particulates <- Small Aerosol containing a Particulate (more likely in dry air)

and smaller aerosol can convert to larger (see e.g. Figure 3 (C) and (D) in [marr](#marr)): 
* Small Aerosol <-> Large Aerosol/Droplets (in dry air equilibrium tends to the left, in humid to the right)


The larger tend to fall to the ground since their movement is driven more by gravity (described for example in [tellier](#tellier)). 

### Sources
Infectious aerosols can get into the air from the lower or upper respiratory tract through breathing, coughing or speaking (section [exhaling particles](#particles-spreading). Remark: Viral load in the upper respiratory tract can be caused by [depositions](#particles-deposition) of viruses upon exhalation. So Covid-19 swab test in the pharynx just detect that there are viruses replicating somewhere in the respiratory tract. 

Dry particulates get into the air either by the above conversion from aerosols, probably directly from an infected lung [to be searched/calculated if this is possible, work in progress] or from dirt. Dirt can be from sedimented air particles or from faeces. [to check: vacuum cleaner particle filter size].  [to be checked if dirt is/can be relevant and what kind of dirt]

<!--todo deposition of particles with dry form, short summary-->


<!--

* (A) source -> aerosol  -> target<br>
* (B) source -> aerosol  --dry-air-> dry particulate -> target
* (C) source -> dry particulate -> target
* (D) source -> dry particulate --humid-air-> aerosol  -> target

##### where Target
* target = lung for a,b,c  for infection

##### and Source
* source = lung for a,b
* source = faeces [evidence from ] and possibly the lung (calculations are on the way whether the relative humidity in the lung can be low enough)
* source can also be indirect. However one has to keep in mind that for the probability to be in two digit percentages there need to be many infectious particulates in the air. 

-->

<!--
[in work 2.8.]
## Transmission of Betacoronaviruses
This yields a different transmission pattern than the aerosol [[Tellier](#tellier)], which is however still a relevant transmission pathway. The droplet model is likely to be less relevant, since the Sars-CoV-2 [infects primarily cells in the lower respiratory tract entry](#habitat-of-sars-cov-2) and [only small particulates reach the deep lungs](#particles).-->



<p id="particles">-----</p>

## Intermezzo: Particle Dynamics in the Respiratory Tract

Conversational remarks about how I understand particle deposition models. 

Particle deposition and clearance are relevant for Covid-19 in view of:
* infection pathway
* spread within the lower respiratory tract (pathogenesis)
* spread to the pharynx (swab test and transmission)
* spread out of the body (transmission)
* depositions of medicaments for the treatment

### particles spreading

This section describes when particles are exhaled and how they spread out within the respiratory tract. 
* Larger particles i.e. droplet are mostly spread at coughing and speaking. Coughing yields mostly particles from the upper respiratory tract. 

* Small particles from the lower respiratory tract (<1 micro meter) are spread with breathing alone and not when speaking or coughing. [Larsson et al](#larsson) found this by identifying the origins of particles from the lipid composition. 

* [fabian et al](#fabian) found that the number of particles exhaled is very individual. Differences greater than a factor of 500 were observed. A tendency for a positive correlation with age was observed. 

* [milton et al](#milton2018) observed that the aerosol amount exhaled correlated both with coughing and BMI. Coughing correlated with RNA shedding. However, without coughs, there are small infectious aerosols exhaled too. 

So Covid-19 can be spread with breathing alone especially since in the deep lungs there are many receptors for Sars-CoV-2.  


### particles deposition

This section describes how particles are deposited in the respiratory tract. These particles can originate from other locations in the respiratory tract or being inhaled from extern air.

##### deposition factors
How many particles are deposited/breath out in which region in/from the respiratory tract depends on various factors ([park et al](#park) have recently written a review).
- particles properties such as diameter, density, form (see [sturm](#sturm)) and material([zhong18](#zhong18)], [varghese](#varghese))
    * Droplets mostly don't enter the lower respiratory tract.
    * Small Aerosols can enter the lower respiratory tract. But at a size of at least 0.1 μm they are not well deposited (the Sars-CoV-2 diameter is between 50 and 200 nm) and larger aerosols don't enter deep or are well cleared out [to be confirmed and citation to be added]. 
    * Tiny, dry and sticky (Spike-Glycoprotein) particulates may have a higher deposition rate on the lung alveolar epithelial cells and less clearance [to be confirmed and citation to be added, work in progress].
- breathing volume and frequency [hofemeier](#hofemeier)
- air humidity and how much the air is moistened in the lung. E.g. described in [zhong18](#zhong18), [varghese](#varghese)]
- orientation respect to gravity i.e. wether horizontal or vertical
 

##### deposition locations
The physiology of the airways is such that particles are absorbed and cleared out as early as possible and the heavier the earlier [Stuart](#stuart), [Balley](#bailey), [Kleinstreuer](#kleinstreuer).
* Locations of particles depositions for different sizes both a inhale and exhale are shown in [Kleinstreuer et al](#kleinstreuer) on page 23 are used: "Fig. 6. Particle deposition in human nasopharyngeal model: (a) nasopharyngeal; (b) tracheal; (c) generation 1; (d) generation 2; and (e) generation 3". Especially noteworthy is that upon exhale many particles are deposited in the pharynx (which is relevant for swab tests). 
* [Zhong](#zhong) et al describe that the particles can be moistened upon inhale and this has an effect on depositions locations. Similarly observed by [Varghese and Gangamma, Figure 4](#varghese): The alveolar deposition of soluble matter (shown for salt NaCl) between 250 nm and 1000 nm is increased by the particle growth due to moistening in the lungs. In Figure 7 the simulated effect of particle growth on total deposition is compared to measurements in experiments. 
* The particles depositions aren't equal for the left and right lung and bronchus [Rahimi-Gorji](#rahimi-gorji), [kleinstreuer2017](#kleinstreuer2017)
* Particle deposition in the alveolar regions can be greatly increased upon deep inhaling [hofemeier](#hofemeier).
* [Sturm](#sturm) simulated the deposition of  non-spherical particles particles. The form factor showed to matter most for larger particles in the size of 10 micro meter. Fibers in that size were deposited early on, where as disks showed the highest deposition rate in the airway generations 20 to 25. 

### particles clearance
[in work]

#### Methods of Clearance
* clearance by mucus flow towards the alimentary system
* coughing
* clearance by macrophages in the epithelium and in the mucus[to check]
* absorption in the alveoli and clearance in the blood stream by immune system cells (e.g. macrophages)


##### factors influencing clearance
* well flowing mucus (see [factors increasing the mucus flow](#factors-influencing-the-mucus-flow))
* the earlier deposited the better is the mucus clearance
* particle properties such as material (bad clearance for insoluble in the lungs), form, size

### simulation methods and experiments

In her thesis [Lindstrom](#lindstrom) explains well the principles. A recent review is from [Park and colleagues](#park).<br>
> Modeling or experimentally determine the deposition rates is not easy and both simulation and experimental methods have caveats as described below . 

#### Simulations
An often used model is the [ICRP Model](#bailey). Recent approaches model the respiratory tract accurately in 3D and make use of advances in computational fluid dynamics. In this work mainly [kleinstreuer](#kleinstreuer) is used, other simulation models are [qi](#qi), [rahimi-gorji](#rahimi-gorji), [zhong18](#zhong18).

Traditional methods: Model the respiratory tract as a static pipe system and do the physics [Stuart 84](#stuart),  [ICRP by Bailey](#bailey). These methods yield some differential equations. These equations are often solved/simulated with a computer-based approach e.g. Monte Carlo methods. 

The airflow in the lung has variations and is complicated [Tsuda](#tsuda), [Bailey](#bailey). Often good agreement for modeling methods compared to in vivo measurements are achieved, however many estimates for parameters have to be taken and thus overfitting could occur. Additionally many simplifications of relevant [particles deposition](#particles-deposition) both for respiratory tract and particles are taken: Most modeling methods ignore the softness and dynamics of the respiratory system, except a few see [darquenne](#darquenne). Particle shape(taken into account in [sturm](#sturm)), condensation and material (both discussed in [Zhong18](#zhong18)) are mostly ignored, i.e. the simulations are done for round constant size aerosol droplets.


#### Experiments

- Experimental in vitro setting: Build an artificial lung and measure: [sznitman](#sznitman). 
- Experimental in vivo settings:
    * A person inhales aerosols and the deposited fraction is measured. Recent experiments are done by [Rissler et al](#rissler).
    * A person inhales some test particles and the number of absorbed particles is measured for different volumes inhaled. For small volumes, the air goes not fare into to lung and so for this part the absorption is calculated. Then the volume is increased, the adsorbed particles measured again and the next part of the lung is calculated: the previous result is subtracted and the remaining adsorption is the next deeper lung part  [reference to be added].
    * Experimental data on the regional deposition of radio-labelled aerosol particles can be derived from gamma camera images.  The limited resolution of the planar image allows no separation between the peripheral and the bronchial airways. This separation can be done by measuring the particle clearance kinetics during the first few days after inhalation[reference to be added].
    
   

<p id="evidence">-----</p>

## Evidence for the Dry Form Transmission Model

<p id="biological-properties">---</p>

### Evidence from Biological Properties

From the [Habitat of the Betacoronavirus](#habitat) lower respiratory tract entry for Sars-CoV-1 and MERS is obligate for infection. For Sars-CoV-2 lower respiratory tract entry is likely for patients developing ARDS. As described in [particles deposition](#particles-deposition) only aerosols and tiny dry particulates enter the lower respiratory tract. So the two primary transmission forms are aerosol and dry form. Since aerosols usually are cleared quite well with the mucus flow, the dry form is likely more infectious. 


<p id="spread-patterns">---</p>
    
### Evidence from the observed Spread Patterns

The droplet transmission explains well the observed spread patterns of influenza. Dust like spreading is explaining better following observations for the observed Betacoronaviruses spread patterns than the droplet models:

[in work: correct that aerosol but not the droplet models could partly explain observed spread patterns]
In confined settings without special protection reproduction numbers well above the number of close contacts a person has, have been observed [Mizumoto](#mizumoto). Which is not very likely to observe with the droplet transmission model. Since the movement of aerosols is affected by gravitation and therefore their concentration in the air quite rapidly decreases (see [model](#model) section). The movement of dry dust, on the other hand, is less affected by gravity which yields longer remaining in the air. The events of very high spreading have all been observed in cool outside temperature and heated indoor spaces which means dry and confined air. In theses settings dry dust like spreading is possible:

* Sars-CoV-1:
	- Hospitals in China [Mizumoto](#mizumoto)
    -  Long-Term Care Facility in Seattle [Honein et al](#honein)
	- Hotel in Hong Kong, especially during cooler outside temperatures [Lin](#lin), [Chan](#chan)


* Sars-CoV-2:
	- Diamond Princess Cruise Ship in Japan [Mizumoto](#mizumoto). This setting well investigated by Mizumoto and colleagues. Observations:
        * Covid-19 spread started between passengers and not equally between passengers and personal.
        * very high peak values of the reproduction number are observed (over 10)
        
        The observations favour long range but same room transmission (aerosol and dry form transmission) over droplet transmission and slighly indicate dry form transmission:
        * In the droplet model, one would except the personal as a angle and starting point, since they have the most short range contacts, which enable droplet transmission. 
        * In the aerosol model about an equal spread would be expected. Experience from cooking smells teaches us, that aerosols tend to spread out locally.
        * Smoke diffuses entire rooms and tends to stay quite long, so spending much time in the same confined rooms is more relevant than interactions or being close but only for a short period. Therefor an initial spread in passengers is expected since they spend the time in the same areas. 
	- Music Club in Japan (see Introduction [Mizumoto](#mizumoto))
	- Church in Korea (see Introduction [Mizumoto](#mizumoto))
	- Hospitals in Nothern Italy [LE](#le)

* SARS 1 & 2: 
    In settings without prior SARS experience the infection rate in health care workers is very high:
	* 2003 in South East Asia  (see Introduction [Mizumoto](#mizumoto))
	* 2019/2020 in Europe - Italy especially [LE](#le)<br>
	
	Possible Explanation: The medical staff is used to protect against fomite and droplet transmission and to some extent versus aerosol transmission and know to handle them. However, they are not yet used to the new spreading pattern. Consequently in all rooms of the building wearing a mask likely is key in reducing the infection rates (many cities in China reported few infections in hospitals [citations to be added]).

* Mers-Cov:
	Main spreading in Winter season and in generally dry areas.
The primary spreading in very dry (indoor) areas would also explain why the described coronaviruses diseases occurred recently, even though overall hygiene increased.  


    
    
    
#### Further evidences

Remark: The following pieces of evidence are 'in work'. 

* In humid and warm temperature environments (above 30 degrees), there are no known events of a step increase in death numbers. [Chan](#chan) shows that warm temperatures of 33 Celsius and high relative don't yield a much faster rate of inactivation; temperatures over 38 degrees do induce a much faster inactivation [11]. A possible explanation why in humid conditions around 33 degrees there no super-spreading events observed is: In humid environments, organic particles act as condensation nuclei and therefore loose their dry form. So viruses "find" themselves within aerosols. In this case, an aerosol like spreading pattern with no super-spreading events would be expected. 

* The initial animal to human of  Sars-CoV-2 occurred in a setting of cold outside temperature and therefore dry indoor air, namely likely in the Wuhan Sea Food market. Pictures of the market suggest that the market is partly indoor and therefore likely heated. Similar transmission settings from animal to human have been likely the case for Sars-CoV-1 [citation to be added] and MERS (probably indoor camel riding arena) animal to human jumps. 


<p id="metaphor-and-measures">---</p>

## Metaphor and Measures 
When avoiding the influenza droplet spread is avoiding somebody’s reek of alcohol, then in the dry form model, this corresponds to avoiding a smoker's smoke. The latter is much more difficult since smoke remains in the air for much longer and can diffuse around.
Just smelling would be the theoretical possibility of an infection. But for the odds to be in two digits percentages, one needs likely to be that close to a person that the cloths would be smelling. 
Another form of dry particulates in air is dust. In dry air dust can stay in the very long and travel long distances. Outside no worry for Sars-CoV-2 however, it is diluted and sun light destroys virions. 

This yields either avoiding 'Sars-CoV-2 smoke' entirely or filtering out  particulates above a few hundreds nanometers (Sars-CoV-2 is about between 80-150 nm, but likely it is attached so some organic material[to check and cite]). Keeping the smoke metaphor in mind, then indoor ventilation and indoor wearing a mask are key. Measures in more detail are found in [Protection Measures](#measures). 




<p id="references">-------</p>

# References

#### Note 
* References are grouped by topic. If several topics apply, one has been chosen. 
* Sometimes reviews or remarks in introductions are referred which point further to the original work/articles. 
* The references are named by the correspondence author, the primary authors or a descriptive tag. [todo more consistent naming]

> The correspondence author often are the head of the group/professors and tend to do research for a long time in the same area and topic. Further they often are responsible for the design and setup of the research. For these reasons the naming is done by the correspondence authors. Studies carried out in 2020 are often named: first author followed by the correspondence authors.


<!--

TODO UPDATE REFERENCES

* Describing that the cell entry point is ACE2:
[1] (SARS-Cov-1), [2] (SARS-Cov-1), [9] (SARS-Cov-2)

* Describing the ACE2 \[surface\] expression locations:
[6], [12]

* Describing that some coronaviruses enter via the apical surface:
[3](HCov 229E, uses a different receptor however cell entry side is likely more conserved)
* Describing the viral distribution across the organs:
[5] (SARS-Cov-1), [6] (SARS-Cov-1),[14]
* Describing clinal findings which are most notable in the lung
* Describing that a relevant number of patients has only an increase in temperature below 38 degrees and so if fever is defined as a temperature above 38 no fever:
[7], [10]
* Describing aerosol transmission in the case of influenza:
[8]
* Describing that dry spreading is possible:
[11]
* Describing spread potential i.e. high effective reproduction numbers in confined settings:
[15]
* Describing the human airway:
[16],[17]
* Describing particle deposition in the human airway on inhale:
[18]
* Describing particle deposition in the human airway on exhale. This is important both for diagnostic and transmission of Covid-19:
[21]

-->


### Clinical Observations

#### Covid-19

* ##### shi
    Heshui Shi*, Xiaoyu Han*, Nanchuan Jiang*, Yukun Cao, Osamah Alwalid, Jin Gu, Yanqing Fan†, Chuansheng Zheng†
    **Radiological findings from 81 patients with COVID-19 pneumonia in Wuhan, China: a descriptive study**
    Lancet Infect Dis 2020
    Published Online
    February 24, 2020
    https://doi.org/10.1016/S1473-3099(20)30086-4

* ##### wong
     **SARS-CoV-2 Infection in Children**
     This letter was published on March 18, 2020, at NEJM.org.
     https://doi.org/10.1056/NEJMc2005073

* ##### zhang
    Chen, Nanshan et al.
    **Epidemiological and clinical characteristics of 99 cases of 2019 novel coronavirus pneumonia in Wuhan, China: a descriptive study** The Lancet, Volume 395, Issue 10223, 507 - 513 https://doi.org/10.1016/S0140-6736(20)30211-7
     
* ##### zhong
    W. Guan, Z. Ni, Yu Hu, W. Liang, C. Ou, J. He, L. Liu, H. Shan, C. Lei, D.S.C. Hui, B. Du, L. Li, G. Zeng, K.-Y. Yuen, R. Chen, C. Tang, T. Wang, P. Chen, J. Xiang, S. Li, Jin-lin Wang, Z. Liang, Y. Peng, L. Wei, Y. Liu, Ya-hua Hu, P. Peng, Jian-ming Wang, J. Liu, Z. Chen, G. Li, Z. Zheng, S. Qiu, J. Luo, C. Ye, S. Zhu, and N. Zhong 
    **Clinical Characteristics of Coronavirus Disease 2019 in China**
    February 28, 2020,last updated on March 6, 2020, at NEJM.org.
    https://doi.org/10.1056/NEJMoa2002032
    
* ##### bhatraju
    Pavan K. Bhatraju, M.D., Bijan J. Ghassemieh, M.D., Michelle Nichols, M.D., Richard Kim, M.D., Keith R. Jerome, M.D., Arun K. Nalla, Ph.D., Alexander L. Greninger, M.D., Sudhakar Pipavath, M.D., Mark M. Wurfel, M.D., Ph.D., Laura Evans, M.D., Patricia M. Kritek, M.D., T. Eoin West, M.D., M.P.H., Andrew Luks, M.D., Anthony Gerbino, M.D., Chris R. Dale, M.D.,Jason D. Goldman, M.D., Shane O’Mahony, M.D., and Carmen Mikacenic, M.D.   
    **Covid-19 in Critically Ill Patients in the Seattle Region — Case Series** 
    This article was published on March 30, 2020, at NEJM.org. https://doi.org/10.1056/NEJMoa2004500
    
* ##### song
    Ruan, Q., Yang, K., Wang, W. et al. 
    **Clinical predictors of mortality due to COVID-19 based on an analysis of data of 150 patients from Wuhan, China.** Intensive Care Med (2020). https://doi.org/10.1007/s00134-020-05991-x
    
* ##### onder
    Onder G, Rezza G, Brusaferro S. 
    **Case-Fatality Rate and Characteristics of Patients Dying in Relation to COVID-19 in Italy.**
    JAMA. Published online March 23, 2020. https://doi.org/10.1001/jama.2020.4683
    
#### SARS

* ##### farcas
    Farcas GA, Poutanen SM, Mazzulli T, Willey BM, Butany J,
    Asa SL, Faure P, Akhavan P, Low DE, Kain KC: 
    **Fatal severe acute respiratory syndrome is associated with multiorgan involvement by coronavirus.**
    J Infect Dis 2005, 191:193-197
    https://doi.org/10.1086/426870
    
* ##### zaki
    Wun-Ju Shieh MD, MPH, PhDa, Cheng-Hsiang Hsiao MDb, Christopher D. Paddock MDa,Jeannette Guarner MDa, Cynthia S. Goldsmith MSa, Kathleen Tatti PhDa, Michelle Packard MPHa, Laurie Mueller BA, BSa, Mu-Zong Wub, Pierre Rollin MDc, Ih-Jen Su MD, PhDd, Sherif R. Zaki MD, PhDa 
    **Immunohistochemical, in situ hybridization, and ultrastructural localization of SARS-associated coronavirus in lung of a fatal case of severe acute respiratory syndrome in Taiwan**
    Human Pathology (2005) 36, 303 – 309
    https://doi.org/10.1016/j.humpath.2004.11.006  


#### Laboratory Biosafety

* ##### orellana
    Orellana C. (2004). 
    **Laboratory-acquired SARS raises worries on biosafety.** 
    The Lancet. Infectious diseases, 4(2), 64. https://doi.org/10.1016/s1473-3099(04)00911-9

* ##### raoult
    Wurtz, N., Papa, A., Hukic, M., Di Caro, A., Leparc-Goffart, I., Leroy, E., Landini, M. P., Sekeyova, Z., Dumler, J. S., Bădescu, D., Busquets, N., Calistri, A., Parolin, C., Palù, G., Christova, I., Maurin, M., La Scola, B., & Raoult, D. (2016). 
    **Survey of laboratory-acquired infections around the world in biosafety level 3 and 4 laboratories.** European journal of clinical microbiology & infectious diseases : official publication of the European Society of Clinical Microbiology, 35(8), 1247–1258. https://doi.org/10.1007/s10096-016-2657-1

* ##### lim 
    Poh Lian Lim, M.D., M.P.H., Asok Kurup, M.B., B.S., Gowri Gopalakrishna, M.Sc., Kwai Peng Chan, M.B., B.S., Christopher W. Wong, Ph.D., Lee Ching Ng, Ph.D., Su Yun Se-Thoe, Ph.D., Lynette Oon, M.B., B.S., Xinlai Bai, M.Sc., Lawrence W. Stanton, Ph.D., Yijun Ruan, Ph.D., Lance D. Miller, Ph.D., et al.
    **Laboratory-Acquired Severe Acute Respiratory Syndrome**
    April 22, 2004 N Engl J Med 2004; 350:1740-1745 https://doi.org/10.1056/NEJMoa032565

* ##### finegan
    Oran Finegan, Stephen Fonseca, Pierre Guyomarc’h, Maria Dolores Morcillo Mendez, Jacqueline Rodriguez Gonzalez, Morris Tidball-Binz, Kristy A. Winter,
    **International Committee of the Red Cross (ICRC): General guidance for the management of the dead related to COVID-19,**
    Forensic Science International: Synergy, Volume 2, 2020, Pages 129-137, ISSN 2589-871X, https://doi.org/10.1016/j.fsisyn.2020.03.007.

* ##### artika
    Artika, I. M., & Ma'roef, C. N. (2017). 
    **Laboratory biosafety for handling emerging viruses.** 
    Asian Pacific journal of tropical biomedicine, 7(5), 483–491. https://doi.org/10.1016/j.apjtb.2017.01.020


    
### Epidemiological Patterns
    
*  ##### le
	The Lancet Editoral
	**COVID-19: protecting health-care workers**
	www.thelancet.com Vol 395 March 21, 2020
	https://doi.org/10.1016/S0140-6736(20)30644-9 

*  ##### mizumoto 
	Kenji Mizumoto, Gerardo Chowell
    **Transmission potential of the novel coronavirus(COVID-19) on board the diamond Princess Cruises Ship, 2020**
	https://doi.org/10.1016/j.idm.2020.02.003
    
* ##### honein
    Temet M. McMichael et al.
    **Epidemiology of Covid-19 in a Long-Term Care Facility in King County, Washington**
    This article was published on March 27, 2020, at NEJM.org. https://doi.org/10.1056/NEJMoa2005412
    
   
     
### Phatogenesis and Viral Loads Sars-Cov-1

* ##### lau
	Yu Lung Lau and JS Malik Peiris 
    **Pathogenesis of severe acute respiratory syndrome**
	Current Opinion in Immunology 2005, 17:404–410
	https://doi.org/10.1016/j.coi.2005.05.009
    
* ##### peiris
    J S M Peiris, Y Guan, K Y Yuen
    **Severe acute respiratory syndrom**
    nature medicine, 30 November 2004
    https://doi.org/10.1038/nm1143


### Phatogenesis and Viral Loads Sars-Cov-2
    
* ##### case-series-france
    Francois-Xavier Lescure, Lila Bouadma*, Bruno Lina*, Sylvie van-der-Werf, Yazdan Yazdanpanah et al.
    **Clinical and virological data of the first cases of COVID-19 in Europe: a case series**
    Lancet Infect Dis 2020
    PublishedOnline
    March 27, 2020 https://doi.org/10.1016/ S1473-3099(20)30200-0<br>
    See Online/Comment https://doi.org/10.1016/ S1473-3099(20)30237-1

* ##### to_tsang
    Kelvin Kai-Wang To*, Owen Tak-Yin Tsang*, Wai-Shing Leung, Anthony Raymond Tam, Tak-Chiu Wu, David Christopher Lung, Cyril Chik-Yan Yip, Jian-Piao Cai, Jacky Man-Chun Chan, Thomas Shiu-Hong Chik, Daphne Pui-Ling Lau, Chris Yau-Chung Choi, Lin-Lei Chen, Wan-Mui Chan, Kwok-Hung Chan, Jonathan Daniel Ip, Anthony Chin-Ki Ng, Rosana Wing-Shan Poon, Cui-Ting Luo, Vincent Chi-Chung Cheng, Jasper Fuk-Woo Chan, Ivan Fan-Ngai Hung, Zhiwei Chen, Honglin Chen, Kwok-Yung Yuen 
    **Temporal profiles of viral load in posterior oropharyngeal saliva samples and serum antibody responses during infection by SARS-CoV-2: an observational cohort study**
    Lancet Infect Dis 2020 Published Online March 23, 2020 https://doi.org/10.1016/S1473-3099(20)30196-1 SeeOnline/Comment https://doi.org/10.1016/S1473-3099(20)30235-8



### Phatogenesis and Viral Loads MERS
    
* ##### memish
    Ziad A. Memish, Jaffar A. Al-Tawfiq, Hatem Q. Makhdoom, Abdullah Assiri, Raafat F. Alhakeem, Ali Albarrak, Sarah Alsubaie, Abdullah A. Al-Rabeeah, Waleed H. Hajomar, Raheela Hussain, Ali M. Kheyami, Abdullah Almutairi, Esam I. Azhar, Christian Drosten, Simon J. Watson, Paul Kellam, Matthew Cotten, Alimuddin Zumla, 
    **Respiratory Tract Samples, Viral Load, and Genome Fraction Yield in Patients With Middle East Respiratory Syndrome**
    The Journal of Infectious Diseases, Volume 210, Issue 10, 15 November 2014, Pages 1590–1594, https://doi.org/10.1093/infdis/jiu292
     


### Mechanism of Coronavirus Evolution 
[coming] 


### Interspecies Transmission, Adaption & Evolution

* ##### vanderhoek2012
    Dijkman, R., Jebbink, M. F., Gaunt, E., Rossen, J. W., Templeton, K. E., Kuijpers, T. W., & van der Hoek, L. (2012). 
    **The dominance of human coronavirus OC43 and NL63 infections in infants.** 
    Journal of clinical virology : the official publication of the Pan American Society for Clinical Virology, 53(2), 135–139. https://doi.org/10.1016/j.jcv.2011.11.011
    
<!--* ##### han2006-->

* ##### borucki
    Borucki, M. K., Allen, J. E., Chen-Harris, H., Zemla, A., Vanier, G., Mabery, S., Torres, C., Hullinger, P., & Slezak, T. (2013). **The role of viral population diversity in adaptation of bovine coronavirus to new host environments.** PloS one, 8(1), e52752. https://doi.org/10.1371/journal.pone.0052752

* ##### woo
    Woo, P. C., Lau, S. K., Huang, Y., & Yuen, K. Y. (2009). 
    **Coronavirus diversity, phylogeny and interspecies jumping.** 
    Experimental biology and medicine (Maywood, N.J.), 234(10), 1117–1127. https://doi.org/10.3181/0903-MR-94

    
* ##### zhang94
    Zhang, X.M., Herbst, W., Kousoulas, K.G. and Storz, J. (1994), 
    **Biological and genetic characterization of a hemagglutinating coronavirus isolated from a diarrhoeic child.**
    J. Med. Virol., 44: 152-161. https://doi.org/10.1002/jmv.1890440207

### Mechanisms of Evolution
    
### Cell Entry

* ##### jiang
	Keiji Kuba , Yumiko Imai, Shuan Rao, Hong Gao, Feng Guo, Bin Guan, Yi Huan, Peng Yang,
	Yanli Zhang, Wei Deng, Linlin Bao, Binlin Zhang, Guang Liu, Zhong Wang, Mark Chappell,
	Yanxin Liu, Dexian Zheng, Andreas Leibbrandt, Teiji Wada, Arthur S Slutsky, Depei Liu, Chuan Qin,
	Chengyu Jiang & Josef M Penninger1<br>
	**A crucial role of angiotensin converting enzyme 2 (ACE2) in SARS coronavirus–induced lung injury**
	NATURE MEDICINE VOLUME 11 | NUMBER 8 | AUGUST 2005
	https://doi.org/10.1038/nm1267
    
* ##### lif
	Wan Y, Shang J, Graham R, Baric RS, Li F.
	**Receptor recognition by novel coronavirus from Wuhan: An analysis based on decade-long structural studies of SARS.**
	J Virology 2020;
	published online Jan 29. .
	https://doi.org/10.1128/JVI.00127-20 

* ##### mccray
	GUOSHUN WANG,1 CAMILLE DEERING,1 MICHAEL MACKE,1 JIANQIANG SHAO,2 ROYCE BURNS,1
	DIANNA M. BLAU,3 KATHRYN V. HOLMES,3 BEVERLY L. DAVIDSON,4 STANLEY PERLMAN,1,5
	AND PAUL B. MCCRAY, JR.1
	**Human Coronavirus 229E Infects Polarized Airway Epithelia from the Apical Surface**
	JOURNAL OF VIROLOGY, Oct. 2000, p. 9234–9239
	https://doi.org/10.1128/jvi.74.19.9234-9239.2000
 
* ##### hoffmann
	Markus Hoffmann, Hannah Kleine-Weber,
	Simon Schroeder, ..., Marcel A. Müller,
	Christian Drosten, Stefan Pöhlmann
	**SARS-CoV-2 Cell Entry Depends on ACE2 and TMPRSS2 and Is Blocked by a Clinically Proven Protease Inhibitor**
	Hoffmann et al., 2020, Cell 181, 1–10
	April 16, 2020 a 2020 Elsevier Inc.
	https://doi.org/10.1016/j.cell.2020.02.052
    
    

### Expression Locations of ACE2

* ##### timens
	I Hamming,1 W Timens,1 * MLC Bulthuis,1 AT Lely,2 GJ Navis2 and H van Goor1
	**Tissue distribution of ACE2 protein, the functional receptor for SARS coronavirus. A first step in understanding SARS pathogenesis**
	Journal of Pathology
	J Pathol 2004; 203: 631–637
	Published online in Wiley InterScience
	https://doi.org/10.1002/path.1570    
        
* ##### mccray05
    Hong Peng Jia, Dwight C. Look, Lei Shi, Melissa Hickey, Lecia Pewe, Jason Netland, Michael Farzan, Christine Wohlford-Lenane, Stanley Perlman, Paul B. McCray
    **ACE2 Receptor Expression and Severe Acute Respiratory Syndrome Coronavirus Infection Depend on Differentiation of Human Airway Epithelia**  
    Jr Journal of Virology Nov 2005, 79 (23) 14614-14621; https://doi.org/10.1128/JVI.79.23.14614-14621.2005
    
* ##### li
    Xu, H., Zhong, L., Deng, J., Peng, J., Dan, H., Zeng, X., Li, T., & Chen, Q. (2020). 
    **High expression of ACE2 receptor of 2019-nCoV on the epithelial cells of oral mucosa.** 
    International journal of oral science, 12(1), 8. https://doi.org/10.1038/s41368-020-0074-x

* ##### soilleux & poehlmann
    Bertram S, Heurich A, Lavender H, Gierer S, Danisch S, et al. (2012) 
    **Influenza and SARS-Coronavirus Activating Proteases TMPRSS2 and HAT Are Expressed at Multiple Sites in Human Respiratory and Gastrointestinal Tracts.**
    PLoS ONE 7(4): e35876. doi:10.1371/journal.pone.0035876
     
     

### Enviromental Factors on Betacoronaviruses

* ##### chan
	K. H. Chan, J. S. Malik Peiris, S. Y. Lam, L. L. M. Poon, K. Y. Yuen, and W. H. Seto
	**The Effects of Temperature and Relative Humidity on the Viability of the SARS Coronavirus**
	Hindawi Publishing Corporation
	Advances in Virology
	Volume 2011, Article ID 734690, 7 pages
	https://doi.org/10.1155/2011/734690   
    
* ##### lin
    LIN, K., YEE-TAK FONG, D., ZHU, B., & KARLBERG, J. (2006). 
    **Environmental factors on the SARS epidemic: Air temperature, passage of time and multiplicative effect of hospital infection.** Epidemiology and Infection, 134(2), 223-230. https://doi.org/10.1017/S0950268805005054   
         
  
  
### Transmission and Infection of  Respiratory Viruses</strong>

* ##### kikkert
	Marjolein Kikkert
	**Innate Immune Evasion by Human Respiratory RNA Viruses**
	J Innate Immun 2020;12:4–20
	https://doi.org/10.1159/000503030

* ##### tellier
    Tellier R. (2006). 
    **Review of aerosol transmission of influenza A virus.** 
    Emerging infectious diseases, 12(11), 1657–1662. 
    https://doi.org/10.3201/eid1211.060426 (seems broken)<br>
    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3372341/
  
* ##### herfst
	Kutter JS1, Spronken MI1, Fraaij PL2, Fouchier RA1, Herfst S3.
	**Transmission routes of respiratory viruses among humans.**
	Curr Opin Virol. 2018 Feb;28:142-151. https://doi.org/10.1016/j.coviro.2018.01.001. Epub 2018 Jan 17.
    
* ##### marr
    Yang, W., & Marr, L. C. (2011). 
    **Dynamics of airborne influenza A viruses indoors and dependence on humidity.**
    PloS one, 6(6), e21481. https://doi.org/10.1371/journal.pone.0021481
    
* ##### pierret
    Reiman JM, Das B, Sindberg GM, Urban MD, Hammerlund MEM, et al. (2018) 
    **Humidity as a non-pharmaceutical intervention for influenza A.** 
    PLOS ONE 13(9): e0204337. https://doi.org/10.1371/journal.pone.0204337

* ##### myatt
    Myatt, T. A., Kaufman, M. H., Allen, J. G., MacIntosh, D. L., Fabian, M. P., & McDevitt, J. J. (2010).
    **Modeling the airborne survival of influenza virus in a residential setting: the impacts of home humidification.**
    Environmental health : a global access science source, 9, 55. https://doi.org/10.1186/1476-069X-9-55
    
    
### Immune System (in the Respiratory Tract)

* ##### xing
    Yushi Yao, Mangalakumari Jeyanathan, Siamak Haddadi, Nicole G. Barra, Maryam Vaseghi-Shanjani, Daniela Damjanovic, Rocky Lai, Sam Afkhami, Yonghong Chen, Anna Dvorkin-Gheva, Clinton S. Robbins, Jonathan D. Schertzer, Zhou Xing,
    **Induction of Autonomous Memory Alveolar Macrophages Requires T Cell Help and Is Critical to Trained Immunity,**
    Cell, Volume 175, Issue 6,2018,Pages 1634-1650.e17,ISSN 0092-8674, https://doi.org/10.1016/j.cell.2018.09.042. (http://www.sciencedirect.com/science/article/pii/S0092867418312546)
    
    
* ##### netea
    Netea MG, Joosten LAB. 
    **Trained Immunity and Local Innate Immune Memory in the Lung.** 
    Cell. 2018;175(6):1463–1465. https://doi.org/10.1016/j.cell.2018.11.007
 
        
    
### Clearance in the Respiratory Tract

* ##### yuen
     Kelvin K. W. To, Ivan F. N. Hung, Iris W. S. Li, Kar-Lung Lee, Chi-Kwan Koo, Wing-Wa Yan, Raymond Liu,Ka-Ying Ho, Kwok-Hong Chu, Chi-Leung Watt, Wei-Kwang Luk, Kang-Yiu Lai, Fu-Loi Chow, Thomas Mok, Tom Buckley, Jasper F. W. Chan, Samson S. Y. Wong, Bojian Zheng, Honglin Chen, Candy C. Y. Lau, Herman Tse, Vincent C. C. Cheng, Kwok-Hung Chan, Kwok-Yung Yuen, and the Pandemic H1N1 Study Group
    **Delayed Clearance of Viral Load and Marked Cytokine Activation in Severe Cases of Pandemic H1N1 2009 Influenza Virus Infection** 
    Clinical Infectious Diseases 2010;50:850–859 2010 by the Infectious Diseases Society of America https://doi.org/10.1086/650581 

* ##### hong
    Hyungseok Seo, Sung-Hoon Kim, Jae-Hyung Choi, Jeong-Yeon Hong and Jai-Hyun Hwang
    **Effect of heated humidified ventilation on bronchial mucus transport velocity in general anaesthesia: A randomized trial** 
    Journal of International Medical Research 2014, Vol. 42(6) 1222–1231 ! The Author(s) 2014 Reprints and permissions: sagepub.co.uk/journalsPermissions.nav https://doi.org/10.1177/0300060514548291   
    
* ##### forbes
    A. R. FORBES, M.B., CH.B., F.F.A.R.C.S., 
    **HUMIDIFICATION AND MUCUS FLOW IN THE INTUBATED TRACHEA,** 
    BJA: British Journal of Anaesthesia, Volume 45, Issue 8, August 1973, Pages 874–878, https://doi.org/10.1093/bja/45.8.874
    
* ##### hasani
    Hasani, A., Chapman, T., McCool, D., Smith, R., Dilworth, J., & Agnew, J. (2008). 
    **Domiciliary humidification improves lung mucociliary clearance in patients with bronchiectasis.** 
    Chronic Respiratory Disease, 81–86. https://doi.org/10.1177/1479972307087190
    
* ##### nakagawa
    Janaína Proença de Oliveira-Maul, Heráclito Barbosa de Carvalho, Danielle Miyuki Goto, Raphaela Mendonça Maia, Claudia Fló, Viviane Barnabé, Denise Reis Franco, Simon Benabou, Monica Rodrigues Perracini, Wilson Jacob-Filho, Paulo Hilário Nascimento Saldiva, Geraldo Lorenzi-Filho, Bruce K. Rubin, Naomi Kondo Nakagawa, 
    **Aging, Diabetes, and Hypertension Are Associated With Decreased Nasal Mucociliary Clearance**
    Chest,Volume 143, Issue 4,2013,Pages 1091-1097,ISSN 0012-3692, https://doi.org/10.1378/chest.12-1183. (http://www.sciencedirect.com/science/article/pii/S0012369213602226)
    
* ##### houtmeyers
    E Houtmeyers, R Gosselink, G Gayan-Ramirez, M Decramer 
    **Regulation of mucociliary clearance in health and disease** 
    European Respiratory Journal May 1999, 13 (5) 1177-1188;
    
* ##### leopold-mahony-lian
    Leopold, P. L., O'Mahony, M. J., Lian, X. J., Tilley, A. E., Harvey, B. G., & Crystal, R. G. (2009). 
    **Smoking is associated with shortened airway cilia.** 
    PloS one, 4(12), e8157. https://doi.org/10.1371/journal.pone.0008157
  
* ##### luo
    Yueling Ma, Yadong Zhao, Jiangtao Liu, Xiaotao He, Bo Wang, Shihua Fu, Jun Yan, Jingping Niu, Ji Zhou, Bin Luo, 
    **Effects of temperature variation and humidity on the death of COVID-19 in Wuhan, China** 
    Science of The Total Environment, 2020,138226,ISSN 0048-9697, https://doi.org/10.1016/j.scitotenv.2020.138226.
(http://www.sciencedirect.com/science/article/pii/S0048969720317393)

* ##### wolff
    Wolff, R. (1986). 
    **Effects of Airborne Pollutants on Mucociliary Clearance.** 
    Environmental Health Perspectives, 66, 223-237. doi:10.2307/3430237
    
    


### Respiratory Tract and Aerosol/Particle Deposition at In/Exhalation</strong>

[park](#park) is a recent review. An often used model is the [ICRP Model](#bailey). In this work mostly [kleinstreuer](#kleinstreuer) is used. [heyder](#heyder) is a readable description and [lindstrom](#lindstrom) explains very well the overall topic in her 40 pages long thesis. [qi](#qi) shows that particle deposition is individual and may change in case of lung diseases. 

#### General

* ##### lindstrom
    Lindström Bagge, Maria. (2004).<strong>Particles in small airways: 
    mechanisms for deposition and clearance & Pharmacokinetic assessment of delivered 
    dose to the lung.    </strong>    https://openarchive.ki.se/xmlui/handle/10616/37702
   
* ##### stuart
    B O Stuart<strong>
    Deposition and clearance of inhaled particles.</strong>
    Environ Health Perspect. 1984 Apr; 55: 369–390.
    https://doi.org/10.1289/ehp.8455369

* ##### bailey
	<strong>The New ICRP Model for the Respiratory Tract </strong> M.R. Bailey 
	Radiation Protection Dosimetry, Volume 53, Issue 1-4, 1 May 1994, Pages 107–114, https://doi.org/10.1093/rpd/53.1-4.107
    
* ##### heyder
    Joachim Heyder
    <strong>Deposition of Inhaled Particles in the Human Respiratory Tract and Consequences for Regional Targeting in Respiratory Drug Delivery</strong>
    Proc Am Thorac Soc Vol 1. pp 315–320, 2004
    https://doi.org/10.1513/pats.200409-046TA Internet address: www.atsjournals.org
        
* ##### darquenne
    BY C. DARQUENNE*, L. HARRINGTON AND G. K. PRISK
    <strong>Alveolar duct expansion greatly enhances aerosol deposition: a three-dimensional computational fluid dynamics study</strong>
    Phil. Trans. R. Soc. A (2009) 367, 2333–2346 https://doi.org/10.1098/rsta.2008.0295
    
* ##### sznitman
	Rami Fishler, Philipp Hofemeier, Yael Etzion, Yael Dubowski & Josué Sznitman 
	<strong>Particle dynamics and deposition in true-scale pulmonary acinar models. </strong>
	Sci Rep 5, 14071 (2015). https://doi.org/10.1038/srep14071
    
* ##### tsuda
	Tsuda A1, Rogers RA, Hydon PE, Butler JP.
	<strong>Chaotic mixing deep in the lung.</strong>
	Proc Natl Acad Sci U S A. 2002 Jul 23;99(15):10173-8. Epub 2002 Jul 15. https://doi.org/10.1073/pnas.102318299
    
    
#### Computational Models

* ##### park
    Vu Khac Hoang Bui, Ju-Young Moon, Minhe Chae, Duckshin Park and Young-Chul Lee 
    <strong>Prediction of Aerosol Deposition in the Human Respiratory Tract via Computational Models: A Review with Recent Updates </strong>
    Atmosphere 2020, 11, 137; https://doi.org/10.3390/atmos11020137

* ##### varghese
    Varghese, S.K. and Gangamma, S. (2006). 
    **Particle Deposition in Human Respiratory Tract: Effect of Water-Soluble Fraction.** Aerosol Air Qual. Res. 6: 360-379. https://doi.org/10.4209/aaqr.2006.07.0004

* ##### kleinstreuer 
    Arun V Kolanjiyil, Clement Kleinstreuer, Nicole C Kleinstreuer, Wellington Pham and Ruxana T Sadikot
	<strong>Mice-to-men comparison of inhaled drug-aerosol deposition and clearance. Respiratory Physiology & Neurobiology. </strong> https://doi.org/10.1016/j.resp.2018.11.003
    
* ##### kleinstreuer2017
    Arun V. Kolanjiyila, Clement Kleinstreuer
    <strong>Computational Analysis of Aerosol-Dynamics in a Human Whole-Lung Airway Model</strong>
    https://dx.doi.org/10.1016/j.jaerosci.2017.10.001

* ##### qi
    Baihua Zhang, Shouliang Qi, Yong Yue, Jing Shen, Chen Li, Wei Qian and Jianlin Wu
    <strong>Particle Disposition in the Realistic Airway Tree Models of Subjects with Tracheal Bronchus and COPD</strong>
    Hindawi BioMed Research International Volume 2018, Article ID 7428609, 15 pages https://doi.org/10.1155/2018/7428609
    
* ##### zhong18
    Xiaole Chen, Clement Kleinstreuer, Wenqi Zhong, Yu Feng & Xianguang Zhou (2018) <strong>Effects of thermal airflow and mucus-layer interaction on hygroscopic droplet deposition in a simple mouth–throat model</strong>, Aerosol Science and Technology, 52:8, 900-912, https://dx.doi.org/10.1080/02786826.2018.1476751
    
* ##### rahimi-gorji
	Mohammad Rahimi-Gorji, Tahereh B. Gorji n, Mofid Gorji-Bandpy
	<strong>Details of regional particle deposition and airflow structures
	in a realistic model of human tracheobronchial airways: two-phase flow simulation</strong>
	https://dx.doi.org/10.1016/j.compbiomed.2016.04.017
	0010-4825/& 2016 Elsevier Ltd. All rights reserved.

* ##### hofemeier
    Philipp Hofemeier, Kenishiro Koshiyama, Shigeo Wada, and Josué Sznitman
	<strong>One (sub-)acinus for all: Fate of inhaled aerosols in heterogeneous pulmonary acinar structures</strong> Eur J Pharm Sci. 2018 February 15; 113: 53–63. https://doi.org/10.1016/j.ejps.2017.09.033
    
* ##### sturm 
    Robert Sturm <strong> A Computer Model for the Simulation of Nonspherical Particle Dynamics in the Human Respiratory Tract</strong> Hindawi Publishing Corporation Physics Research International Volume 2012, Article ID 142756, 11 pages https://doi.org/10.1155/2012/142756



     
    
#### In Vivo Experiments

* ##### rissler
	Rissler, Gudmundsson, Nicklasson, Swietlicki, Wollmer, Löndahl.
	<strong>Deposition efficiency of inhaled particles (15-5000 nm) related to breathing pattern and lung function: an experimental study in healthy children and adults.</strong>
	Jonas K. F. Jakobsson, Johan Hedlund, John Kumlin, Per Wollmer & Jakob Löndahl
	Part Fibre Toxicol. 2017 Apr 8;14(1):10. doi: 10.1186/s12989-017-0190-8.
	https://doi.org/10.1186/s12989-017-0190-8
    

 

### Exhaled Breath Condensate and Virus Shedding

* ##### morawska2006
    Morawska, L. (2006), Droplet fate in indoor environments, or can we prevent the spread of infection?. Indoor Air, 16: 335-347. https://doi.org/10.1111/j.1600-0668.2006.00432.x

* ##### milton2018
    Jing Yan, Michael Grantham, Jovan Pantelic, P. Jacob Bueno de Mesquita, Barbara Albert, Fengjie Liu, Sheryl Ehrman, Donald K. Milton, EMIT Consortium
    <strong> Aerosol shedding of infectious influenza virus</strong>
    Proceedings of the National Academy of Sciences Jan 2018, 115 (5) 1081-1086; https://doi.org/10.1073/pnas.1716561115
    
* ##### milton2013
Milton, D. K., Fabian, M. P., Cowling, B. J., Grantham, M. L., & McDevitt, J. J. (2013). <strong>Influenza virus aerosols in human exhaled breath: particle size, culturability, and effect of surgical masks.</strong> PLoS pathogens, 9(3), e1003205. https://doi.org/10.1371/journal.ppat.1003205
    
* ##### morawska
    Johnson, Graham & Morawska, Lidia & Ristovski, Zoran & Hargreaves, M. & Mengersen, K. & Chao, Christopher & Wan, Man-Pun & Li, Yuguo & Xie, Xiaojian & Katoshevski, David & Corbett, Shay. (2011). Modality of human expired aerosol size distributions. Journal of Aerosol Science - J AEROSOL SCI. 42. 839-851. https://doi.org/10.1016/j.jaerosci.2011.07.009. 
    
* ##### olin 
    Bake, B., Larsson, P., Ljungkvist, G. et al. Exhaled particles and small airways. Respir Res 20, 8 (2019). https://doi.org/10.1186/s12931-019-0970-9
    
* ##### larsson
    Per Larsson, Björn Bake, Anita Wallin, Oscar Hammar, Ann-Charlotte Almstrand, Mona Lärstad, Evert Ljungström, Ekaterina Mirgorodskaya, Anna-Carin Olin,
    <strong>The effect of exhalation flow on endogenous particle emission and phospholipid composition</strong>, Respiratory Physiology & Neurobiology,Volume 243,2017,Pages 39-46,ISSN 1569-9048,     https://doi.org/10.1016/j.resp.2017.05.003

* ##### fabian
    Patricia Fabian, Sc.D.,1 Joseph Brain, S.D.,1 E. Andres Houseman, Sc.D.,2 James Gern, M.D.,3 and Donald K. Milton, M.D., Dr.PH.1,4
    <strong>Origin of Exhaled Breath Particles from Healthy and Human Rhinovirus Infected Subjects</strong>
    JOURNAL OF AEROSOL MEDICINE AND PULMONARY DRUG DELIVERY Volume 24, Number 3, 2011 a Mary Ann Liebert, Inc. Pp. 137–147 https://doi.org/10.1089/jamp.2010.0815
    
* ##### lindstedt
    Broberg E, Andreasson J, Fakhro M, et al. <strong>Mechanically ventilated patients exhibit decreased particle flow in exhaled breath as compared to normal breathing patients.</strong> ERJ Open Res 2020; 6: 00198-2019 [https://doi.org/10.1183/23120541.00198-2019].
    
       
    
### Control and Containing Measures

* ##### noakes
    Gilkeson, CA, Camargo-Valero, MA, Pickin, LE and Noakes, CJ (2013)
    Measurement of ventilation and airborne infection risk in large naturally ventilated
    hospital wards. Building and Environment, 65. 35 – 48. https://dx.doi.org/10.1016/j.buildenv.2013.03.006
    
* ##### escombe
    Escombe, A. R., Oeser, C. C., Gilman, R. H., Navincopa, M., Ticona, E., Pan, W., Martínez, C., Chacaltana, J., Rodríguez, R., Moore, D. A., Friedland, J. S., & Evans, C. A. (2007). Natural ventilation for the prevention of airborne contagion. PLoS medicine, 4(2), e68. https://doi.org/10.1371/journal.pmed.0040068
    
* ##### salathe
    Smieszek, T., Lazzari, G., & Salathé, M. (2019). Assessing the Dynamics and Control of Droplet- and Aerosol-Transmitted Influenza Using an Indoor Positioning System. Scientific reports, 9(1), 2185. https://doi.org/10.1038/s41598-019-38825-
    
    





