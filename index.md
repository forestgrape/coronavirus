# Thoughts and Ideas about Betacoronaviruses and Covid-19

## Note
* This page is hosted on GitHub Pages: [https://forestgrape.github.io/coronavirus](#https://forestgrape.github.io/coronavirus)<br> and is open source on GitHub: [https://github.com/forestgrape/coronavirus/blob/master/index.md](#https://github.com/forestgrape/coronavirus/blob/master/index.md), where it can be read both as Markdown and GitHub Preview

* This is work in progress, so mistakes of any form are likely. 

* The page started with a proposal for a Dry Form Transmission Model and that the Covid-19 transmission can be metaphored smoke-like.  More [content](#t-content) has been added since and noteworthy changes are mentioned in [updates](#updates). 

* These are __hypothesis__ and __research ideas__ but __not__ double checked facts. They are put here as ideas to be checked and evaluated. 

<!--
* This page is written for people, who like and are used to __critically analyze__ concepts and ideas. Good knowledge in [natural] sciences is helpful. -->

* Two sections are marked as __public__, which contain suggestions and conversational descriptions: [Public Suggestions](#public-advice) and [Covid-19](#public-description).

* Pointing out mistakes and feedback are __welcome__.
<!-- * The page is soon going to be split up into different topics. -->

<p id="t-content">-----</p> <!-- workaround to set ids, since github preview/jupyter keeps cases and github pages converts to all lower case. For the same reason, some titles are all lower case since the auto-generated ids are used. -->

## Content

* [Updates](#updates)
* [Public Suggestions](#public-advice) - 
    Keep distance and hygiene. Then outside is safe. Inside ventilate well and/or wear a mask. Transmission can be smoke-like. Don't burden the immune system.
* [Ideas to Explore](#ideas)
    * [Prevent Early On Mucus Accumulations](#early-vents) - 
        Humidify inhaled air early on to increase the mucus flow and thereby the overall prognosis.
* [Transmission Models for Sars-Cov-2 and a new Dry Form Transmission Model](#proposal) - Sars-Cov-2 is mostly transmitted airborne and even Dry Form infection is possible.  
    - [Abstract](#abstract)
    - [Model](#model)
    - [Intermezzo Particle Dynamics in the Respiratory Tract](#particles)
    - [Habitat of the Betacoronaviruses](#habitat)       
    - [Evidence for the Dry Form Transmission Model](#evidence)
        * [Evidence from Biological Properties](#biological-properties)
        * [Evidence from the observed Spread Patterns](#spread-patterns)
* [Suggested Protections Measures](#measures)<br>
    Smoke protection measures work well and masks. 
    - [Masks](#masks)
    - [Ventilation](#ventilation)
* [References](#references)

<p id="updates">-----</p> 

## Updates and Added Content
- 9.4.20 Extended section [Prevent Early On Mucus Accumulations](#early-vents), previously named Early On Ventilators 
- 4.4.20 Added Section Ideas to Explore
    - starting with [Early On Ventilators](#early-vents): Increase the mucus flow and clearance by humidified air early on,  to decrease the risk for developing ARDS. 
- 25-30.3/9.4.20:  Corrected and looked up aerosol/particulate inhalation which yields to the new section [Particles in the Respiratory Tract](#particles).<br>
    In the first version, I had written that aerosols don't enter the lungs. False. Aerosols DO enter the lungs. The train of thought yielding this mistake: Entering the lungs is halfway entering the body. So there must have been enough evolutionary pressure to prevent this. This is ~~double~~ tripple wrong:
    1. The evolutionary roots of the lungs are the alimentary system (some dozens of millions of generations ago), so substances coming in were just cleared down. Even as lungs and the alimentary separated this process stayed. As we often do too, evolution usually gradually bends things right, rather than rebuilding from scratch.  
    2. The lungs developed before we were upright (just a couple of hundred thousand generations ago) and in the original case the clearance of aerosols earlier and better; shown for mice in [Kleinstreuer](#kleinstreuer). Ciliate based movement works even uphill, as ski tourers know. But there are limits. A gradual adaption evolved first: increase the frequency of the cilia, but wasn't yet enough so a workaround evolved:  smallest particulates are cleared by macrophages [citation to be added].  
    3. Upright clearance evolved when we all were in warm and mostly humid parts of Africa (well it likely got a little drier in the winter months and savanna replaced rainforest in East Africa, so we had motivation to stand up). In such humid environments  clearance works better. In evolutionary dimensions, there has been only a short time for the adaption to cold and dry climate (how much depends on where your ancestors lived and how much pressure for adaption there was, which isn't straight forward to say since migration routes have twists and turns and desert nights can be cold around the world). To permanent stay in heated indoor spaces, there has been and no genetic adaption at all.    
    
#### Minor Updates 
- 10.4.20 Added section Habitat of Betacoronaviruses and combined with/reordered sections in Evidence from Biological Properties
- 9.4.20 Started section Covid-19
- 5.4.20 Clarified Early On Ventilators section and added more ref
- 4.4.20 Updated section evidence from spread patterns (Cruise Ship)
- 27-4.4.20: Public Advice extended and clarified. 
- 2.4.20 Short notice about masks. 



<p id="public-advice">-----</p>

## Public Advice, Suggestions and Thoughts
Do NOT take Covid-19 lightly: it can be very serious in the short-term and whether there are possible long-term effects is unknown. But no reason to panic neither, unlike viruses we've got a mind, better communication and a superb body police called immune system. Time to act mindfully and work together.  
   
- The coronavirus transmission is best thought smoke-like. How smoke behaves we know, since we can smell it, unlike the viruses. Just smelling smoke is the theoretical possibility of infection.  Being that exposed to smoke that your cloth start smelling , would correspond to a probability of a few percentages to get infected. Keeping the smoke model in mind makes it easier to detect and avoid risky situations: A neighbours candle won't harm through doors, but if you are at a place with an indoor barbecue, smoke travels to the next floor. For Covid-19 this means: A single neighbour being infected is no risk, but in place with possibly many infected people e.g. a hospital treating Covid-19 patients, wearing a mask in _all_ rooms is important.

- Wear a mask in indoor places where infectious people can be. The longer you stay, the more people there are and the less ventilation there is, the more important since the infection risk increases with the amount of indoor air breathed.
   Reuse the mask, but put it into 60 to 70-degree hot water for 30 minutes every day  or wash it with soap. [Chan et al.](#chan) have shown that this inactivates the coronavirus (Remark: shown for Sars-Cov-1).  From time to time you should change it or wash it very well - there's more than Sars-Cov-2, don't forget that!

- Distancing reduces infection risk.  If possible avoid crowded indoor spaces. 
    
- Ventilate your rooms regularly by opening all windows for 5 minutes.  If possibly  infected, always ventilate your room before opening the door of your room or flat. [Ventilation](#ventilation) has been shown to be effective. 

- Outside is safe, if some distance is kept. Ideally, walk or cycle directly from home. Primarily Covid-19 is transmitted indoors, so beware the corridor and stairwell.

- Transport: 
    * Cars: Considering, that many people, especially children, will and should go outside right where they live, limited use of cars in cities is polite - it's nicer and safer with light traffic. 
    * Public transport:
         * Limit usage and/or wear a mask to reduce infection paths. 
         * Ventilation is key in public transport. If possible open the windows from time to time, this works well thanks to the outside airflow. Put ventilation on max, turn off in tunnels and never put on circulation. 
         * If there are old toilets, that go to the rails, don't use to shit!

- Don't have very dry air inside; drying your frequently washed cloths inside keeps the air humid. In dry air, both dust and viruses stay longer in the air. 

- Keep proper hygiene. Especially wash your hands well with a lot of soap after toilet. Before eating wash them too. 
  Hygiene is important because:
   * transmission pathways of Covid-19 are still unclear. So just avoid them all. 
   * it is known that viruses causing common cold are transmitted through droplets. These viruses can weaken the immune system [[kikkert](#kikkert)] and therefore could induce an increased infection risk. 
   * avoiding a common cold or flu is important, because Covid-19 symptoms can be somewhat similar. This means quarantine for you and your close contacts and figuring out all the people you could have infected and informing them.   
  But do NOT rely on hygiene alone, since there is strong evidence, that the majority of [transmissions occur through indoor air](#spread-patterns) and not with droplets or fomites. 
  

- Observe your body, write down the observations and if possible measure: Measure your temperature several times every day and best in the same situations and record the values. An increased temperature can be an early sign of a possible Sars-Cov-2 infection. However many people have only a slight increase, which doesn't "meet the definition of fever", see [Covid-19 symptoms](#symptoms). Your temperature if measured on the forehead may go from a typical 35 to 36 degrees. Side note: It's time [for medicine] to move on from digitalization and black-white schemes to the continuous colorspace of Bayesian statistics. Keep in mind that the temperature varies during a day and with the activities performed. That's why several measurements. <br>
    The more common Covid-19 in your region is, the more likely it is an observed infection is Covid-19 and not flu/common cold. In my case - South East Switzerland, a day hike away from Nothern Italy - Covid-19 is/was the most prevalent disease. 

- Live a healthy lifestyle 
    * sleep enough, eat healthily, relax and do some sport
    
    and avoid anything that weakens your immune system:
    * avoid excessive caffeine, excessive sport (if in a risk region), excessive alcohol ...
    * try reducing stress for yourself and others. Trying too hard won't help though. 
    
  Stress is an important factor, who hasn't experienced falling sick after a stressful period? It's about balancing the different kinds of risks and chances we have been and are facing through our entire evolution. 


<p id="covid"> ---</p>

# Covid-19

### public description
__Remark__: Based on a couple first-hand descriptions of rather mild cases. The descriptions agree well with the expected pathogenesis of mild cases. However to put this on a solid basis more cases would need to be considered. 

Covid-19 is different from a common respiratory disease. It doesn't start with a soar throat nor with a runny nose, it starts from within, from the lungs. Early symptoms can be some chill (because your body is increasing the temperature to fight the viruses) or some strange feeling sort similar to a small poisoning when having eaten something rotten or drunken too much. Feeling tired, energy-less and having an increased recovery time after sports are indications too. However these symptoms are not specific to Covid-19, they can have other causes: Cold air, having eaten something rotten or not having had enough sleep. These early symptoms can be easily overlooked, so the first thing to notice may very well be a soar throat or loss of smell/taste - these symptoms come when high numbers of viruses are breathed up and reach the mouth and the nose, at this time, one is already shedding many viruses. Later symptoms can be a strange feeling in the chest like something sticky being inside (dry mucus loaded with viruses) or even shortness of breath (the lungs are inflamed). Diarrhoea can be both early (not necessarily a bad sign because it means viruses are cleared down the alimentary) and later (not so good because viruses went into the blood and infected the intestine; so take special care to the immune system). If most of the symptoms are observed in the described order it is likely Covid-19.

### symptoms
[in work]
* Only a slightly increased temperature, often below 38 degrees, has been observed in many patients ([Zhang](#zhang), [Wong](#wong), [Zhong](#zhong)). The increase can be as low as one degree: going up from 35 to 36 if measured on the forehead. 


<!--
### pathogenesis
[in work]-->



<p id="ideas"> ---</p>

# Ideas to Explore
* [Early On Prevent Mucus Accumulations](#early-vents)


<p id="early-vents"> -----</p>

## Early On Prevent Mucus Accumulations 

### Subsections
* Overview
* Reverse Cascade - From ARDS to Decreased Mucus Flow
* Ideas to Decrease Virus Distribution
* Appendix for Early On Ventilators

### Overview
For the development of a virus-induced ARDS, a decreased mucus clearance seems to be a key factor, shown by ([Yuen et al.](#yuen) for Influenza). [Hong and colleagues](#hong) found that the mucus flow can be increased by humidified ventilation. [Hasani et al.](#hasani) found the same by humidifying the air in the entire room. This observation that humid air increases the mucus flow can be used as described these two settings or with other settings e.g. a stand-alone heated humidifier. Moreover, breath-support-devices may not only be used to humidify, additionally there are indications they may reduce the spread of viruses in the lungs. 

#### cascade of influences
Increase humidity of inhaled air --> Increases the mucus clearance --> Decrease the viral load in the lower respiratory tract --> Increase the well-being and the overall prognosis
 
#### Causes for severe Outcome of Covid-19
A main complication of a severe Covid-19 and possible death cause is acute respiratory distress syndrome (ARDS) see e.g. findings from [Song and colleagues](#song). 

#### Hypothesis 
The reason for developing ADRS both for Covid-19 and influenza seems to be a delayed mucus clearance of viruses. This yields a high number of viruses distributed across the entire lungs.

In the following evidence is shown for the reverse [cascade](#cascade-of-influences): 
* ARDS is caused by widespread virus distribution [how: work in progress]
* widespread virus distribution is caused by a decreased mucociliary clearance and increased distribution from locations of infected cells-
* decreased mucus clearance is caused by dry air, hypertension, diabetes

### Reverse Cascade of Evidence

- In most severe cases (especially, where ADRS is observed and mechanical ventilation is needed) the images show _bilateral_ lung lesions/patches [Bhatraju et al.](#bhatraju),[Zhong et al.](#zhong).
- [Yuen et al](#yuen) found high late viral loads for patients with an ARDS . 

For the widespread viral load distribution in the lower respiratory tract, possible reasons are:

- [increased growth of viruses in the cells](#increased-growth)
- [increased distribution across the lungs](#increased-distribution) 
- [decreased mucus clearance](#decreased-mucus-clearance)


##### increased growth

Overall there isn't strong evidence for increased growth of viruses in ARDS risk group:

- data suggest no strong correlation between a diminished immune system and severe Covid-19 (see e.g. [zhong](#zhong))
- patients with ADRS seem not to have especially low antibody levels as results obtained by [To, Tsang et al.](#to-tsang) indicate. 
- data by [To, Tsang et al.](#to-tsang),[Yuen et al.](#yuen) suggest that early high viral loads are no clear indication for developing an ARDS.
- in young people the cell machinery tends to be more performant. So in theory viruses could spread more quickly. 

<!--todo: immune reaction -->

##### increased distribution
The Sars-Cov-2 entry ACE2 is expressed in large quantities in alveolar type 2 cells. From these locations, many particles are exhaled upon deep breathing [[Larsson](#larsson)], which could yield increased spreading both inside and outside. 

##### decreased mucus clearance 

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
             * generally fewer deaths indicating a lower death-rate in humid air countries, for relative humidity values below 50%. There is a lower death-rate in Israel than in Norway, two countries that both have good testing rates and a good health care system. 
             * For greyhounds under anesthesia, breathing air at 37 °C, a decrease in the tracheal mucus flow was observed if the relative humidity was decreased below 50% [[Forbes](#forbes)].
* Virus RNA early on in the alimentary seems not to be an indication for ARDS even though this indicates a high overall viral load:
    * there's indication that patients with early detection of viruses in stool, do not have worse outcome [case-series-france](#case-series-france)
    *  diarrhea is not risk for ADRS in influenza [Yuen](#yuen). 
    * increased nausea or vomiting seem to be no indication for a severe disease outcome [Zhong](#zhong)(despite these indicating higher viral loads in the stomach, so viruses are just better cleared to the alimentary). However vomiting a slight indication for ADRS in influenza [Yuen](#yuen).


### Ideas to Decrease Virus Distribution [in work]

#### new methods ideally are  
- thought through by a variety specialists from different fields
- simulated
- tightly supervised, observed and recorded
- published, including raw data

__Warning__:
These are unchecked proposals and should be carefully supervised. Anything that could alter/increase the natural airflow and thus possibly the distribution of viruses could cause irritations and infections in new locations. Ideally such methods are __first simulated__, e.g. by methods described in the section [Particle Dynamics in Respiratory Tract](#particles). Such methods (e.g. High Flow Therapy) will not be further discussed here.
 
#### increase the mucus flow
Increase the mucus flow and clearance by increasing the humidity [Hong](#hong), [Hasani](#hasani)
This prevents the accumulation of viral loaded and dry mucus early on. This in turn should both increase the well-being as well as the overall prognosis. 

__Warning__: If there are already a lot of (dry) mucus accumulations, liquefying them could yield a likely __temporary but possibly dangereous__ increased distribution of virus parts and therefore an additional irritation. 

* heated humidifiers in combination with a ventilator as described by [Hong et al. in 2014](#hong) i.e. in the way in which many pneumomia patients around the world receive successful treatment. 
    __Benefit__: This increases both the [humidity](#hong) and also decreases the spread of particles from the alveoli as observed by  [Lindstedt and colleagues](#lindstedt). __Risk__: general risks of invasive ventilation, temporary irritation due to liquefying of mucus. 

* a heated humidifier stand-alone (i.e.) with no ventilator. __Benefit__: Increase humidity and thus mucus flow and easy to use with an oxygen mask. __Risk__: temporary irritation due to liquefying of mucus.
 
* increasing the humidity in the entire room, increases the mucus flow too, as shown by [Hasani and colleagues](#hasani). __Benefit__: Simple use and a slight increase in mucus flow.  __Risk__: Some irritation due to liquefying can be possible. "Well tested" in tropical clima zones around the world.  

* Steam inhalation in the traditional way with a pot of hot water and a towel could help too. L. Use in early phase only since the steam may further irritate the mucous membranes. __Benefit__: Simple use and a temporary increase in mucus flow. __Risk__: Start with short times and see how the body reacts, then the risks should be little. 
    
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
[Zhong et al.](#zhong) noted characteristics of mild, severe and fatal cases of  diarrhea Covid-19 patients. 
The numbers in parenthesis are observation rates for (% death cases, % severe cases(including fatal), % mild cases)

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


[Bhatraju et al.](#bhatraju) noted characteristics of Covid-19 patients from the Seattle-area with ARDS.

strong relation:
- Diabetes 58%
- high body mass index (33.2±7.2)
- Age (64±18 (23–97))

weak relation:
- former/current smoker 22%
- asthma 14%

In Italy [Onder et al.](#onder) analysed a subsample of 355 patients with COVID-19 who died in Italy: 

strong relation:
* mean age was 79.5 years (SD, 8.1) 
* 117 patients (30%) had ischaemic heart disease
* 126 (35.5%) had diabetes
* 72 (20.3%) had active cancer
* 87 (24.5%) had atrial fibrillation

some relation:
* 24 (6.8%) had dementia
* 34 (9.6%) had a history of stroke
    
#### Factors Associated with ADRS in Influenza    
The following characteristics are observed in the  [paper from Yuen et al.](#yuen):
- For patient developing a ARDS coughing was more common than for patients, who didn't develop an ARDS. Since coughing is an emergency measure of the body to clear respiratory tract this an indication of bad clearance. 
- The Nasopharyngeal Viral load was even a little higher in the group, who didn't develop an ARDS.
- The tracheal viral load was much higher in the ARDS groups (less clearance!)
- Diabetis, Age, Chronic hear disease positively correlate with ARDS development. 
    
    
#### factors influencing the mucus flow

* Dry Air especially below 50% relative humidity decreases the mucus flow as found by [Forbes](#forbes)

* [Leopold et al.](#leopold-mahony-lian) observed smoking-associated shorter airway epithelial cilia which, according to their argumentation, yields a decreased mucus flow (described in the section "Implications of Reduction of Cilia Length on Mucociliary Clearance"). 

* In his review on "Effects of Airborne Pollutants on Mucociliary Clearance"  Ronald K. Wolff summarizes "A variety of pollutants have been shown to impair mucociliary clearance following acute or subchronic exposures." 

* [Nakagawa et al.](#nakagawa) found that "Ageing, Diabetes, and Hypertension Are Associated With Decreased Nasal Mucociliary Clearance". The mechanisms of mucus production in the nose are likely similar to those in the trachea and therefore similar correlations are expected [to be confirmed]. 

* In the review from [Houtmeyers et al.](#houtmeyers) "Regulation of mucociliary clearance in health and disease" has references to findings which indicate a decreased mucus flow and ciliary activity with age. 


#### Factors Influencing Death Rates

In a analysis ["Effects of temperature variation and humidity on the death of COVID-19 in Wuhan, China"](#luo) Luo et al. find some correlation between a decreased humidity and and increased death rates (which likely corresponds to lowering the ARDS risk). The argumentation given here agrees with their findings and would even provide explanations. Their analysis depends however on how accurate the analysed data are. In Wuhan, as in nearly all heavy hit regions around the world, the priority was and is and should be to save lives and not to count accurately. <!--But for analysis it would be helpful to have accurate/corrected data. -->


<p id="proposal">-------</p>

# Proposal of a Dry Form Transmission Model


<p id="abstract">-----</p>

## Abstract Proposed Dry Form Transmission
A dry form transmission model for Betacoronaviruses is proposed. It is known that Sars-Cov-1 has the unusual ability for viruses to survive in dry form, this makes a dry form transmission possible and also likely to occur since evolutionary drive is needed to develop this ability.
The transmission models described in the literature - a recent recommended review is [Herfst](#herfst) - for viruses are:
* Contact (direct and indirect via fomites)
* Droplets
* Aerosols

this new model is added:
* Dry form transmission 

Compared to aerosols - which tend to spread local both in time and space, an example is the scent of a freshly cooked soup -, tiny dry particulates behave smoke like - smoke is a collection of tiny dry particulates diffusing around - so they can diffuse around and stay in the air even longer. Dry particulates have a potentially more infectious lung deposition and less clearance. 

It is argued 
* the described properties of dry form transmission explain well the observed transmission patterns for Sars-Cov-1/2. 
* the entry receptor of Sars-Cov-1/2 (ACE2) distribution in body tissues and the observed viral loads in different organs indicate that Sars-Cov-1/2 has the lower respiratory tract as the obligate entry point.  Particle deposition at inhalation, which shows that mainly aerosols and dry particulates are entering the lower respiratory tract, suggests that these two are the only Sars-Cov transmitters. The viral loads in the pharynx can be attributed to deposition of particles upon exhalation. 

Overall the argumentation provides evidence, that the most relevant transmission models are aerosol and the proposed dry form. 

Based on these findings, recommendations for containing the 2020 spread of Sars-Cov-2 are given. Key is ventilation of indoor spaces and wearing a mask in risky indoor spaces. 



<p id="model">-----</p>

## Model for Transmission

In the following, a model of dry form transmission of Sars-Cov-1 and Sars-Cov-2 is proposed. The virus is attached to dry particulates or even just as a single particle. These dry particles dust like fly around or in the case of tiny particulates diffuse smoke like around. This yields a different transmission pattern than the aerosol [[Tellier](#tellier)], which is however still a relevant transmission pathway. The droplet model is likely to be less relevant, due to the [obligate lower respiratory tract entry](#habitat) for Sars-Cov-2. 

In their very illustrative paper [Chan et al.](#chan) show that the Sars-Cov-1 keeps its infectiousness in dry form so the dry form infection is possible in theory.

The newly proposed infection:
* Dry Particulates in Air -> Lung

where Dry Particulate is a small particulate with one or more viruses attached or possibly viruses attached to each other. 

The above infection pathway is in addition to the known aerosol pathway:
* Aerosol with Virus in Air -> Respiratory Tract

Aerosols containing particulates and dry particulates can convert to each other in the air:

* Dry Particulates -> Small Aerosol containing a Particulate (more likely in humid air, particulates act as condensation nuclei)
* Dry Particulates <- Small Aerosol containing a Particulate (more likely in dry air)

and smaller aerosol can convert to larger (see e.g. Figure 3 (C) and (D) in [marr](#marr)): 
* Small Aerosol <-> Large Aerosol (in dry air equilibrium tends to the left, in humid to the right)


The larger tend to fall to the ground since their movement is driven more by gravity (e.g. described in [tellier](#tellier)). 

Infectious aerosols can get into the air from the lower or upper respiratory tract through breathing, coughing or speaking (section [exhaling particles](#particles-spreading). Remark: Viral load in the upper respiratory tract can be attributed to [depositions](#particles-deposition) of viruses upon exhalation. This is exploited for Covid-19 swab tests in the pharynx. 

Dry particulates get into the air either by the above conversion from aerosols, probably directly from an infected lung [to be searched/calculated if this is possible, work in progress] or from dirt. Dirt can be from sedimented air particles or from faeces. [to check: vacuum cleaner particle filter size].  [to be checked if dirt is/can be relevant and what kind of dirt]


<!--

* (A) source -> aerosol  -> target<br>
* (B) source -> aerosol  --dry-air-> dry particulate -> target
* (C) source -> dry particulate -> target
* (D) source -> dry particulate --humid-air-> aerosol  -> target

##### where Target
* target = lung for a,b,c [see entry-point](#entry-point) for infection

##### and Source
* source = lung for a,b
* source = faeces [evidence from ] and possibly the lung (calculations are on the way whether the relative humidity in the lung can be low enough)
* source can also be indirect. However one has to keep in mind that for the probability to be in two digit percentages there need to be many infectious particulates in the air. 

-->



<p id="particles">---</p>

## Intermezzo: Particle Dynamics in the Respiratory Tract
Conversational remarks about how I understand particle deposition models. 

Particle deposition and clearance are possibly relevant for Covid-19 in view of:
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

How many particles are deposited/breath out in which region in/from the respiratory tract depends on various factors ([park et al](#park) have recently written a review): 

##### factors 
- particles properties such as diameter, density, form (see [sturm](#sturm)) and material([zhong18](#zhong18)])
- breathing volume and frequency [hofemeier](#hofemeier)
- air humidity and how much the air is moistened in the lung. E.g. described in an article by [zhong18](#zhong18)]
- orientation respect to gravity i.e. wether horizontal or vertical
The physiology of the airways is such that particles are absorbed and cleared out as early as possible and the heavier the earlier [Stuart](#stuart), [Balley](#bailey), [Kleinstreuer](#kleinstreuer). 

##### deposition locations

- Droplets mostly don't enter the lower respiratory tract.
- Small Aerosols can enter the lower respiratory tract. But at a size of at least 0.1 μm they are not well deposited (the Sars-Cov-2 diameter is between 50 and 200 nm) and larger aerosols are quite well cleared out [to be confirmed and citation to be added]. 
- Tiny, dry and sticky (Spike-Glycoprotein) particulates may have a higher deposition rate on the lung alveolar epithelial cells (see section [deposition](#deposition-locations) and less clearance [to be confirmed and citation to be added, work in progress].


* Locations of particles depositions for different sizes both a inhale and exhale are shown in [Kleinstreuer et al](#kleinstreuer) on page 23 are used: "Fig. 6. Particle deposition in human nasopharyngeal model: (a) nasopharyngeal; (b) tracheal; (c) generation 1; (d) generation 2; and (e) generation 3". Especially noteworthy is that upon exhale many particles are deposited in the pharynx (which is relevant for swab tests). 

* [Zhong](#zhong) et al describe that the particles can be moistened upon inhale and this has an effect on depositions locations. 

* The particles depositions aren't equal for the left and right lung and bronchus [Rahimi-Gorji](#rahimi-gorji), [kleinstreuer2017](#kleinstreuer2017)

* Particle deposition in the alveolar regions can be greatly increased upon deep inhaling [hofemeier](#hofemeier).

* [Sturm](#sturm) simulated the deposition of  non-spherical particles particles. The form factor showed to matter most for larger particles in the size of 10 micro meter. Fibers in that size were deposited early on, where as disks showed the highest deposition rate in the airway generations 20 to 25. 

### particles clearance
[in work]
##### Methods of Clearance
* clearance by mucus flow towards the alimentary system
* clearance macrophages in the mucus[to check]
* adsorption in the alveoli [to check]
* coughing

##### factors influencing clearance
* well flowing mucus (see [factors increasing the mucus flow](#factors-influencing-the-mucus-flow))
* the earlier deposited the better is the mucus clearance
* particle properties such as material (bad clearance for insoluble), form, size

### simulation methods and experiments
In her thesis [Lindstrom](#lindstrom) explaines well the principles. A recent review is from [Park and colleagues](#park). An often used model is the [ICRP Model](#bailey).

Modeling or experimentally determine the deposition rates is not easy and each method has caveats.  
##### Simulations
The airflow in the lung has variations and is complicated [Tsuda](#tsuda), [Bailey](#bailey). Often good agreement for modeling methods compared to in vivo measurements are shown, however many estimates for parameters have to be taken and thus overfitting could occur. Additionally many simplifications of relevant [factors](#factors) both for respiratory tract and particles are taken: Most modeling methods ignore the softness and dynamics of the respiratory system, except a few see [darquenne](#darquenne). Particle shape(taken into account in [sturm](#sturm)), condensation and material (both discussed in [Zhong18](#zhong18)) are mostly ignored, i.e. the simulations are done for round constant size aerosol droplets.

Traditional methods go: Model the respiratory tract as a static pipe system and do the physics [Stuart 84](#stuart),  [ICRP by Bailey](#bailey). These methods yield some differential equations. These equations are often solved/simulated with a computer-based approach e.g. Monte Carlo methods. 

Recent approaches model the respiratory tract accurately in 3D and make use of advances in computational fluid dynamics. Examples are [kleinstreuer](#kleinstreuer), [qi](#qi), [rahimi-gorji](#rahimi-gorji), [zhong18](#zhong18).

##### Experiments
- Experimental in vitro setting: Build an artificial lung and measure: [sznitman](#sznitman). 

- Experimental in vivo settings:
    * A person inhales aerosols and the deposited fraction is measured. Recent experiments are done by [Rissler et al](#rissler).
    * A person inhales some test particles and the number of absorbed particles is measured for different volumes inhaled. For small volumes, the air goes not fare into to lung and so for this part the absorption is calculated. Then the volume is increased, the adsorbed particles measured again and the next part of the lung is calculated: the previous result is subtracted and the remaining adsorption is the next deeper lung part  [reference to be added].
    * Experimental data on the regional deposition of radio-labelled aerosol particles can be derived from gamma camera images.  The limited resolution of the planar image allows no separation between the peripheral and the bronchial airways. This separation can be done by measuring the particle clearance kinetics during the first few days after inhalation[reference to be added].
    
   


<p id="habitat">-----</p>
    
## Habitat of the Betacoronavirus

### entry point
The cell entry receptor used by SARS-Cov-1 [[Jiang](#jiang)] and SARS-Cov-2 [[LiF](#lif)],[[Hoffmann](#hoffmann)] is ACE2 . 
The barrier function of the apical cell layer and in vitro cell experiments from [McCray & Co](#mccray05) show both increased apical ACE2 expression and an corresponding increased cell entry from the apical side. McCray & Co also observed that Sars-Cov-1 exits the cell on the apical side following an apical entry with a preference of more than 1000:1. (similar observations for another Coronavirinae, namely 229E,  which infects the cells, corresponding to the entry point amino-peptidase N expression, preferably from the apical surface [[McCray](#mccray)] and exits apically with a preference of 10:1 for apical entry and 5:1 for basal entry).    

### tissue distribution of ACE2
There are two common methods to measure tissue distribution of proteins:
* _antibody staining_; here anti-ACE2 antibody. Detects proteins on cell surfaces, however they just can be attached to the cell without being built into the cell membrane. . Used in the work of [Timens](#timens), [McCray](#mccray05) 
* _detect mRNA_: here ACE2 mRNA. Necessary condition for local protein expression, however not sufficient for ACE2 on apical cell surface, see e.g. [Li et al](#li)

For being an exploitable entry point, ACE2 should be built into the cell membrane and being useable from outside, see [entry point](#entry-point). So if _both_ of methods above yield positive, this is very likley. 

ACE2 is apically expressed on lower respiratory tract epithelial cells, 
Especially well-differentiated and ciliated airway epithelia [[mcray05](#mccray05)] and in alveolar epithelial type 2 cells [to check/find citation]. In the upper respiratory tract, only the basal layer of the non-keratinised squamous epithelium of the nasal and oral mucosa and the nasopharynx expresses ACE2 [Timens](#timens), [Lau](#lau). 

### distribution of infected cells and viral load

The viral loads observed in different parts of the body are consistent with airborne infection and the tissue distribution of ACE2:
* The only location where all patients had viral Sars-Cov-1 loads is the lungs [Farcas et al](#farcas). 
* For MERS-Cov [Memish et al.](#memish) found that both the viral load and the Genome Fraction obtained was higher in the lower respiratory tract (broncho-alveolar lavage fluid, tracheal fluid) than in the upper respiratory tract (nasopharyngeal swab, sputum). The three broncho-alveolar lavage fluid samples investigated, showed the highest average viral load and contained the most complete genome. <br>
Remark: Mers-Cov has a different cell entry receptor (DPP4). However the ability of a virus to efficiently takeover a cell depends not on the cell entry receptor alone (extended explanation in work). This is just a piece of evidence in the overall picture. 

That in swab tests there are viruses in the nose and the mouth can be attributed to breathing them out. [Kleinstreuer et al](#kleinstreuer) have shown that upon exhale particles are deposited in the nose. An active infection in the upper respiratory tract would likely yield viral loads in the lymph nodes too [to be confirmed, citation needed].   

<p id="evidence">-----</p>

## Evidence for the Dry Form Transmission Model

<p id="biological-properties">---</p>

### Evidence from Biological Properties

From the [Habitat of the Betacoronavirus](#habitat) lower respiratory tract entry for Sars-Cov-1/2 is obligate for infection. As described in [deposition locations](#deposition-locations) only aerosols and tiny dry particulates enter the lower respiratory tract. So the two primary transmission forms are aerosol and dry form. Since aerosols usually are cleared quite well with the mucus flow, the dry form is likely more infectious. 


<p id="spread-patterns">---</p>
    
#### Evidence from the observed Spread Patterns

The aerosol transmission explains well the observed spread patterns of influenza. Dust like spreading is explaining better following observations for the observed Betacoronaviruses spread patterns than the aerosol model:

In confined settings without special protection reproduction numbers well above the number of close contacts a person has, have been observed [Mizumoto](#mizumoto). Which is not very likely to observe with the aerosol transmission model. Since the movement of aerosols is affected by gravitation and therefore their concentration in the air quite rapidly decreases (see [model](#model) section). The movement of dry dust, on the other hand, is less affected by gravity which yields longer remaining in the air. The events of very high spreading have all been observed in cool outside temperature and heated indoor spaces which means dry and confined air. In theses settings dry dust like spreading is possible:
* Sars-Cov-1:
	- Hospitals in China [Mizumoto](#mizumoto)
    -  Long-Term Care Facility in Seattle [Honein et al](#honein)
	- Hotel in Hong Kong, especially during cooler outside temperatures [Lin](#lin), [Chan](#chan)


* Sars-Cov-2:
	- Diamond Princess Cruise Ship in Japan [Mizumoto](#mizumoto). This setting well investigated by Mizumoto and colleagues favours airborne over droplet transmission and even slightly favours Dry Form over aersol transmission since the Covid-19 spread started between passengers and not equally between passengers and personal:
        * In the droplet model, one would except the personal as a angle and starting point, since they have the most close contacts, which drive droplet transmission. 
        * In the aersol model about an equal spread would be expected. Experience from cooking smells teaches us, that aerosols tend to spread out locally.
        * Smoke diffuses entire rooms and tends to stay quite long, so spending much time in the same confined rooms is more relevant than interactions or being close but only for a short period. Therefor an initial spread in passengers is expected since they spend the time in the same areas. 
	- Music Club in Japan (see Introduction [Mizumoto](#mizumoto))
	- Church in Korea (see Introduction [Mizumoto](#mizumoto))
	- Hospitals in Nothern Italy [LE](#le)
	Mers-Cov:
	- Main spreading in Winter season and in generally dry areas.
The primary spreading in very dry (indoor) areas would also explain why the described coronaviruses diseases occurred recently, even though overall hygiene increased.  


* In settings without prior SARS experience the infection rate in health care workers is very high:
	* 2003 in South East Asia  (see Introduction [Mizumoto](#mizumoto))
	* 2019/2020 in Europe - Italy especially [LE](#le)<br>
	
	Possible Explanation: The medical staff is used to protect against aerosol infections and know to handle them. However, they are not yet used to the new spreading pattern. Consequently in all rooms of the building wearing a mask likely is key in reducing the infection rates (many cities in China reported few infections in hospitals [citation to be added]).
    
    
    
#### Further evidences

Remark: The following pieces of evidence are 'in work'. 

* In humid and warm temperature environments (above 30 degrees), there are no known events of a step increase in death numbers. [Chan](#chan) shows that warm temperatures of 33 Celsius and high relative don't yield a much faster rate of inactivation; temperatures over 38 degrees do induce a much faster inactivation [11]. A possible explanation why in humid conditions around 33 degrees there no super-spreading events observed is: In humid environments, organic particles act as condensation nuclei and therefore loose their dry form. So viruses "find" themselves within aerosols. In this case, an aerosol like spreading pattern with no super-spreading events would be expected. 

* The initial animal to human of  Sars-Cov-2 occurred in a setting of cold outside temperature and therefore dry indoor air, namely likely in the Wuhan Sea Food market. Pictures of the market suggest that the market is partly indoor and therefore likely heated. Similar transmission settings from animal to human have been likely the case for Sars-Cov-1 [citation to be added] and MERS (probably indoor camel riding arena) animal to human jumps. 


<p id="measures">-----</p>

### Suggested Protections Measures 
Supposing that the main transmission of Sars-Cov-2 is either aerosol or the proposed dry form, which is __not__ yet confirmed. This extends  [Public Advices and Suggestions](#public-advice) section. 

When avoiding the influenza aerosol spread is avoiding somebody’s reek of alcohol, then in the dry form model, this corresponds to avoiding a smoker's smoke. The latter is much more difficult since smoke remains in the air for much longer and can diffuse to other rooms. 
Just smelling would be the theoretical possibility of an infection. But for the odds to be in two digits percentages, one needs likely to be that close to a person that the cloths would be smelling. 

This yields either avoiding Sars-Cov-2 containing smoke entirely or filtering out most particulates above 200 nm. Keeping the smoke metaphor in mind, then indoor ventilation and indoor wearing a mask are key.

#### masks

Officially recommed masks, since they mitigate the infection risk. Without official recommendation, people can be put off or look afraid from masks, at least in Europe, which is not desirable. 
* [Milton et al.](#milton2013) measured the influenza viruses spread from patients with and without wearing a surgical mask. They found:
    - Surgical masks nearly eliminated viral RNA detection in the coarse aerosol fraction (greater than 5 micro meter) with a 25 fold reduction in the number of viral copies 
    -  statistically significant 2.8 fold reduction in copies detected in the fine aerosol fraction (smaller than 5 micro meter)
    - Surgical masks significantly reduced the overall number of RNA copies by 3.4 fold.
    <!--
  Assuming for  reduction of small exhaled aerosols an average of 2.5 and an average reduction of 2 for inhaling: everybody wearing a mask would yield - in theory - a reduction of a factor 5 = (2 times less particles inhaled) * (2.5 times less particles in air since less exhaled). This would be a greater reduction in the reproduction factor than  observed for other measures. A factor 5 reduction would be enough to reduce the reproduction factor below 1 if an initial value of 4 is estimated (the estimates are taken from [Ferguson, Bhatt et al](#ferguson-bhatt).-->
  
<!--  
Reasons against masks seem sometimes rather searched:
* touching more often the face. Remark: Infection is not possible by touching the skin alone, this is true for the skin in the face too. Touching into the mouth or the nose is something else, but for this masks are protective. 
* Reserve for healthcare workers is needed for the big wave. Remark: If mask are shown to help prevent the big wave in its roots, then that's the better option.-->
    

#### ventilation

* [Escombe et al](#escombe) show natural ventilation is a valid measure and that in the first few minutes of opening the windows a major part of air is exchanged ([escombe: Figure 1](#https://doi.org/10.1371/journal.pmed.0040068.g001)).
* [Salathe et al](#salathe) simulate both the airborne and droplet spread of influenza, using observed contact patters of students. They find that good ventilation can be as effective as vaccinating around half of the population. 


<p id="references">-----</p>

## References

#### Note 
* Sometimes reviews or remarks in introductions are cited which reference further to the original work. 
* References are grouped by topic. In the case where several topics apply, one has been chosen. 
* Instead of numbered the references are named by the correspondence author, the primary authors or a descriptive tag.   

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
* ##### zhang
    Epidemiological and clinical characteristics of 99 cases of 2019 novel coronavirus pneumonia in    Wuhan, China: a descriptive study <br>Chen, Nanshan et al. <br>The Lancet, Volume 395, Issue 10223, 507 - 513 https://doi.org/10.1016/S0140-6736(20)30211-7

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
    
    
### Epidemiological Patterns
    
*  ##### le
	The Lancet Editoral<strong>
	COVID-19: protecting health-care workers</strong>
	www.thelancet.com Vol 395 March 21, 2020
	https://doi.org/10.1016/S0140-6736(20)30644-9 

*  ##### mizumoto 
	Kenji Mizumoto, Gerardo Chowell<strong> Transmission potential of the novel coronavirus(COVID-19) on    board the diamond Princess Cruises Ship, 2020</strong>
	https://doi.org/10.1016/j.idm.2020.02.003
    
* ##### honein
    Temet M. McMichael et al.
    **Epidemiology of Covid-19 in a Long-Term Care Facility in King County, Washington**
    This article was published on March 27, 2020, at NEJM.org. https://doi.org/10.1056/NEJMoa2005412
    
    

  
     
     
### Phatogenesis and Viral Loads

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
    
* ##### case-series-france
    Francois-Xavier Lescure, Lila Bouadma*, Bruno Lina*, Sylvie van-der-Werf, Yazdan Yazdanpanah et al.
    **Clinical and virological data of the first cases of COVID-19 in Europe: a case series**
    Lancet Infect Dis 2020
    PublishedOnline
    March 27, 2020 https://doi.org/10.1016/ S1473-3099(20)30200-0<br>
    See Online/Comment https://doi.org/10.1016/ S1473-3099(20)30237-1
    
* ##### memish
    Ziad A. Memish, Jaffar A. Al-Tawfiq, Hatem Q. Makhdoom, Abdullah Assiri, Raafat F. Alhakeem, Ali Albarrak, Sarah Alsubaie, Abdullah A. Al-Rabeeah, Waleed H. Hajomar, Raheela Hussain, Ali M. Kheyami, Abdullah Almutairi, Esam I. Azhar, Christian Drosten, Simon J. Watson, Paul Kellam, Matthew Cotten, Alimuddin Zumla, 
    **Respiratory Tract Samples, Viral Load, and Genome Fraction Yield in Patients With Middle East Respiratory Syndrome**
    The Journal of Infectious Diseases, Volume 210, Issue 10, 15 November 2014, Pages 1590–1594, https://doi.org/10.1093/infdis/jiu292
     
* ##### to-tsang
    Kelvin Kai-Wang To*, Owen Tak-Yin Tsang*, Wai-Shing Leung, Anthony Raymond Tam, Tak-Chiu Wu, David Christopher Lung, Cyril Chik-Yan Yip, Jian-Piao Cai, Jacky Man-Chun Chan, Thomas Shiu-Hong Chik, Daphne Pui-Ling Lau, Chris Yau-Chung Choi, Lin-Lei Chen, Wan-Mui Chan, Kwok-Hung Chan, Jonathan Daniel Ip, Anthony Chin-Ki Ng, Rosana Wing-Shan Poon, Cui-Ting Luo, Vincent Chi-Chung Cheng, Jasper Fuk-Woo Chan, Ivan Fan-Ngai Hung, Zhiwei Chen, Honglin Chen, Kwok-Yung Yuen 
    **Temporal profiles of viral load in posterior oropharyngeal saliva samples and serum antibody responses during infection by SARS-CoV-2: an observational cohort study**
    Lancet Infect Dis 2020 Published Online March 23, 2020 https://doi.org/10.1016/S1473-3099(20)30196-1 SeeOnline/Comment https://doi.org/10.1016/S1473-3099(20)30235-8

    
### Biology of Coronaviruses 

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
    Xu, H., Zhong, L., Deng, J., Peng, J., Dan, H., Zeng, X., Li, T., & Chen, Q. (2020). High expression of ACE2 receptor of 2019-nCoV on the epithelial cells of oral mucosa. International journal of oral science, 12(1), 8. https://doi.org/10.1038/s41368-020-0074-x
        

### Enviromental Factors on Betacoronaviruses

* ##### chan
	K. H. Chan, J. S. Malik Peiris, S. Y. Lam, L. L. M. Poon, K. Y. Yuen, and W. H. Seto
	<strong> The Effects of Temperature and Relative Humidity on the
	Viability of the SARS Coronavirus</strong>
	Hindawi Publishing Corporation
	Advances in Virology
	Volume 2011, Article ID 734690, 7 pages
	https://doi.org/10.1155/2011/734690   
    
* ##### lin
    LIN, K., YEE-TAK FONG, D., ZHU, B., & KARLBERG, J. (2006). Environmental factors on the SARS epidemic: Air temperature, passage of time and multiplicative effect of hospital infection. Epidemiology and Infection, 134(2), 223-230. https://doi.org/10.1017/S0950268805005054   
       
    
    
### Transmission and Infection of  Respiratory Viruses</strong>

* ##### kikkert
	Marjolein Kikkert
	<strong> Innate Immune Evasion by Human Respiratory RNA Viruses</strong>
	J Innate Immun 2020;12:4–20
	https://doi.org/10.1159/000503030

* ##### tellier
    Tellier R. (2006). Review of aerosol transmission of influenza A virus. Emerging infectious diseases, 12(11), 1657–1662. 
    https://doi.org/10.3201/eid1211.060426 (seems broken)<br>
    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3372341/
  
* ##### herfst
	Kutter JS1, Spronken MI1, Fraaij PL2, Fouchier RA1, Herfst S3.
	<strong>Transmission routes of respiratory viruses among humans.</strong>
	Curr Opin Virol. 2018 Feb;28:142-151. https://doi.org/10.1016/j.coviro.2018.01.001. Epub 2018 Jan 17.
    
* ##### marr
    Yang, W., & Marr, L. C. (2011). <strong>Dynamics of airborne influenza A viruses indoors and dependence on humidity. </strong> PloS one, 6(6), e21481. https://doi.org/10.1371/journal.pone.0021481
    
* ##### pierret
    Reiman JM, Das B, Sindberg GM, Urban MD, Hammerlund MEM, et al. (2018) <strong>Humidity as a non-pharmaceutical intervention for influenza A.</strong> PLOS ONE 13(9): e0204337. https://doi.org/10.1371/journal.pone.0204337

* ##### myatt
    Myatt, T. A., Kaufman, M. H., Allen, J. G., MacIntosh, D. L., Fabian, M. P., & McDevitt, J. J. (2010).<strong> Modeling the airborne survival of influenza virus in a residential setting: the impacts of home humidification.</strong> Environmental health : a global access science source, 9, 55. https://doi.org/10.1186/1476-069X-9-55


### Droplet and Aerosol Transformations

* ##### marawska06
    Morawska, L. (2006), Droplet fate in indoor environments, or can we prevent the spread of infection?. Indoor Air, 16: 335-347. https://doi.org/10.1111/j.1600-0668.2006.00432.x
    
    

### Exhaled Breath Condensate and Virus Shedding

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
    
    
    
### Clearance of the Respiratory Tract

* ##### yuen
     Kelvin K. W. To, Ivan F. N. Hung, Iris W. S. Li, Kar-Lung Lee, Chi-Kwan Koo, Wing-Wa Yan, Raymond Liu,Ka-Ying Ho, Kwok-Hong Chu, Chi-Leung Watt, Wei-Kwang Luk, Kang-Yiu Lai, Fu-Loi Chow, Thomas Mok, Tom Buckley, Jasper F. W. Chan, Samson S. Y. Wong, Bojian Zheng, Honglin Chen, Candy C. Y. Lau, Herman Tse, Vincent C. C. Cheng, Kwok-Hung Chan, Kwok-Yung Yuen, and the Pandemic H1N1 Study Grou <strong>
    Delayed Clearance of Viral Load and Marked Cytokine Activation in Severe Cases of Pandemic H1N1 2009 Influenza Virus Infection</strong> Clinical Infectious Diseases 2010;50:850–859
􏰀 2010 by the Infectious Diseases Society of America https://doi.org/10.1086/650581 

* ##### hong
    Hyungseok Seo, Sung-Hoon Kim, Jae-Hyung Choi, Jeong-Yeon Hong and Jai-Hyun Hwang
    <strong>Effect of heated humidified ventilation on bronchial mucus transport velocity in general anaesthesia: A randomized trial</strong> Journal of International Medical Research 2014, Vol. 42(6) 1222–1231 ! The Author(s) 2014 Reprints and permissions: sagepub.co.uk/journalsPermissions.nav https://doi.org/10.1177/0300060514548291   
    
* ##### forbes
    A. R. FORBES, M.B., CH.B., F.F.A.R.C.S., HUMIDIFICATION AND MUCUS FLOW IN THE INTUBATED TRACHEA, BJA: British Journal of Anaesthesia, Volume 45, Issue 8, August 1973, Pages 874–878, https://doi.org/10.1093/bja/45.8.874
    
* ##### hasani
    Hasani, A., Chapman, T., McCool, D., Smith, R., Dilworth, J., & Agnew, J. (2008). Domiciliary humidification improves lung mucociliary clearance in patients with bronchiectasis. Chronic Respiratory Disease, 81–86. https://doi.org/10.1177/1479972307087190
    
* ##### nakagawa
    Janaína Proença de Oliveira-Maul, Heráclito Barbosa de Carvalho, Danielle Miyuki Goto, Raphaela Mendonça Maia, Claudia Fló, Viviane Barnabé, Denise Reis Franco, Simon Benabou, Monica Rodrigues Perracini, Wilson Jacob-Filho, Paulo Hilário Nascimento Saldiva, Geraldo Lorenzi-Filho, Bruce K. Rubin, Naomi Kondo Nakagawa, <strong>Aging, Diabetes, and Hypertension Are Associated With Decreased Nasal Mucociliary Clearance </strong>, Chest,Volume 143, Issue 4,2013,Pages 1091-1097,ISSN 0012-3692, https://doi.org/10.1378/chest.12-1183. (http://www.sciencedirect.com/science/article/pii/S0012369213602226)
    
* ##### houtmeyers
    E Houtmeyers, R Gosselink, G Gayan-Ramirez, M Decramer <strong>Regulation of mucociliary clearance in health and disease </strong> European Respiratory Journal May 1999, 13 (5) 1177-1188;
    
* ##### leopold-mahony-lian
    Leopold, P. L., O'Mahony, M. J., Lian, X. J., Tilley, A. E., Harvey, B. G., & Crystal, R. G. (2009). Smoking is associated with shortened airway cilia. PloS one, 4(12), e8157. https://doi.org/10.1371/journal.pone.0008157
  
* ##### luo
    Yueling Ma, Yadong Zhao, Jiangtao Liu, Xiaotao He, Bo Wang, Shihua Fu, Jun Yan, Jingping Niu, Ji Zhou, Bin Luo, <strong>Effects of temperature variation and humidity on the death of COVID-19 in Wuhan, China</strong>, Science of The Total Environment, 2020,138226,ISSN 0048-9697, https://doi.org/10.1016/j.scitotenv.2020.138226.
(http://www.sciencedirect.com/science/article/pii/S0048969720317393)
    


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

* ##### kleinstreuer
	V K, Arun & Kleinstreuer, Clement & Kleinstreuer, Nicole & Pham, Wellington & Sadikot, Ruxana. (2018). 
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
    Xiaole Chen, Clement Kleinstreuer, Wenqi Zhong, Yu Feng & Xianguang Zhou (2018) <strong>Effects of thermal airflow and mucus-layer interaction on hygroscopic droplet deposition in a simple mouth–throat model</strong>, Aerosol Science and Technology, 52:8, 900-912, DOI: 10.1080/02786826.2018.1476751
    
* ##### rahimi-gorji
	Mohammad Rahimi-Gorji, Tahereh B. Gorji n, Mofid Gorji-Bandpy
	<strong>Details of regional particle deposition and airflow structures
	in a realistic model of human tracheobronchial airways: two-phase flow simulation</strong>
	http://dx.doi.org/10.1016/j.compbiomed.2016.04.017
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
    
       
    
### Control and Containing Measures

* ##### noakes
    Gilkeson, CA, Camargo-Valero, MA, Pickin, LE and Noakes, CJ (2013)
    Measurement of ventilation and airborne infection risk in large naturally ventilated
    hospital wards. Building and Environment, 65. 35 – 48. https://dx.doi.org/10.1016/j.buildenv.2013.03.006
    
* ##### escombe
    Escombe, A. R., Oeser, C. C., Gilman, R. H., Navincopa, M., Ticona, E., Pan, W., Martínez, C., Chacaltana, J., Rodríguez, R., Moore, D. A., Friedland, J. S., & Evans, C. A. (2007). Natural ventilation for the prevention of airborne contagion. PLoS medicine, 4(2), e68. https://doi.org/10.1371/journal.pmed.0040068
    
* ##### salathe
    Smieszek, T., Lazzari, G., & Salathé, M. (2019). Assessing the Dynamics and Control of Droplet- and Aerosol-Transmitted Influenza Using an Indoor Positioning System. Scientific reports, 9(1), 2185. https://doi.org/10.1038/s41598-019-38825-
    
    





