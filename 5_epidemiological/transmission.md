
# Airborne Transmission Models

* [Airborne Transmission](#airborne-transmission)
  * [Content](#content)
  * [Objects Moving in the Air](#objects-moving-in-the-air)
  * [Overview Airborne Transmission](#overview-airborne-transmission)
* [Particle Dynamics in the Respiratory Tract](#particle-dynamics-in-the-respiratory-tract)
  * [Particles Sources](#particles-sources)
  * [Particles Deposition](#particles-deposition)
  * [Particles Clearance](#particles-clearance)
  * [Simulations and Experiments](#simulations-and-experiments)
* [Proposal of a Dry Form Transmission Model](#proposal-of-a-dry-form-transmission-model)
  * [Summary Dry Form Transmission](#summary-dry-form-transmission)
  * [Dry Form Transmission Model](#dry-form-transmission-model)
  * [Evidence for the Dry Form Transmission Model](#evidence-for-the-dry-form-transmission-model)
  * [Metaphor and Measures](#metaphor-and-measures)
* [References](#references)
  * [Epidemiological Patterns](#epidemiological-patterns)
  * [Environmental Factors on Betacoronaviruses](#environmental-factors-on-betacoronaviruses)
  * [Transmission Models](#transmission-models)
  * [Particles in the Respiratory Tract](#particles-in-the-respiratory-tract)
  * [Particles in the Air](#particles-in-the-air)
  * [Airflow Theory](#airflow-theory)
  * [Sources of Exhaled Particles](#sources-of-exhaled-particles)
  * [Particle Deposition at In/Exhalation](#particle-deposition-at-inexhalation)
  * [Transmission and Infection of Respiratory Viruses](#transmission-and-infection-of-respiratory-viruses)


## Airborne Transmission

### Content
* [Objects Moving in the Air](#objects-moving-in-the-air)
    Low density or very small objects follow the airflow, while heavy object fly in trajectories. The underlying physics is sketched and and examples are given. Finally an aerosol is defined as a collection of very small particles that go with the air, droplet transmission on the other hand denotes transmission with droplets large enough they fly in trajectories. 
* [Summary Airborne Transmission](#overview-airborne-transmission)


### Objects Moving in the Air
[in work]
The movement of an object in the air depends on the ratio of its surface divided by its mass. The mass is turn is the volume times the density of the material. 

> S/m ratio = surface of a particle divided by its 


<!--
#### Math Formulas:  
    a = gravity_induced_accel + air_induce_accel = g * E_d * m_diff + v^2 * k/r * (S_p/V) * E_-v  
where a=acceleration; g=gravity (9.81m/s^2); k=constant depending on form of object; r=density of the objet; S_p = surface perpendicular to v; v=movement relative to surrounding air; V=volume; E_d = unit vector pointing downwards; m_diff = object mass minus the mass of the air displaced by the object (archimedes principle); E_-v = unit-vector pointing in -v direction

//the air resistance formula is an approximation. 
-->


* #### small S/m ratio => gravity and initial movement 
    heavy object and small surface: the acceleration is the gravity which points downwards and the horizontal movement stays constant. This results in projectile motions which are, as already Galileo knew, upside down parabolas. Examples are heavy balls in sports, rain droplets or snowballs. 
* #### large S/m ratio => go with the air
    light objects with large surfaces: the movement goes with the airflow since the air resistance is big compared to the weight i.e. they are carried by the air. Feathers, dust particles and dry snowflakes are examples.

Examples and  movements in between: 
* Feathers and balloon: Have large surface and low densities, so the S/m ratio is large and they go with the air.
* Table tennis balls are both small and have a relatively low density, so they often go with the air. 
* Footballs and tennis balls mostly fly with parabolas. But strong wind can influence their movements.
* Golf balls on the other hand are less subject to the wind compared to table tennis balls. The size is similar but golf balls have a higher density. 
* Shut pots have a high density and quite large too. They won't be blown by the wind.

#### Material Factor
The mass calculates as density multiplied volume so
* #### large density => small S/m ratio
   E.g. shot puts, stones, snowballs
* #### small density => large S/m ratio
   E.g. table tennis ball, balloon 
 
#### Form Factor
A spherical form yields the smallest surface for a fixed volume. Thus round objects have smaller ratios surface/volume than non round objects.
* #### roundish => small S/m ratio 
    Watery particles tend to have a minimal surface and are roundish. Thus wet particles tend to fall more than dry particles. 
* #### large surface/low density => large S/m ratio
    Feathers or leaves have a large surface compared to their mass, so the S/m ratio is large. Therefore this objects tend to go with the air.

#### Size Factor
Since the volume increases in cubic and the surface only in square of the length/diameter. Tiny objects have very large ratios and thus go with the air. An example is flour: a whole pack of flour behaves ball like, while the single flour particles fly in the air. 
* #### larger size => smaller S/m ratio
* #### smaller size => larger S/m ratio

The [size factor](#size-factor) is the distinguishing point for aerosols versus droplets since both have a spherical form and consist of water. Very small water droplets, that can't seen as single particles, move with airflow. 

#### Droplet versus Aerosol

> ###### Aerosol
> An *aerosol* is a collection of tiny droplets with a diameter smaller than 5 micro meter. Aerosol comes from Greek aero=air and sol=solvent, since tiny droplet can't be seen and thus look like dissolved in the air. However an aerosol is a bunch of heaps of water molecules possibly including some other materials e.g. virions. Thus an aerosol is not actually dissolved but just behaves like regarding movement and visibility for our eyes.

The larger droplets keep their name and are called droplets:

> ###### Droplets
> *Droplets* in the context of transmission models denote watery particles with a diameter greater equal 5 micro meter.

> // The change both of movement and visibility is continuos and not digital as the classification border of 5 micro meter suggests. The behavior depends also on the situation: the respiratory tract has sharp turns and the humidity is very high so particles growth, so particles entering with a diameter of 5 micrometer don't necessarily follow the air. That water droplets fade from visibility and start flying when getting as small as a couple of micrometers is a coincidence or at least there is no obvious causal connection.



### Overview Airborne Transmission
Watery droplets in the air that cannot be seen, are called aerosol since it looks dissolved in the air. The main reason the distinction between droplets and aerosols is driving forces of their movement: droplet behave like heavy balls while aerosols mostly move with the air. Tiny and dry particles always go with the air. 

Key aspects of the airborne transmission in table form; for details on Actions and Sources in [Particles in the Respiratory Tract](#intermezzo-particle-dynamics-in-the-respiratory-tract) and [masks](../6_prevention_and_treatment/masks.md). [citations in work  ]

Model    | Metaphor   | Actions | Source/Deposition | Situations/Climate|   Prevent              
---------|------------|------------------|-----------------|------|---
[droplets](#droplets)  | bad breath, cone of a spray |  coughing, sneezing, shouting| mouth, pharynx| any (upper respiratory tract infections)| Any mask in face-to-face situations, distance 
[aerosol](#aerosol)  | reek of alcohol, scent of perfume, cooking smells | Speaking, breathing, droplets shrinking by drying | vocal folds, central lungs (trachea, bronchi), nose (deposition only) | low relative humidity (in high humidity particles growth) | (high-filtration-)mask, distance, **ventilate**, **outdoors** is best
[proposed dry form aerosol](../5_epidemiological/dry_form_transmission.md) | soot of smoke, dust   | (heavy) breathing (opening and closing of the deep lungs), drying of aerosols| deep lungs (alveoli)  | between person air exchange usually indoors| high-filtration-mask with good fit, **ventilate**, no deep inhalation indoors e.g. no indoor sport, **outdoors** is best


#### Comments
* In warm climates rooms can be ventilated well, so the aerosol spread can be prevented. Careless use of air-conditioning enables aerosol spread. 
* Aerosol and dry form spread increases with the amount of indoor air exchanged. Especially when deep/heavy breathing.
* The air humidity is relevant for droplet aerosol since the droplets can grow and shrink. Growing/shrinking change the osmotic pressure on the virions. Enveloped virions can get destroyed upon the pressure change. 
* The absolute humidity in heated indoor rooms is lower, the lower the outdoors temperature is. 
* The dry form model is proposed here.


## Particle Dynamics in the Respiratory Tract

Conversational remarks about how I understand particle deposition models. 

Particle deposition and clearance are relevant for Covid-19 in view of:
* infection pathway
* spread within the lower respiratory tract (pathogenesis)
* spread to the pharynx (swab test and transmission)
* spread out of the body (transmission)
* depositions of medicaments for the treatment

### Particles Sources
[in rework]
This section describes when particles are generated and how they spread within the respiratory tract and out of it. 
* Larger particles i.e. droplet are mostly spread at coughing and speaking. Coughing yields mostly particles from the upper respiratory tract. 

* Small particles from the lower respiratory tract (<1 micro meter) are generated from breathing alone and their generation does not require speaking or coughing. [Larsson et al](#larsson) identified the origins by analyzing the lipid composition of the particles. 

* [Fabian et al](#fabian) describes that the number of particles exhaled is very individual. Differences greater than a factor of 500 were observed. Data indicate a  positive correlation with age. 

* [Milton et al](#milton-2018) observed that the aerosol amount exhaled correlated both with coughing and BMI. Coughing correlated with RNA shedding. However, without coughs, there are small infectious aerosols exhaled too. 

That small particulates are exhaled upon breathing alone from the deep lungs, combined with the observations that in the deep lungs the SARS-CoV-2 receptor ACE2 is highly available, means that Covid-19 can be transmitted with breathing alone.


### Particles Deposition
This section describes how particles are deposited in the respiratory tract. These particles can originate from other locations in the respiratory tract or being inhaled from extern air.

#### Literature
* [Heyder](#heyder-2004) is a readable description  
* [Lindstrom](#lindstrom) explains very well the overall topic in her 40 pages long thesis. 
* [Park](#park) is a recent review. 
* An often used model is the [ICRP Model](#bailey). 
* This work often relies on the simulation from [Kleinstreuer](#kleinstreuer-2018).

#### Deposition Factors
How many particles are deposited/breath out in which region in/from the respiratory tract depends on various factors:
- Particles properties such as 
  - Diameter: the diameter determines the size of particles and thus how particles [move in the air](#objects-moving-in-the-air). 
  - Form: constant for water droplets but dry particles can vary in form. [Sturm](#sturm) simulated the deposition of  non-spherical particles particles. The form factor showed to matter most for larger particles in the size of 10 micro meter. Fibers in that size were deposited early on, where as disks showed the highest deposition rate in the airway generations 20 to 25.
  - Material: [Zhong](#zhong) et al describe that the particles can be moistened upon inhale and this has an effect on depositions locations. Similarly observed by [Varghese and Gangamma, Figure 4](#varghese): The alveolar deposition of soluble matter (shown for salt NaCl) between 250 nm and 1000 nm is increased by the particle growth due to moistening in the lungs. In Figure 7 the simulated effect of particle growth on total deposition is compared to measurements in experiments. 
- Breathing volume and frequency [hofemeier](#hofemeier)
- Air humidity and how much the air is moistened in the lung. E.g. described in [zhong18](#zhong18), [varghese](#varghese)]
- Orientation respect to gravity i.e. wether horizontal or vertical
- [Qi et al](#qi) simulate that particle deposition is individual and may change in case of lung diseases. 

 
#### Deposition Locations
The physiology of the airways is evolved that particles are absorbed and cleared out as early as possible. The heavier and larger the earlier [Stuart](#stuart), [Balley](#bailey), [Kleinstreuer](#kleinstreuer-2018).
* Particles smaller than 10 micro meter enter the deep lungs [Kleinstreuer 2018 Fig 12](#kleinstreuer-2018), [Heyder](#heyder-2004). Between 2 and 10 micro meters the particles are deposited due to sedimentation i.e. they fall down since the breathing out airstream is not strong enough to change their direction from downwards to upwards. Starting from around 200 nano meters and below, particles are deposited due to diffusion. Particles between 200 nano meters and 2 micro meters have the lowest deposition fraction, they are deposited due to diffusion and sedimentation but not very well. 
* Locations of particles depositions for different sizes both a inhale and exhale are shown in [Kleinstreuer et al](#kleinstreuer-2018) on page 23 are used: "Fig. 6. Particle deposition in human nasopharyngeal model: (a) nasopharyngeal; (b) tracheal; (c) generation 1; (d) generation 2; and (e) generation 3". Especially noteworthy is that upon exhale many particles are deposited in the pharynx (which is relevant for the viral load distribution and thus for infection locations and diagnosis)
* The particles depositions aren't equal for the left and right lung and bronchus [Rahimi-Gorji](#rahimi-gorji), [kleinstreuer2017](#kleinstreuer-2017)
* Particle deposition in the alveolar regions is greatly increased upon deep inhaling [hofemeier](#hofemeier).



### Particles Clearance

#### Methods of Clearance
* Clearance by mucus flow towards the alimentary system
* Coughing
* Clearance by macrophages in the epithelium and in the mucus[to check]
* Absorption in the alveoli and clearance:
  * Locally by immune cells mostly local macrophages
  * Release to the blood stream
    * migrating immune system cells 
    * clearance organs
  * Lymph system
  

#### Factors Influencing Clearance
* Well flowing mucus (see [factors increasing the mucus flow](../6_prevention_and_treatment/increasing_the_mucus_flow.md#factors-influencing-the-mucus-flow))
* The earlier deposited the better is the mucus clearance
* Particle properties such as material (bad clearance for insoluble in the deep lungs), form, size


### Simulations and Experiments
Modeling or experimentally determine the deposition rates is not easy and both simulation and experimental methods have caveats as described below.

#### Types of Experiments
##### In vitro
Build an artificial lung and measure: [sznitman](#sznitman). 
##### In vivo
  * A person inhales aerosols and the deposited fraction is measured. Recent experiments are done by [Rissler et al](#rissler).
  * A person inhales some test particles and the number of absorbed particles is measured for different volumes inhaled. For small volumes, the air goes not fare into to lung and so for this part the absorption is calculated. Then the volume is increased, the adsorbed particles measured again and the next part of the lung is calculated: the previous result is subtracted and the remaining adsorption is the next deeper lung part  [reference to be added].
  * Experimental data on the regional deposition of radio-labelled aerosol particles can be derived from gamma camera images.  The limited resolution of the planar image allows no separation between the peripheral and the bronchial airways. This separation can be done by measuring the particle clearance kinetics during the first few days after inhalation[reference to be added].

##### In silico

Theoretical simulations model the respiratory tract and mostly use the laws of fluid dynamics to calculate the airflow. 

An often used model is the [ICRP Model](#bailey). 

Traditional methods: Model the respiratory tract as a static pipe system and do the physics [Stuart 84](#stuart),  [ICRP by Bailey](#bailey). Usually some differential equations are fitted and these equations are often solved/simulated with a computer-based approach e.g. Monte Carlo methods.

Recent approaches model the respiratory tract accurately in 3D and make use of advances in computational fluid dynamics: [Kleinstreuer 18](#kleinstreuer-2018), [Qi](#qi), [Rahimi-Gorji](#rahimi-gorji), [Zhong18](#zhong18).

#### Limitations of Experiments
The airflow in the lung has variations and is complicated [Tsuda](#tsuda), [Bailey](#bailey). Often good agreement for modeling methods compared to in vivo measurements are achieved, however many parameters have to be estimated and thus overfitting could occur. 
Usually many simplifications of [relevant factors](#particles-deposition) both for respiratory tract and particles are taken i.e. the simulations are done for round constant size droplets and the respiratory tract is modelled as a static pipe system. Usually not modelled are:
* The softness and dynamics of the respiratory system, modelled in [darquenne](#darquenne). 
* Particle shape (taken into account in [sturm](#sturm)).
* Condensation and material (both considered in [Zhong18](#zhong18)).

    


## Proposal of a Dry Form Transmission Model


> Explorative

> That's the chapter this page started.

> Updates with evidence from spread patterns observed for SARS-CoV-2 in work.

### Summary Dry Form Transmission

A dry form transmission model for Betacoronaviruses is proposed. Betacoronaviruses survive best in dry form, this makes a dry form transmission possible and also likely to occur since evolutionary drive is needed to develop this ability.

The transmission models described in the literature - a recent recommended review is [Herfst](#herfst) - for viruses are:
* Contact (direct and indirect via fomites)
* [Droplets](../5_epidemiological/transmission.md#droplets)
* [Aerosols](../5_epidemiological/transmission.md#aerosol)

this new model is added:
* Dry form transmission 

Compared to aerosols - which tend to spread local both in time and space, an example is the scent of a freshly cooked soup -, tiny dry particulates behave dust/smoke like - smoke is a collection of tiny dry particulates diffusing around - so they move with the air and stay in the air even longer. Dry particulates have a potentially more infectious lung deposition and less clearance. 

It is argued 
* the described properties of dry form transmission explain best the observed transmission patterns for Sars-CoV-1, MERS. Sars-Cov-2 has different forms to transmit and some are best explained by dry from transmission (while others are explained by droplet/droplet aerosol transmission. 
* physiological properties make the lower respiratory tract particularly susceptible to  dry form infections:
  * small and dry particles have the highest deposition in the lower respiratory tract
  * the immune system protection against viruses is lowest in the deep lungs, since the immune system there is less trained to deal with viruses. 
  * the absolute number of susceptible cells of the lower lungs is larger than in the upper respiratory tract: 
      * __SARS-CoV-1/2__: susceptible cells for SARS-CoV-1/2 replication are found throughout the respiratory tract but the largest surface is in the lower respiratory tract.  
      * __MERS__: the cells susceptible to MERS infections are in the lower respiratory tract lower respiratory tract as obligate entry point.
  * the observed viral load in different organs indicate that MERS and SARS-1/2 infections are especially dangerous if they reach the lower respiratory tract
  
Overall the argumentation provides evidence, that aerosol and the proposed dry form are relevant transmission pathways.  

Based on the aerosol and dry form transmission models, expected spread patterns are discussed and the smoke-like transmission metaphor.  Measures for controlling the Sars-CoV-2 transmission are outlined. Key is ventilation of indoor spaces and wearing a mask in risky indoor spaces. 


### Dry Form Transmission Model
**[in rework]**
  
In the following, the proposed model of dry form transmission is explained. The virus is attached to dry particulates or even just as a single particle. These dry particles dust like fly around or in the case of tiny particulates diffuse smoke like around. 

Coronaviruses virions keep viability in dry form (and even survive longest: chapter [Virion Viability](../2_biological/virion_viability.md)), so dry form infection is possible in theory.

The newly proposed infection:
* Dry particulates in air -> Lung

where Dry Particulate is a small particulate with one or more viruses attached or possibly viruses attached to each other. 

The above infection pathway is in addition to the known aerosol/droplet pathways:
* Aerosol with virus in air -> Respiratory Tract
* Droplet with virus in air -> Respiratory Tract

Aerosols containing particulates and dry particulates can convert to each other in the air:
* Dry Particulates -> Small Aerosol containing a Particulate (more likely in humid air, particulates act as condensation nuclei)
* Dry Particulates <- Small Aerosol containing a Particulate (more likely in dry air)

and smaller aerosol can convert to larger (see e.g. Figure 3 (C) and (D) in [Yang](#yang)): 
* Small Aerosol <-> Large Aerosol/Droplets (in dry air equilibrium tends to the left, in humid to the right)

The larger tend to fall to the ground since their movement is driven more by gravity (described for example in [tellier](#tellier)). 

Infectious aerosols can get into the air from the lower or upper respiratory tract through breathing, coughing or speaking (section [exhaling particles](../5_epidemiological/transmission.md#particles-sources)).

Dry particulates get into the air either by the above conversion from aerosols, probably directly from an infected lung [to be searched/calculated if this is possible, work in progress] or from dirt. Dirt can be from sedimented air particles or from faeces. [to check: vacuum cleaner particle filter size].  [to be checked if dirt is/can be relevant and what kind of dirt]

<!--todo deposition of particles with dry form, short summary-->


<!--
------------unfinished------------------
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
---------------------------------------
-->

### Evidence for the Dry Form Transmission Model

#### Evidence from biological Properties
For severe betacoronavirus diseases nearly always the lower respiratory tract is involved (always in ARDS) (chapter [Disease Pattering](../3_medical/coronavirus_disease_patterns.md)):
  
As described in [particles deposition](../5_epidemiological/transmission.md#particles-deposition) only aerosols and tiny dry particulates enter the lower respiratory tract, with dry particulates having a higher chance of deposition. 
The [Tissue Tropism](../2_biological/coronavirus.md#tissue-tropism) of MERS requires lower respiratory tract entry to successful infection. Lower respiratory tract entry likely is also needed for SARS-Cov-1. There are several [Disease Patterns](../index.md#infection-tropism-and-disease-patterns) observed resulting from SARS-Cov-2 infections and some of them require an early lower respiratory tract infection.

That in swab tests there are viruses in the nose and the mouth can be either caused by local replication or by breathing them up. [Kleinstreuer et al](#kleinstreuer-2018) have shown that upon exhale particles are deposited in the nose. The upper respiratory tract is used to fight viruses and so infections are rarely virulent (chapter [Disease Pattering](../3_medical/coronavirus_disease_patterns.md)).

    
#### Evidence from the observed Spread Patterns
[in rework since **partly wrong**, December 2020]
Close range droplet or aerosol transmissions explain well the observed spread patterns for upper respiratory tract infections, they are often spread between close contacts. However, the spread patterns of severe betacoronaviruses diseases are better explained by dust-like spreading:
In confined settings without special protection reproduction numbers, have been observed [Mizumoto](#mizumoto). Which is not very likely to observe with the droplet transmission model. Since the movement of droplets is affected by gravity and therefore their concentration in the air quite rapidly decreases (see [model](#dry-form-transmission-model) section). The movement of dry dust, on the other hand, is less affected by gravity and therefore remains longer in the air. The majority of spreading has been observed in indoor spaces. In theses settings dry dust like spreading is possible.

<!--
move to spread analyses
--> 

* Sars-CoV-2:
    - Long-Term Care Facility in Seattle [Honein et al](#honein)
	- Diamond Princess Cruise Ship anchored in Japan, well analysed by [Mizumoto and colleagues](#mizumoto). Observations:
        * Covid-19 spread started between passengers and not equally between passengers and personal.
        * very high peak values of the reproduction number are observed (over 10):  This is well above the number of close contacts a person usually has and so droplet transmission is unlikely.
        
        The observations favour long range but same room transmission (aerosol and dry form transmission) over droplet transmission and slightly indicate dry form transmission:
        * In the droplet model, one would except the personal to be crucial for the junction of the different guest groups, since they have the most short range contacts, which enable droplet transmission.
        * In the aerosol model about an equal spread would be expected. Experience from cooking smells teach, that aerosols spread out locally.
        * Smoke diffuses entire rooms and stays quite long => spending much time in the same confined rooms is more relevant than interactions or being close but only for a short period. Therefor an initial spread in passengers is expected (if the initial spread starts in the passengers) since they spend the time in the same areas.
	- Music Club in Japan (see Introduction [Mizumoto](#mizumoto))
	- Church in Korea (see Introduction [Mizumoto](#mizumoto))
	- Hospitals in Northern Italy [LE](#le)

* SARS-CoV-1:
    - Hotel in Hong Kong, especially during cooler outdoor air temperatures [Lin](#lin), [Chan](#chan). The virus spread to guests in close by rooms and not to the personal.


* SARS 1 & 2: 
    In settings without prior SARS experience the infection rate in health care workers is very high:
	* 2003 in South East Asia  (see Introduction [Mizumoto](#mizumoto))
	* 2019/2020 in Europe - Italy especially [LE](#le)
	
	Possible Explanation: The medical staff is used to protect against fomites and droplet transmission and to some extent versus aerosol transmission and know to handle them. However, they are not yet used to the new spreading pattern. Consequently in all rooms of the building wearing a mask likely is key in reducing the infection rates (many cities in China reported few infections in hospitals [citations to be added]).

* Mers-Cov:
  Most superspreading events were observed in winter and often in hospitals ([Dudas et al 2017](#dudas-2017)). 

* The initial cases that led to the discovery of Sars-CoV-2 occurred  during cold outdoor air temperature and therefore dry indoor air in the Wuhan Sea Food market. Pictures of the market suggest that the market is partly indoor and therefore likely heated. The earliest observed Sars-Cov-1 cases are linked to a similar setting of a live animal market. 

* The primary spreading indoors can be a reason  this new betacoronavirus diseases occurred recently, even though overall hygiene increased. There are other possible explanations however: One is that the diagnostic tooling improved enabling the discovery of these diseases (MERS, discovered in 2012, has been infecting humans at least for decades, which is known from analyzing backup samples [to cite]).

    
#### Further evidences

[in work, March 2020]

In humid and warm temperature environments (above 30 degrees), the death numbers increase less steep. [Chan](#chan) shows that warm temperatures of 33 Celsius and high relative don't yield a much faster rate of inactivation; temperatures over 38 degrees do induce a much faster inactivation. A possible explanations why in humid conditions around 33 degrees there less super-spreading events observed are:
  * In warm climate zones good ventilation is easy and in settings with air-conditioner usage super spreading is likely.
  * In humid environments, organic particles act as condensation nuclei and therefore loose their dry form. So viruses "find" themselves within growing droplets, which fall to the ground or get absorbed in the upper respiratory tract causing less virulent diseases.

### Metaphor and Measures 
Avoiding the droplet spread is like avoiding somebody’s reek of alcohol, avoiding aerosols/dry particulates on the other hand corresponds to avoiding a smoker's smoke. The latter is much more difficult since smoke remains in the air for much longer and can diffuse around.
Just smelling would be the theoretical possibility of an infection. But for the odds to be in two digits percentages, one needs likely to be that close that the cloths start smelling. 
Another form of dry particulates in air is dust. In dry air dust can stay in the very long and travel long distances. 

This yields either avoiding 'Sars-CoV-2 smoke' or filtering out  particulates. The filter filters ideally above a few hundreds nanometers (Sars-CoV-2 is about between 80-150 nm, but often several virions stick together or are attached to some organic material[to check and cite]). 
Keeping the smoke metaphor in mind, then indoor ventilation and indoor wearing a mask are key. Outdoors is no worry for Sars-CoV-2 however, the air is diluted and sun light destroys virions (Chapter [Virion Viability](./../2_biological/virion_viability.md)). 
Measures in more detail are found in [Protection Measures](./monitor_and_control.md). 



## References

    
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

* ##### Dudas 2017
    **MERS-CoV spillover at the camel-human interface** Gytis Dudas, Luiz Max Carvalho, Andrew Rambaut, Trevor Bedford; elifesciences.org
    [Summary](../2_biological/hypotheses_nidovirales.md#summary-dudas-2017) in the chapter hypotheses about nidovirales.


### Environmental Factors on Betacoronaviruses

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

### Transmission Models

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

* ##### Yang
    Yang W, Marr LC (2011) 
    **Dynamics of Airborne Influenza A Viruses Indoors and Dependence on Humidity.**
    PLoS ONE 6(6): e21481. 
    https://doi.org/10.1371/journal.pone.0021481


### Particles in the Respiratory Tract
* ##### kleinstreuer 2018
    Arun V Kolanjiyil, Clement Kleinstreuer, Nicole C Kleinstreuer, Wellington Pham and Ruxana T Sadikot
	**Mice-to-men comparison of inhaled drug-aerosol deposition and clearance.** Respiratory Physiology & Neurobiology. https://doi.org/10.1016/j.resp.2018.11.003


### Particles in the Air

* ##### morawska2006
    Morawska, L. (2006),
    **Droplet fate in indoor environments, or can we prevent the spread of infection?.** Indoor Air, 16: 335-347. 
    https://doi.org/10.1111/j.1600-0668.2006.00432.x

* ##### Yang
    Yang W, Marr LC (2011) 
    **Dynamics of Airborne Influenza A Viruses Indoors and Dependence on Humidity.**
    PLoS ONE 6(6): e21481. 
    https://doi.org/10.1371/journal.pone.0021481



### Airflow Theory
    
* ##### sznitman
	Rami Fishler, Philipp Hofemeier, Yael Etzion, Yael Dubowski & Josué Sznitman 
	**Particle dynamics and deposition in true-scale pulmonary acinar models.**
	Sci Rep 5, 14071 (2015). https://doi.org/10.1038/srep14071
    
* ##### stuart
    B O Stuart 
    **Deposition and clearance of inhaled particles.**
    Environ Health Perspect. 1984 Apr; 55: 369–390.
    https://doi.org/10.1289/ehp.8455369

* ##### tsuda
	Tsuda A1, Rogers RA, Hydon PE, Butler JP.
	**Chaotic mixing deep in the lung.**
	Proc Natl Acad Sci U S A. 2002 Jul 23;99(15):10173-8. Epub 2002 Jul 15. https://doi.org/10.1073/pnas.102318299


### Sources of Exhaled Particles
    
* ##### olin 
    Bake, B., Larsson, P., Ljungkvist, G. et al. 
    **Exhaled particles and small airways.** 
    Respir Res 20, 8 (2019). https://doi.org/10.1186/s12931-019-0970-9
    
* ##### larsson
    Per Larsson, Björn Bake, Anita Wallin, Oscar Hammar, Ann-Charlotte Almstrand, Mona Lärstad, Evert Ljungström, Ekaterina Mirgorodskaya, Anna-Carin Olin,
    **The effect of exhalation flow on endogenous particle emission and phospholipid composition**, 
    Respiratory Physiology & Neurobiology,Volume 243,2017,Pages 39-46,ISSN 1569-9048,     https://doi.org/10.1016/j.resp.2017.05.003

* ##### fabian
    Patricia Fabian, Sc.D.,1 Joseph Brain, S.D.,1 E. Andres Houseman, Sc.D.,2 James Gern, M.D.,3 and Donald K. Milton, M.D., Dr.PH.1,4
    **Origin of Exhaled Breath Particles from Healthy and Human Rhinovirus Infected Subjects**
    JOURNAL OF AEROSOL MEDICINE AND PULMONARY DRUG DELIVERY Volume 24, Number 3, 2011 a Mary Ann Liebert, Inc. Pp. 137–147 https://doi.org/10.1089/jamp.2010.0815
    
* ##### lindstedt
    Broberg E, Andreasson J, Fakhro M, et al. **Mechanically ventilated patients exhibit decreased particle flow in exhaled breath as compared to normal breathing patients.** ERJ Open Res 2020; 6: 00198-2019 [https://doi.org/10.1183/23120541.00198-2019]().
    
* ##### milton 2013
    Milton, D. K., Fabian, M. P., Cowling, B. J., Grantham, M. L., & McDevitt, J. J. (2013). **Influenza virus aerosols in human exhaled breath: particle size, culturability, and effect of surgical masks.** PLoS pathogens, 9(3), e1003205. https://doi.org/10.1371/journal.ppat.1003205

* ##### milton 2018
    Jing Yan, Michael Grantham, Jovan Pantelic, P. Jacob Bueno de Mesquita, Barbara Albert, Fengjie Liu, Sheryl Ehrman, Donald K. Milton, EMIT Consortium
    **Aerosol shedding of infectious influenza virus**
    Proceedings of the National Academy of Sciences Jan 2018, 115 (5) 1081-1086; https://doi.org/10.1073/pnas.1716561115
    
* ##### morawska
    Johnson, Graham & Morawska, Lidia & Ristovski, Zoran & Hargreaves, M. & Mengersen, K. & Chao, Christopher & Wan, Man-Pun & Li, Yuguo & Xie, Xiaojian & Katoshevski, David & Corbett, Shay. (2011). **Modality of human expired aerosol size distributions.** Journal of Aerosol Science - J AEROSOL SCI. 42. 839-851. https://doi.org/10.1016/j.jaerosci.2011.07.009. 



### Particle Deposition at In/Exhalation


* ##### lindstrom
    Lindström Bagge, Maria. (2004). 
    **Particles in small airways: mechanisms for deposition and clearance & Pharmacokinetic assessment of delivered dose to the lung.** 
    https://openarchive.ki.se/xmlui/handle/10616/37702

* ##### bailey
	**The New ICRP Model for the Respiratory Tract** M.R. Bailey 
	Radiation Protection Dosimetry, Volume 53, Issue 1-4, 1 May 1994, Pages 107–114, 
    https://doi.org/10.1093/rpd/53.1-4.107
    
* ##### heyder 2004
    Joachim Heyder
    **Deposition of Inhaled Particles in the Human Respiratory Tract and Consequences for Regional Targeting in Respiratory Drug Delivery**
    Proc Am Thorac Soc Vol 1. pp 315–320, 2004 www.atsjournals.org
    https://doi.org/10.1513/pats.200409-046TA 

* ##### park
    Vu Khac Hoang Bui, Ju-Young Moon, Minhe Chae, Duckshin Park and Young-Chul Lee 
    **Prediction of Aerosol Deposition in the Human Respiratory Tract via Computational Models: A Review with Recent Updates**
    Atmosphere 2020, 11, 137; 
    https://doi.org/10.3390/atmos11020137

#### Computational Simulations

* ##### varghese
    Varghese, S.K. and Gangamma, S. (2006). 
    **Particle Deposition in Human Respiratory Tract: Effect of Water-Soluble Fraction.** Aerosol Air Qual. Res. 6: 360-379. https://doi.org/10.4209/aaqr.2006.07.0004

* ##### kleinstreuer 2018
    Arun V Kolanjiyil, Clement Kleinstreuer, Nicole C Kleinstreuer, Wellington Pham and Ruxana T Sadikot
	**Mice-to-men comparison of inhaled drug-aerosol deposition and clearance.** Respiratory Physiology & Neurobiology. https://doi.org/10.1016/j.resp.2018.11.003
    
* ##### kleinstreuer 2017
    Arun V. Kolanjiyila, Clement Kleinstreuer
    **Computational Analysis of Aerosol-Dynamics in a Human Whole-Lung Airway Model**
    https://dx.doi.org/10.1016/j.jaerosci.2017.10.001

* ##### qi
    Baihua Zhang, Shouliang Qi, Yong Yue, Jing Shen, Chen Li, Wei Qian and Jianlin Wu
    **Particle Disposition in the Realistic Airway Tree Models of Subjects with Tracheal Bronchus and COPD**
    Hindawi BioMed Research International Volume 2018, Article ID 7428609, 15 pages https://doi.org/10.1155/2018/7428609
    
* ##### zhong18
    Xiaole Chen, Clement Kleinstreuer, Wenqi Zhong, Yu Feng & Xianguang Zhou (2018) **Effects of thermal airflow and mucus-layer interaction on hygroscopic droplet deposition in a simple mouth–throat model**, Aerosol Science and Technology, 52:8, 900-912, https://dx.doi.org/10.1080/02786826.2018.1476751
    
* ##### rahimi-gorji
	Mohammad Rahimi-Gorji, Tahereh B. Gorji n, Mofid Gorji-Bandpy
	**Details of regional particle deposition and airflow structures in a realistic model of human tracheobronchial airways: two-phase flow simulation**
	https://dx.doi.org/10.1016/j.compbiomed.2016.04.017
	0010-4825/& 2016 Elsevier Ltd. All rights reserved.

* ##### hofemeier
    Philipp Hofemeier, Kenishiro Koshiyama, Shigeo Wada, and Josué Sznitman
	**One (sub-)acinus for all: Fate of inhaled aerosols in heterogeneous pulmonary acinar structures** Eur J Pharm Sci. 2018 February 15; 113: 53–63. https://doi.org/10.1016/j.ejps.2017.09.033
    
* ##### sturm 
    Robert Sturm **A Computer Model for the Simulation of Nonspherical Particle Dynamics in the Human Respiratory Tract** Hindawi Publishing Corporation Physics Research International Volume 2012, Article ID 142756, 11 pages https://doi.org/10.1155/2012/142756

* ##### darquenne
    BY C. DARQUENNE*, L. HARRINGTON AND G. K. PRISK
    **Alveolar duct expansion greatly enhances aerosol deposition: a three-dimensional computational fluid dynamics study**
    Phil. Trans. R. Soc. A (2009) 367, 2333–2346 https://doi.org/10.1098/rsta.2008.0295

#### Experiments

* ##### rissler
	Rissler, Gudmundsson, Nicklasson, Swietlicki, Wollmer, Löndahl.
	**Deposition efficiency of inhaled particles (15-5000 nm) related to breathing pattern and lung function: an experimental study in healthy children and adults.**
	Jonas K. F. Jakobsson, Johan Hedlund, John Kumlin, Per Wollmer & Jakob Löndahl
	Part Fibre Toxicol. 2017 Apr 8;14(1):10. doi: 10.1186/s12989-017-0190-8.
	https://doi.org/10.1186/s12989-017-0190-8
    


  
### Transmission and Infection of Respiratory Viruses

* ##### kikkert
	Marjolein Kikkert
	**Innate Immune Evasion by Human Respiratory RNA Viruses**
	J Innate Immun 2020;12:4–20
	https://doi.org/10.1159/000503030


    
    
* ##### pierret
    Reiman JM, Das B, Sindberg GM, Urban MD, Hammerlund MEM, et al. (2018) 
    **Humidity as a non-pharmaceutical intervention for influenza A.** 
    PLOS ONE 13(9): e0204337. https://doi.org/10.1371/journal.pone.0204337

* ##### myatt
    Myatt, T. A., Kaufman, M. H., Allen, J. G., MacIntosh, D. L., Fabian, M. P., & McDevitt, J. J. (2010).
    **Modeling the airborne survival of influenza virus in a residential setting: the impacts of home humidification.**
    Environmental health : a global access science source, 9, 55. https://doi.org/10.1186/1476-069X-9-55



 


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
