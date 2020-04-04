# Thoughts and Ideas about Betacoronaviruses and Covid-19

## Note
* If the page is not shown correctly or either GitHub Preview or Markdown is preferred, read on https://github.com/forestgrape/coronavirus/blob/master/index.md
* This is work in progress, so mistakes of any form are likely.  
* The page started out with the proposal for the Dry Form Transmission. Because more content have been added since, the page will soon be split up into different topics. 
* These are <strong>hypothesis</strong> and <strong>research ideas</strong> but <strong>not</strong> double checked facts. They are put here as ideas to be checked and evaluated. Pointing out mistakes and feedback are <strong>welcome</strong>.
<!-- * The page is soon going to be split up into different topics. -->

<p id="content">-----</p> <!-- workaround to set ids, since github preview keeps cases and github pages converts to all lower case. For the same reason, some titles are all lower case since the auto-generated ids are used. -->

## Content

* [Updates](#updates)
* [Public Suggestions](#public-advice)
* [Ideas to Explore](#ideas)
    * [The Better Ventilators](#better-vents)
* [Infection Paths of Sars-Cov-2 and Proposal of a Dry Form Transmission Model](#proposal)
    * [Abstract](#abstract)
    * [Model](#model)
    * [Intermezzo Particle Deposition and Clearance in the Respiratory Tract](#particle-deposition)
    * [Evidence for the Dry Form Transmission Model](#evidence)
        - [Evidence from Biological Properties](#biological-properties)
        - [Evidence from the observed Spread Patterns](#spread-patterns)
* [Suggested Protections Measures](#measures)
* [References](#references)

<p id="updates">-----</p> 

## Updates and Added Content
- 4.4.20 Added Section Ideas to Explore
    - first topic is: The better vents
- 25/26/27/30.3.20:  Corrected and looked up aerosol/particulate inhalation. 
    In the first version, I had written that aerosols don't enter the lungs. False. Aerosols DO enter the lungs. The train of thought yielding this mistake: Entering the lungs is halfway entering the body. So there must have been enough evolutionary pressure to prevent this. This is double wrong:
    1. The evolutionary roots of the lungs are the alimentary system, so substances coming in were just cleared down. Even as lungs and the alimentary separated this process stayed. As we often do too, evolution usually gradually bends things right, rather than rebuilding from scratch.  
    2. The lungs developed before we were upright and in the original case the clearance of aerosols earlier and better; shown for mice in [Kleinstreuer](#kleinstreuer). Ciliate based movement works even uphill, as ski tourers know. But there are limits. A workaround evolved: in humans, smallest particulates are cleared by macrophages [citation to be added].  
    
#### Minor Updates
- 4.4.20 Updated section evidences from spread patterns (Cruise Ship)
- 27-4.4.20: Public Advice extended and clarified. 
- 2.4.20 Short notice about masks. 
- 31.3.20: Section and references how ventilation clears indoor air and is effective for containing airborne infection pathways. 
- 30.3.20: Reordered section Particle Deposition and added more references. 



<p id="public-advice">-----</p>

## Public Suggestions, Advices and Thoughts
Do NOT take Covid-19 lightly: it can be very serious in the short-term and whether there are possible long-term effects is unknown. But no reason to panic neither, unlike viruses we've got a mind and better communication. Time to act mindfully and work together.  
   
- The coronavirus transmission can be smoke-like. A neighbours candle won't harm through doors, but if you are at a place with an indoor barbecue, smoke travel to the next floor. For Covid-19 this means in place with possibly many infected people e.g. a hospital treating Covid-19 patients, wearing a mask in <strong>all</strong> rooms is important.

- Wear a mask in indoor places where infectious people can be. The longer you stay, the more people there are and the less ventilation there is, the more important, since the infection risk increases with the amount of indoor air breathed. Or best avoid crowded indoor spaces entirely. 

    Reuse the mask; but put it into 60 to 70-degree hot water for 30 minutes every day  or wash it with soap. [Chan et al.](#chan) have shown that this inactivates the coronavirus (Remark: shown for Sars-Cov-1).  From time to time you should change it or wash it very well - there's more than Sars-Cov-2, don't forget that!

- Distancing reduces infection risk. 

- Outside is safe,  <strong>if distance is kept</strong>. However beware the corridor and stairwell, so going often in and out is not the best idea. Public transport and a crowded cars are best avoided too. Ideally walk or cycle directly from home. Taking into consideration, that most people especially children will and should go outside right where they live, it is polite to make limited usage of cars for leisure in cities - it is nicer and safer with light traffic. 
    
- Ventilate your rooms regularly by opening all windows for 5 minutes.  If possibly  infected, always ventilate your room before opening the door of your room and your flat. [Ventilation](#ventilation) has been shown to be effective. 


- Don't have very dry air inside; drying your frequently washed cloths inside keeps the air humid. In dry air both dust and viruses stay longer in the air. 

- Keep proper hygiene. Especially wash your hands well after toilet. 
Hygiene is important because:
   * transmission pathways of Covid-19 are still unclear. So just avoid them all. 
   * it is known that viruses causing common cold are transmitted through droplets. These viruses can weaken the immune system [[kikkert](#kikkert)] and therefore could induce an increased infection risk. 
   * avoiding a common cold or flu is important, because Covid-19 can be somewhat similar. This means quarantine for you and your close contacts and figuring out all the people you could have infected and informing them.   
   
  But do <strong>not</strong> rely on hygiene alone, since there is strong evidence, that the majority of [transmissions occur through indoor air](#spread-patterns) and not with droplets.
  
- Public Transport: 
     * Ventilation is crucial in public transport. If possible open the windows at least from time to time, this works well thanks to the outside airflow. Don't put ventilation on circulation. Put ventilation to max.  Wear a mask.
     * If there are old toilets, that go to the rails, don't use them, never use to shit!



- Covid-19 is different from a common respiratory disease. It doesn't start with a soar throat nor with a runny nose, it starts from within, from the lungs. Early symptoms can be some chill (because your body is increasing the temperature to fight the viruses) or some strange feeling sort like a small poisoning, like having eaten something rotten or drunken too much. Feeling tired could be a symptom too. These symptoms are not specific to Covid-19 though, they can have other causes: Cold air, having eaten something rotten or not enough sleep. Early symptoms can be easily overlooked, so the first thing to notice may very well be a soar throat or loss of smell/taste - these symptoms come when high numbers of viruses are breathed up and reach the mouth and the nose, at this time, one is already shedding many viruses. <br>
    
    Observe your body, write down the observations and if possible measure:
    Measure your temperature several times every day and best in the same situations and record the values. As a slightly increased temperature can be an early sign of a possible Sars-Cov-2 infection. This can be as low as one or only half a degree, going up from 35 to 35.5 or 36. Keep in mind that the temperature varies over the course of a day and with the activities performed. That's why several measurements. <br>
    It is crucial to measure the temperature accurately since many people have only a slightly increased temperature ([Zhang](#zhang), [Wong](#wong), [Zhong](#zhong)), which doesn't "meet the definition of fever". Side note: It's time for medicine to move on from digitalization and black-white schemes to the continuous colourspace of Bayesian statistics. The more common Covid-19 in your region is, the more likely it is that an observed infection is Covid-19. In my case - South East Switzerland, a day hike away from Nothern Italy - Covid-19 is currently the most prevalent disease. 

- Live a healthy lifestyle 
    * sleep enough, eat healthily, relax and do some sport
    
    and avoid anything that weakens your immune system:
    * avoid excessive caffeine, excessive sport (if in a risk region), excessive alcohol ...
    * try reducing stress for yourself and others. Trying too hard won't help though. 
    
  Stress is an important factor, who hasn't experienced falling sick after a stressful period? It's about balancing the different kinds of risks and chances we have been and are facing through our entire evolution. 


<p id="ideas"> ---</p>

# Ideas to Explore

<p id="better-vents"> -----</p>

## The Better Ventilators

### Causes for severe Outcome of Covid-19
A main cause of a severe Covid-19 and death from Covid-19 is an acute respiratory distress syndrome (ARDS). The reason for developing ADRS seems to be a high number of viruses distributed across the entire lungs and delayed clearance of viruses both for Covid-19 and influenza:

- In most severe cases (especially, where ADRS is observed and mechanical ventilation is needed) the images show bilateral lung lesions/patches [zhong20](#zhong).
- [Yuen et al](#yuen) found a high viral load for patients with an ADRS . 

For the widespread viral distributions in lung evident reasons would be:

- increased viral growth of viruses in the cells. 
- decreased mucus clearance. 

For the increased growth, there are counter arguments:

- diminished immune system is a major risk factor may be a risk factor for severe Covid-19 but there is no strong relation to ADRS
- patients with ADRS seem not to have especially low antibody levels [citation on the way]. 
- in young people the cell machinery tends to be more performant. So in theory viruses could spread more quickly. 

<!--There is evidence however that the cytokine -->

However there is evidence for a decreased mucus production and clearance:
* observed for influenza by [Yuen et al](#yuen)
* main factors known to decrease the mucus clearance are main risk factor for developing an ARDS, both for influenza and Covid-19. For more detail on factors see [appendix](#appendix).
    * intern factors:
        - age
        - obesity
        - diabetes
        - hypertension/arteriosclerosis
        (see factors below, work in progress). 
    * extern factors:
         - dry air 
             * humidified air increase mucus transport [hong14](#hong14) 
             * generally fare fewer deaths indicating a lower death-rate in humid air countries.There is a lower death-rate in Israel than in Norway, two countries that both have good testing rates and a good health care systeme. 
* viruses early on in the alimentary seem not to indicate a severe outcome
    * there's indication that patients with early detection of viruses in stool, do not have worse outcome [case-series-france](#case-series-france)
    * diarrhea is not risk for ADRS in influenza [Yuen](#yuen). 
    * increased nausea or vomiting seem to be no indication for a severe disease outcome [zhong20](#zhong)(despite these indicating higher viral loads in the stomach, so viruses are just better cleared to the alimentary). However vomiting a slight indication for ADRS in influenza [Yuen](#yuen)

### Treatment Goals
Therefore one of main goals in the treatment should be increasing the mucus flow from early on. 

### Treatment Methods 

#### Humidify
Luckily the extern factor humid air, can be influenced e.g. with humidifiers as described in [hong 2014](#hong) or steam inhalation in the traditional way with a pot of hot water and a towel could help too. Additionally the patients should be as horizontal as possible or even slightly heads down to have gravity in the right direction.  

This treatment should both increase the well-being of patients (swiftly, especially if used early on) as well as the overall prognosis. 

#### Mechanical Ventilators
Mechanically ventilated patients could have a decrease mucus clearance in the respiratory tract, at least they exhale less particles: "Mechanically ventilated patients exhibit decreased particle flow in exhaled breath as compared to normal breathing patients" by [Lindstedt and colleagues](#lindstedt). That has to be taken into account. 

<p id="appendix-vents>---</p>

### Appendix for The Better Ventilators [in work]

#### Factors Associated to severe Covid-19:
Just indications are listened and no special statistical testing has been done. To do the statistics ideally one takes into account correlations between the various factors too. 
Sources: [zhong](#zhong), [more on the way] 
- Diabetes
- Age
- Chronic heart disease   
- the antibody response in severe cases is the same or even stronger as in mild cases    
    
#### Factors Associated with ADRS in Influenza [yuen](#yuen)   
* The following characteristics are observed in the  paper from Yuen et al.:
    - For patient developing a ARDS coughing was more common than for patients, who didn't develop an ARDS. Since coughing is an emergency measure of the body to clear respiratory tract this an indication of bad clearance. 
    - The Nasopharyngeal Viral load was even a little higher in the group, who didn't develop an ARDS.
    - The tracheal viral load was much higher in the ARDS groups(less clearance!)
    -Diabetis, Age, Chronic hear disease positively correlate with ARDS development. 



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
* the entry receptor of Sars-Cov-1/2 (ACE2) distribution in body tissues and the observed viral loads in different organs indicate that Sars-Cov-1/2 has the lower respiratory tract as the obligate entry point.  Particle deposition at inhalation, which shows that mainly aerosols and dry particulates are entering the lower respiratory tract, suggests that these two are the only Sars-Cov transmitters. The viral loads in the pharynx are in agreement with experiments showing that upon exhalation particles are deposited there. 

The overall argumentation suggests, that the most relevant transmission models are aerosol and the proposed dry form. 

Based on these findings, recommendations for containing the 2020 spread of Sars-Cov-2 are given. Key is indoor ventilation and wearing a mask in 'risky' indoor spaces. 



<p id="model">-----</p>

## Model

In the following, a model of dry form transmission of Sars-Cov-1 and Sars-Cov-2 is proposed. The virus is attached to dry particulates or even just as a single particle. These dry particles dust like fly around or in the case of tiny particulates diffuse smoke like around. This yields a different transmission pattern than the aerosol [[Tellier](#tellier)], which is however still a relevant transmission pathway. The droplet model is likely to be less relevant, due to the obligate lower respiratory tract [entry](#entry) for Sars-Cov-2. 

In their very illustrative paper [Chan et al.](#chan) show that the Sars-Cov-1 keeps its infectiousness in dry form so the dry form infection is possible in theory.

The newly proposed infection:
* Dry Particulates in Air -> Lung

where Dry Particulate is a small particulate with one or more viruses attached or possibly viruses attached to each other. 

The above infection pathway is in addition to the known aerosol pathway:
* Aersol with Virus in Air -> Respiratory Tract

Aerosols containing particulates and dry particulates can convert to each other in the air:

* Dry Particulates -> Small Aersol containing a Particulate (more likely in humid air, particulates act as condensation nuclei)
* Dry Particulates <- Small Aersol containing a Particulate (more likely in dry air)

and smaller aerosol can convert to larger (see e.g. Figure 3 (C) and (D) in [marr](#marr)): 
* Small Aerosol <-> Large Aerosol (in dry air equilibrium tends to the left, in humid to the right)


The larger tend to fall to the ground since their movement is driven more by gravity (e.g. described in [tellier](#tellier)). 

Infectious aerosols can get into the air from the lower or upper respiratory tract through breathing, coughing or speaking (section [exhaling particles](#exhaling-particles). In the upper respiratory tract there are viruses since particles exhaled from the lung are often [deposited](#depositions) in the upper respiratory tract. This is exploited for Covid-19 swab tests in the pharynx. 


Dry particulates get into the air either by the above conversion from aerosols, probably directly from an infected lung [to be searched/calculated if this is possible, work in progress] or from dirt. Dirt can be from sedimented air particles on the floor or fomites or from faeces. [to check: vacuum cleaner particle filter size].  [to be improved and check if dirt is relevant]


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



<p id="particle-deposition">---</p>

## Intermezzo Particle Dynamics in the Respiratory Tract
Conversational remarks about how I understand particle deposition models. 

Particle deposition and clearance are possibly relevant for Covid-19 in view of:
* infection pathway
* spread within the lower respiratory tract (pathogenesis)
* spread to the pharynx (swab test and transmission)
* spread out of the body (transmission)
* depositions of medicaments for the treatment


How many particles are deposited/breath out in which region in/from the respiratory tract depends on various factors ([park et al](#park) have recently written a review). 

### factors
- particles properties such as diameter, density, form and material
- breathing volume and frequency [hofemeier](#hofemeier)
- air humidity and how much the air is moistened in the lung. E.g. described in an article by [zhong18](#zhong18)]
- orientation respect to gravity i.e. wether horizontal or vertical



### exhaling particles

#### particle origns
* Larger particles i.e. droplet are mostly spread at coughing and speaking. Coughing yields mostly particles from the upper respiratory tract. 
* Small aersols from the lower respiratory tract (<1 micro meter) are spread with breathing. So Covid-19 can be spread with breathing alone [larsson](#larsson), [morawska](#morawska) . 

#### experiments for spread 

* [larsson et al](#larsson) determined the origin of particles by measurement of the lipid composition. They found that particles from the deep lungs are mainly exhaled upon breathing alone and not when speaking or coughing.

* [fabian et al](#fabian) found that the number of particles exhaled is very individual. Differences greater than a factor of 500 were observed. A tendency for a positive correlation with age was observed. 

* [milton et al](#milton2018) observed that the aerosol amount exhaled correlated both with coughing and BMI. Coughing correlated with RNA shedding. However, without coughs, there are small infectious aerosols exhaled too. 


### deposition patterns and locations of particles

* Locations of particles depositions for different sizes both a inhale and exhale are shown in [Kleinstreuer et al](#kleinstreuer) on page 23 are used: "Fig. 6. Particle deposition in human nasopharyngeal model: (a) nasopharyngeal; (b) tracheal; (c) generation 1; (d) generation 2; and (e) generation 3". Especially noteworthy is that upon exhale many particles are deposited in the pharynx (which is relevant for swab tests). 

* [Zhong](#zhong) et al describe that the particles can be moistened upon inhale and this has an effect on depositions locations. 

* The particles depositions aren't equal for the left and right lung and bronchus [Rahimi-Gorji](#rahimi-gorji), [kleinstreuer2017](#kleinstreuer2017)

* Particle deposition in the alveolar regions can be greatly increased upon deep inhaling [hofemeier](#hofemeier).

#### methods and experiments for depositions
In her thesis [Lindstrom](#lindstrom) explaines well the principles. A recent review is from [Park and coll](#park). An often used model is the [ICRP Model](#bailey).

Modeling or experimentally determine the deposition rates is not easy and each method has caveats. The airflow in the lung has variations and is complicated [Tsuda](#tsuda), [Bailey](#bailey). Often good agreement for modeling methods compared to in vivo measurements are shown, however many estimates for parameters have to be taken and thus overfitting could occur. Additionally, most modeling methods ignore the softness and dynamics of the respiratory system - except a few see [darquenne](#darquenne). Particle shape, condensation and material is rarely taken into account, i.e. the experiments are done for round constant size aerosol droplets.

- Model the respiratory tract as a static pipe system and do the physics [Stuart 84](#stuart),  [Bailey](#bailey). These methods yield some differential equations. These equations can be solved/simulated with a computer-based approach e.g. Monte Carlo methods. 

    Recent approaches model the respiratory tract accurately in 3D and make use of advances in computational fluid dynamics. Examples are [kleinstreuer](#kleinstreuer), [qi](#qi), [rahimi-gorji](#rahimi-gorji), [zhong18](#zhong18).
    
- Experimental in vitro setting: Build an artificial lung and measure: [sznitman](#sznitman). 

- Experimental in vivo settings:
    * A person inhales aerosols and the deposited fraction is measured. Recent experiments are done by [Rissler et al](#rissler).
    * A person inhales some test particles and the number of absorbed particles is measured for different volumes inhaled. For small volumes, the air goes not fare into to lung and so for this part the absorption is calculated. Then the volumina is increased, the adsorbed particles measured again and the next part of the lung is calculated: the previous result is subtracted and the remaining adsorption is the next deeper lung part  [refernce to be added].
    * Experimental data on the regional deposition of radiolabelled aerosol particles can be derived from gamma camera images.  The limited resolution of the planar image allows no separation between the peripheral and the bronchial airways. This separation can be done by measuring the particle clearance kinetics during the first few days after inhalation[reference to be added].
    


<p id="evidence">-----</p>

## Evidence for the Dry Form Transmission Model

<p id="biological-properties">---</p>

### Evidence from Biological Properties
#### entry point
The cell entry receptor used by SARS-Cov-1 and SARS-Cov-2 is ACE2 [LiF](#lif),[Hoffmann](#hoffmann),[Jiang](#jiang). ACE2 is apically expressed on lung alveolar epithelial cells [Timens](#timens). In the upper respiratory tract, only the basal layer of the non-keratinized squamous epithelium of the nasal and oral mucosa and the nasopharynx expresses ACE2 [Timens](#timens),[Lau](#lau). Both the barrier function of the apical cell layer and the fact that another Coronavirinae, namely 229E, infects the cells from the apical surface [[McCray](#mccray)], indicate that this is the case too for Betacoronaviruses. Therefore - to achieve infection - SARS-Cov-1 and SARS-Cov-2 need to enter the lower respiratory tract. 

This is consistent with the viral loads observed in different parts of the body: 
* The only location where all patients had viral Sars-Cov-1 loads is the lungs [Farcas et al](#farcas). 
* For MERS-Cov both the viral load and the Genome Fraction obtained was higher in the lower respiratory tract (bronchoalveolar lavage fluid, tracheal fluid) than in the upper respiratory tract (nasopharyngeal swab, sputum) [memish](#memish). The three bronchoalveolar lavage fluid samples investigated, showed the highest average viral load and contained the most complete genome. <br>
Remark: Mers-Cov has a different cell entry receptor (DPP4). However the ability of a virus to efficiently takeover a cell depends not on the cell entry receptor alone (extended explanation in work). This is just a piece of evidence in the overall picture. 

That in swab tests there are viruses in the nose and the mouth can be attributed to breathing them out. [Kleinstreuer et al](#kleinstreuer) have shown that upon exhale particles are deposited in the nose. An active infection in the upper respiratory tract would likely yield viral loads in the lymph nodes too [to be confirmed, citation needed].   

From the above argumentation lower respiratory tract entry for Sars-Cov-1/2 is obligate for infection. 
The physiology of the airways is such that particles are absorbed and cleared out as early as possible and the heavier the earlier [Stuart](#stuart), [Balley](#bailey), [Kleinstreuer](#kleinstreuer). 
- Droplets mostly don't enter the lower respiratory tract.
- Small Aerosols can enter the lower respiratory tract. But at a size of at least 0.1 μm they are not well deposited (the Sars-Cov-2 diameter is between 50 and 200 nm) and larger aerosols are quite well cleared out [to be confirmed and citation to be added]. 
- Tiny, dry and sticky (Spike-Glycoprotein) particulates may have a higher deposition rate on the lung alveolar epithelial cells and less clearance [to be confirmed and citation to be added, work in progress]. <br><br>


<p id=spread-patterns>---</p>
    
#### Evidence from the observed Spread Patterns

The aerosol transmission explains well the observed spread patterns of influenza. Dust like spreading is explaining better following observations for the observed Betacoronaviruses spread patterns than the aerosol model:

In confined settings without special protection reproduction numbers well above the number of close contacts a person has, have been observed [Mizumoto](#mizumoto). Which is not very likely to observe with the aerosol transmission model. Since the movement of aerosols is affected by gravitation and therefore their concentration in the air quite rapidly decreases (see [model](#model) section). The movement of dry dust, on the other hand, is less affected by gravity and therefore remains in the air much longer. The events of very high spreading have all been observed in cool outside temperature and heated indoor and therefore dry and confined air. This en so dry dust like spreading is possible:
* Sars-Cov-1:
	- Hospitals in China [Mizumoto](#mizumoto)
    - Hospital in Seattle [to added]
	- Hotel in Hong Kong, especially during cooler outside temperatures [Lin](#lin), [Chan](#chan)


* Sars-Cov-2:
	- Diamond Princess Cruise Ship in Japan [Mizumoto](#mizumoto). This setting well investigated by Mizumoto andn colleagues provides favours airborne over droplet transmission and even slightly favours Dry Form over aersol transmission.The Covid-19 spread started between passengers and not equally between passengers and personal.
        * In the droplet model, one would except the personal as a angle and starting point, since they have the most close contacts enabling droplet transmission. 
        * In the aersol model at most an equal spread would be expected. Experience from cooking smells teaches us, that aerosols tend to spread out locally.
        * For a smoke like transmission - smoke diffuses whole rooms and tends to stay quite long, so spatial is more relevant than temporal - an initial spread in passangers is expected since they spend the time in the same areas. 
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

* In humid and warm temperature environments (above 33 degrees), there are no known events of a step increase in death numbers. [Chan](#chan) shows that warm temperatures of 33 Celsius and high relative don't yield a much faster rate of inactivation; temperatures over 38 degrees do induce a much faster inactivation [11]. A possible explanation why in humid conditions around 33 degrees there no super-spreading events observed is: In humid enviroments, organic particles act as condensation nuclei and therefore loose their dry form. So viruses "find" themselves within aerosols. In this case, an aerosol like spreading pattern with no super-spreading events would be expected. 

* The initial animal to human of  Sars-Cov-2 occurred in a setting of cold outside temperature and therefore dry indoor air, namely likely in the Wuhan Sea Food market. Pictures of the market suggest that the market is partly indoor and therefore likely heated. Similar transmission settings from animal to human have been likely the case for Sars-Cov-1 [citation to be added] and MERS (probably indoor camel riding arena) animal to human jumps. 


<p id="measures">-----</p>

### Suggested Protections Measures 
Supposing that the main transmission of Sars-Cov-2 is either aerosol or outlined dry form, which is <strong>not</strong> yet confirmed. This extends  [Public Advices and Suggestions](#public-advice) section. 

When avoiding the influenza aerosol spread is avoiding somebody’s reek of alcohol, then in the dry form model, this corresponds to avoiding a smoker's smoke. The latter is much more difficult since smoke remains in the air for much longer and can diffuse to other rooms. 
Just smelling would be the theoretical possibility of an infection. But for the odds to be in two digits percentages, one needs likely to be that close to a person that the cloths would be smelling. 

This yields either avoiding Sars-Cov-2 containing smoke entirely or filtering out most particulates above 200 nm. Keeping the metaphor in mind that the right indoor ventilation and indoor wearing a mask is key.

#### masks (work in progress)

Officially recommed mask, since they mitigate the infection risk. Without official recommendation, people can be put off or look afraid from masks, at least in Europe, which is not desirable. 
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
* Instead of numbered the references are named by the correspondence author or a descriptive tag.   

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

* ##### zhang
    Epidemiological and clinical characteristics of 99 cases of 2019 novel coronavirus pneumonia in    Wuhan, China: a descriptive study <br>Chen, Nanshan et al. <br>The Lancet, Volume 395, Issue 10223, 507 - 513
    https://doi.org/10.1016/S0140-6736(20)30211-7

* ##### zaki
    Wun-Ju Shieh MD, MPH, PhDa, Cheng-Hsiang Hsiao MDb, Christopher D. Paddock MDa,
    Jeannette Guarner MDa, Cynthia S. Goldsmith MSa, Kathleen Tatti PhDa,
    Michelle Packard MPHa, Laurie Mueller BA, BSa, Mu-Zong Wub, Pierre Rollin MDc,
    Ih-Jen Su MD, PhDd, Sherif R. Zaki MD, PhDa, <strong>Immunohistochemical, in situ hybridization,
    and ultrastructural localization of SARS-associated
    coronavirus in lung of a fatal case of severe acute
    respiratory syndrome in Taiwan</strong>Human Pathology (2005) 36, 303 – 309
    https://doi.org/10.1016/j.humpath.2004.11.006  

* ##### shi
    Heshui Shi*, Xiaoyu Han*, Nanchuan Jiang*, Yukun Cao, Osamah Alwalid, Jin Gu, Yanqing Fan†, Chuansheng Zheng†
    <strong> Radiological findings from 81 patients with COVID-19
    pneumonia in Wuhan, China: a descriptive study</strong>
    Lancet Infect Dis 2020
    Published Online
    February 24, 2020
    https://doi.org/10.1016/S1473-3099(20)30086-4
 
* ##### farcas
    Farcas GA, Poutanen SM, Mazzulli T, Willey BM, Butany J,
    Asa SL, Faure P, Akhavan P, Low DE, Kain KC: <strong>Fatal severe
    acute respiratory syndrome is associated with multiorgan
    involvement by coronavirus.</strong> J Infect Dis 2005, 191:193-197
    https://doi.org/10.1086/426870

* ##### wong
     SARS-CoV-2 Infection in Children</strong>
     This letter was published on March 18, 2020, at NEJM.org.
     https://doi.org/10.1056/NEJMc2005073
     
* ##### zhong
    W. Guan, Z. Ni, Yu Hu, W. Liang, C. Ou, J. He, L. Liu, H. Shan, C. Lei, D.S.C. Hui, B. Du, L. Li, G. Zeng, K.-Y. Yuen, R. Chen, C. Tang, T. Wang, P. Chen, J. Xiang, S. Li, Jin-lin Wang, Z. Liang, Y. Peng, L. Wei, Y. Liu, Ya-hua Hu, P. Peng, Jian-ming Wang, J. Liu, Z. Chen, G. Li, Z. Zheng, S. Qiu, J. Luo, C. Ye, S. Zhu, and N. Zhong <strong>Clinical Characteristics of Coronavirus Disease 2019 in China</strong>
    February 28, 2020,last updated on March 6, 2020, at NEJM.org.
    https://doi.org/10.1056/NEJMoa2002032
     
     
### Phatogenesis and Viral Loads

* ##### lau
	Yu Lung Lau and JS Malik Peiris <strong>Pathogenesis of severe acute respiratory syndrome</strong>
	Current Opinion in Immunology 2005, 17:404–410
	https://doi.org/10.1016/j.coi.2005.05.009
    
* ##### peiris
    J S M Peiris, Y Guan, K Y Yuen
    <strong>Severe acute respiratory syndrom</strong>
    nature medicine, 30 November 2004
    https://doi.org/10.1038/nm1143
    
* ##### case-series-france
    Francois-Xavier Lescure*, Lila Bouadma*, Bruno Lina*, Sylvie van-der-Werf*, Yazdan Yazdanpanah* et al.
    <strong>Clinical and virological data of the first cases of COVID-19 in Europe: a case series</strong>
    Lancet Infect Dis 2020
    PublishedOnline
    March 27, 2020 https://doi.org/10.1016/ S1473-3099(20)30200-0<br>
    See Online/Comment https://doi.org/10.1016/ S1473-3099(20)30237-1
    
* ##### memish
    Ziad A. Memish, Jaffar A. Al-Tawfiq, Hatem Q. Makhdoom, Abdullah Assiri, Raafat F. Alhakeem, Ali Albarrak, Sarah Alsubaie, Abdullah A. Al-Rabeeah, Waleed H. Hajomar, Raheela Hussain, Ali M. Kheyami, Abdullah Almutairi, Esam I. Azhar, Christian Drosten, Simon J. Watson, Paul Kellam, Matthew Cotten, Alimuddin Zumla, Respiratory Tract Samples, Viral Load, and Genome Fraction Yield in Patients With Middle East Respiratory Syndrome, The Journal of Infectious Diseases, Volume 210, Issue 10, 15 November 2014, Pages 1590–1594, https://doi.org/10.1093/infdis/jiu292
    
### Biology of Coronaviruses 

* ##### jiang
	Keiji Kuba , Yumiko Imai, Shuan Rao, Hong Gao, Feng Guo, Bin Guan, Yi Huan, Peng Yang,
	Yanli Zhang, Wei Deng, Linlin Bao, Binlin Zhang, Guang Liu, Zhong Wang, Mark Chappell,
	Yanxin Liu, Dexian Zheng, Andreas Leibbrandt, Teiji Wada, Arthur S Slutsky, Depei Liu, Chuan Qin,
	Chengyu Jiang & Josef M Penninger1<br>
	<strong>A crucial role of angiotensin converting enzyme 2 (ACE2)
	in SARS coronavirus–induced lung injury </strong>
	NATURE MEDICINE VOLUME 11 | NUMBER 8 | AUGUST 2005
	https://doi.org/10.1038/nm1267
    
* ##### lif
	Wan Y, Shang J, Graham R, Baric RS, Li F.
	<strong>Receptor recognition by novel coronavirus from
	Wuhan: An analysis based on decade-long
	structural studies of SARS. </strong>
	J Virology 2020;
	published online Jan 29. .
	https://doi.org/10.1128/JVI.00127-20 

* ##### mccray
	GUOSHUN WANG,1 CAMILLE DEERING,1 MICHAEL MACKE,1 JIANQIANG SHAO,2 ROYCE BURNS,1
	DIANNA M. BLAU,3 KATHRYN V. HOLMES,3 BEVERLY L. DAVIDSON,4 STANLEY PERLMAN,1,5
	AND PAUL B. MCCRAY, JR.1
	<strong>Human Coronavirus 229E Infects Polarized Airway Epithelia
	from the Apical Surface</strong>
	JOURNAL OF VIROLOGY, Oct. 2000, p. 9234–9239
	https://doi.org/10.1128/jvi.74.19.9234-9239.2000
 
* ##### hoffmann
	Markus Hoffmann, Hannah Kleine-Weber,
	Simon Schroeder, ..., Marcel A. Müller,
	Christian Drosten, Stefan Pöhlmann
	<strong>SARS-CoV-2 Cell Entry Depends on ACE2 and
	TMPRSS2 and Is Blocked by a Clinically Proven
	Protease Inhibitor</strong>
	Hoffmann et al., 2020, Cell 181, 1–10
	April 16, 2020 a 2020 Elsevier Inc.
	https://doi.org/10.1016/j.cell.2020.02.052
 

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


### Expression Locations of ACE2

* ##### timens
	I Hamming,1 W Timens,1 * MLC Bulthuis,1 AT Lely,2 GJ Navis2 and H van Goor1
	<strong> Tissue distribution of ACE2 protein, the functional
	receptor for SARS coronavirus. A first step in
	understanding SARS pathogenesis</strong>
	Journal of Pathology
	J Pathol 2004; 203: 631–637
	Published online in Wiley InterScience
	https://doi.org/10.1002/path.1570    
    
    
    ACE2 Receptor Expression and Severe Acute Respiratory Syndrome Coronavirus Infection Depend on Differentiation of Human Airway Epithelia
Hong Peng Jia, Dwight C. Look, Lei Shi, Melissa Hickey, Lecia Pewe, Jason Netland, Michael Farzan, Christine Wohlford-Lenane, Stanley Perlman, Paul B. McCray Jr
Journal of Virology Nov 2005, 79 (23) 14614-14621; https://doi.org/10.1128/JVI.79.23.14614-14621.2005
    
### Epidemiological Patterns
    
*  ##### le
	The Lancet Editoral<strong>
	COVID-19: protecting health-care workers</strong>
	www.thelancet.com Vol 395 March 21, 2020
	https://doi.org/10.1016/S0140-6736(20)30644-9 

*  ##### mizumoto 
	Kenji Mizumoto, Gerardo Chowell<strong> Transmission potential of the novel coronavirus(COVID-19) on    board the diamond Princess Cruises Ship, 2020</strong>
	https://doi.org/10.1016/j.idm.2020.02.003
  
    
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
    
    
    
### Clearance of the Respiratory Tract and Decrease in Viral Load

* ##### yuen
     Kelvin K. W. To, Ivan F. N. Hung, Iris W. S. Li, Kar-Lung Lee, Chi-Kwan Koo, Wing-Wa Yan, Raymond Liu,Ka-Ying Ho, Kwok-Hong Chu, Chi-Leung Watt, Wei-Kwang Luk, Kang-Yiu Lai, Fu-Loi Chow, Thomas Mok, Tom Buckley, Jasper F. W. Chan, Samson S. Y. Wong, Bojian Zheng, Honglin Chen, Candy C. Y. Lau, Herman Tse, Vincent C. C. Cheng, Kwok-Hung Chan, Kwok-Yung Yuen, and the Pandemic H1N1 Study Grou <strong>
    Delayed Clearance of Viral Load and Marked Cytokine Activation in Severe Cases of Pandemic H1N1 2009 Influenza Virus Infection</strong> Clinical Infectious Diseases 2010;50:850–859
􏰀 2010 by the Infectious Diseases Society of America https://doi.org/10.1086/650581 

* ##### hong
    Hyungseok Seo, Sung-Hoon Kim, Jae-Hyung Choi, Jeong-Yeon Hong and Jai-Hyun Hwang
    <strong>Effect of heated humidified ventilation on bronchial mucus transport velocity in general anaesthesia: A randomized trial</strong> Journal of International Medical Research 2014, Vol. 42(6) 1222–1231 ! The Author(s) 2014 Reprints and permissions: sagepub.co.uk/journalsPermissions.nav https://doi.org/10.1177/0300060514548291
    
* ##### lindstedt
Broberg E, Andreasson J, Fakhro M, et al. Mechanically ventilated patients exhibit decreased particle flow in exhaled breath as compared to normal breathing patients. ERJ Open Res 2020; 6: 00198-2019 [https://doi.org/10.1183/23120541.00198-2019].    
    
    
    

### Respiratory Tract and Aerosol/Particle Deposition at In/Exhalation</strong>

[park](#park) is a recent review. An often used model is the [ICRP Model](#bailey). In this work mostly [kleinstreuer](#kleinstreuer) is used. [heyder](#heyder) is a readable description and [lindstrom](#lindstrom) explains very well the overall topic in her 40 pages long thesis. [qi](#qi) shows that particle deposition is individual and may change in case of lung diseases. 


* ##### stuart
    B O Stuart<strong>
    Deposition and clearance of inhaled particles.</strong>
    Environ Health Perspect. 1984 Apr; 55: 369–390.
    https://doi.org/10.1289/ehp.8455369

* ##### bailey
	The New ICRP Model for the Respiratory Tract
	M.R. Bailey 
	Radiation Protection Dosimetry, Volume 53, Issue 1-4, 1 May 1994, Pages 107–114, https://doi.org/10.1093/rpd/53.1-4.107

* ##### kleinstreuer
	V K, Arun & Kleinstreuer, Clement & Kleinstreuer, Nicole & Pham, Wellington & Sadikot, Ruxana. (2018). 
	<strong>Mice-to-men comparison of inhaled drug-aerosol deposition and clearance. Respiratory Physiology & Neurobiology. </strong> https://doi.org/10.1016/j.resp.2018.11.003
    
* ##### kleinstreuer2017
    Arun V. Kolanjiyila, Clement Kleinstreuer
    <strong>Computational Analysis of Aerosol-Dynamics in a Human Whole-Lung Airway Model</strong>
    https://dx.doi.org/10.1016/j.jaerosci.2017.10.001
    
* ##### sznitman
	Rami Fishler, Philipp Hofemeier, Yael Etzion, Yael Dubowski & Josué Sznitman 
	<strong>Particle dynamics and deposition in true-scale pulmonary acinar models. </strong>
	Sci Rep 5, 14071 (2015). https://doi.org/10.1038/srep14071

* ##### tsuda
	Tsuda A1, Rogers RA, Hydon PE, Butler JP.
	<strong>Chaotic mixing deep in the lung.</strong>
	Proc Natl Acad Sci U S A. 2002 Jul 23;99(15):10173-8. Epub 2002 Jul 15. https://doi.org/10.1073/pnas.102318299
    
* ##### park
    Vu Khac Hoang Bui, Ju-Young Moon, Minhe Chae, Duckshin Park and Young-Chul Lee 
    <strong>Prediction of Aerosol Deposition in the Human Respiratory Tract via Computational Models: A Review with Recent Updates </strong>
    Atmosphere 2020, 11, 137; https://doi.org/10.3390/atmos11020137
    
* ##### heyder
    Joachim Heyder
    <strong>Deposition of Inhaled Particles in the Human Respiratory Tract and Consequences for Regional Targeting in Respiratory Drug Delivery</strong>
    Proc Am Thorac Soc Vol 1. pp 315–320, 2004
    https://doi.org/10.1513/pats.200409-046TA Internet address: www.atsjournals.org
        
* ##### darquenne
    BY C. DARQUENNE*, L. HARRINGTON AND G. K. PRISK
    <strong>Alveolar duct expansion greatly enhances aerosol deposition: a three-dimensional computational fluid dynamics study</strong>
    Phil. Trans. R. Soc. A (2009) 367, 2333–2346 https://doi.org/10.1098/rsta.2008.0295
    
* ##### qi
    Baihua Zhang, Shouliang Qi, Yong Yue, Jing Shen, Chen Li, Wei Qian and Jianlin Wu
    <strong>Particle Disposition in the Realistic Airway Tree Models of Subjects with Tracheal Bronchus and COPD</strong>
    Hindawi BioMed Research International Volume 2018, Article ID 7428609, 15 pages https://doi.org/10.1155/2018/7428609
    
    
* ##### rissler
	Rissler, Gudmundsson, Nicklasson, Swietlicki, Wollmer, Löndahl.
	<strong>Deposition efficiency of inhaled particles (15-5000 nm) related to breathing pattern and lung function: an experimental study in healthy children and adults.</strong>
	Jonas K. F. Jakobsson, Johan Hedlund, John Kumlin, Per Wollmer & Jakob Löndahl
	Part Fibre Toxicol. 2017 Apr 8;14(1):10. doi: 10.1186/s12989-017-0190-8.
	https://doi.org/10.1186/s12989-017-0190-8
    
* ##### zhong18
    Xiaole Chen, Clement Kleinstreuer, Wenqi Zhong, Yu Feng & Xianguang Zhou (2018) <strong>Effects of thermal airflow and mucus-layer interaction on hygroscopic droplet deposition in a simple mouth–throat model</strong>, Aerosol Science and Technology, 52:8, 900-912, DOI: 10.1080/02786826.2018.1476751
    
* ##### lindstrom
    Lindström Bagge, Maria. (2004).<strong>Particles in small airways: 
    mechanisms for deposition and clearance & Pharmacokinetic assessment of delivered 
    dose to the lung.    </strong>    https://openarchive.ki.se/xmlui/handle/10616/37702
   
* ##### rahimi-gorji
	Mohammad Rahimi-Gorji, Tahereh B. Gorji n, Mofid Gorji-Bandpy
	<strong>Details of regional particle deposition and airflow structures
	in a realistic model of human tracheobronchial airways: two-phase flow simulation</strong>
	http://dx.doi.org/10.1016/j.compbiomed.2016.04.017
	0010-4825/& 2016 Elsevier Ltd. All rights reserved.

* ##### hofemeier
    Philipp Hofemeier, Kenishiro Koshiyama, Shigeo Wada, and Josué Sznitman
	<strong>One (sub-)acinus for all: Fate of inhaled aerosols in heterogeneous pulmonary acinar structures</strong> Eur J Pharm Sci. 2018 February 15; 113: 53–63. https://doi.org/10.1016/j.ejps.2017.09.033

    
    
    
    
    
### Control and Containing Measures

* ##### noakes
    Gilkeson, CA, Camargo-Valero, MA, Pickin, LE and Noakes, CJ (2013)
    Measurement of ventilation and airborne infection risk in large naturally ventilated
    hospital wards. Building and Environment, 65. 35 – 48. https://dx.doi.org/10.1016/j.buildenv.2013.03.006
    
* ##### escombe
    Escombe, A. R., Oeser, C. C., Gilman, R. H., Navincopa, M., Ticona, E., Pan, W., Martínez, C., Chacaltana, J., Rodríguez, R., Moore, D. A., Friedland, J. S., & Evans, C. A. (2007). Natural ventilation for the prevention of airborne contagion. PLoS medicine, 4(2), e68. https://doi.org/10.1371/journal.pmed.0040068
    
* ##### salathe
    Smieszek, T., Lazzari, G., & Salathé, M. (2019). Assessing the Dynamics and Control of Droplet- and Aerosol-Transmitted Influenza Using an Indoor Positioning System. Scientific reports, 9(1), 2185. https://doi.org/10.1038/s41598-019-38825-
    
    





