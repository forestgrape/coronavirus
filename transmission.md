

# Transmission of Betacoronaviruses with Focus on Sars-CoV-2 and a Proposed Dry Form Transmission 

* [Recap Airborne Transmission](#recap-airborne-transmission)
  * [Objects in the Air](#objects-in-the-air)
  * [Overview Airborne Transmission](#overview-airborne-transmission)
* [Abstract Proposed Dry Form Transmission](#abstract-proposed-dry-form-transmission)
* [Dry Form Transmission Model](#dry-form-transmission-model)
* [Intermezzo: Particle Dynamics in the Respiratory Tract](#intermezzo-particle-dynamics-in-the-respiratory-tract)
  * [Particles Sources](#particles-sources)
  * [Particles Deposition](#particles-deposition)
  * [Particles Clearance](#particles-clearance)
  * [Simulations and Experiments](#simulations-and-experiments)
* [Evidence for the Dry Form Transmission Model](#evidence-for-the-dry-form-transmission-model)
  * [Evidence from Biological Properties](#evidence-from-biological-properties)
  * [Evidence from the observed Spread Patterns](#evidence-from-the-observed-spread-patterns)
* [Metaphor and Measures](#metaphor-and-measures)
* [References](#references)
  * [Particles in the Air](#particles-in-the-air)
  * [Airflow Theory](#airflow-theory)
  * [Particle Deposition at In/Exhalation](#particle-deposition-at-inexhalation)
  * [Sources of Exhaled Particles](#sources-of-exhaled-particles)
  * [Transmission and Infection of  Respiratory Viruses](#transmission-and-infection-of-respiratory-viruses)
  * [Epidemiological Patterns](#epidemiological-patterns)
  * [Enviromental Factors on Betacoronaviruses](#enviromental-factors-on-betacoronaviruses)


## Recap Airborne Transmission

### Objects in the Air
[in work]
The movement of an object in the air depends on the ratio of its surface divided by its mass. The mass is turn is the volume times the density of the material. 

> S/m ratio = surface of a particle divided by its 


<!--
#### Math Formulas
    a = g * E_d + v^2 * k/r * (S_p/V) * E_-v  
where a=acceleration; g=gravity (9.81m/s^2); k=constant depending on form of object; r=density of the objet; S_p = surface perpendicular to v; v=movement relative to surrounding air; V=volume; E_d = unit vector pointing downwards; E_-v = unit-vector pointing in -v direction
-->


* #### small S/m ratio => gravity and initial movement 
    heavy object and small surface: the acceleration is the gravity which points downwards and the horizontal movement stays constant. This results in projectile motions which are, as already Galileo knew, upside down parabolas. Examples are heavy balls in sports, rain droplets or snowballs. 
* #### large S/m ratio => go with the air
    light objects with large surfaces: the movement goes with the airflow since the air resistance is big compared to the weight i.e. they are carried by the winds. Feathers, dust particles and dry snowflakes are examples.

Examples and  movements in between: 
* Feathers and balloon: Have large surface and low densities, so the S/m ratio is large and they go with the wind.
* Table tennis balls are both small and have a relatively low density, so they often go with the air. 
* Footballs and tennis balls mostly fly with parabolas. But strong winds can influence their movements.
* Golf balls on the other hand are less subject to the wind compared to table tennis balls. The size is similar but golf balls have a higher density. 
* Shut pots have a high density and quite large too. They won't be blown by the winds.

#### Material Factor
The mass calculates as density times volume so
* #### large density => small S/m ratio
   E.g. shot puts, stones, snowballs
* #### small density => large S/m ratio
   E.g. table tennis ball, balloon 
 
#### Form Factor
A spherical form yields the smallest surface for a fixed volume. Thus round objects have smaller ratios surface/volume than non round objects.
* #### roundish => small S/m ratio 
    Watery particles tend to have a minimal surface and are roundish. Thus wet particles tend to fall more than dry particles. 
* #### large surface/low density => large S/m ratio
    Feathers or leaves have a large surface compared to their mass, so the S/m ratio is large. Therefore this objects tend to go with the wind.

#### Size Factor
Since the volume increases in cubic and the surface only in square of the length/diameter. Tiny objects have very large ratios and thus go with the wind. An example is flour: a whole pack of flour behaves ball like, while the single flour particles fly in the air. 
* #### larger size => smaller S/m ratio
* #### smaller size => larger S/m ratio

The [size factor](#size-factor) is the distinguishing point for aerosols versus droplets since both have a spherical form and consist of water. Very small water droplets, that can't seen as single particles, move with airflow. 

#### Droplet versus Aerosol
> <span id='aerosol'> An *aerosol* is a collection of tiny droplets with a diameter smaller than 5 micro meter. Aerosol comes from Greek aero=air and sol=solvent, since tiny droplet can't be seen and thus look like dissolved in the air. However an aerosol is a bunch of heaps of water molecules possibly including some other materials e.g. virions. Thus an aerosol is not actually dissolved but just behaves like regarding movement and visibility for our eyes.</span>

The larger droplets keep their name and are just called droplets:
> <span id='droplet'>*Droplets* in the context of transmission models denote watery particles with a diameter greater equal 5 micro meter. </span>

> // The change both of movement and visibility is continuos and not digital as the classification border of 5 micro meter suggests. That water droplets fade from visibility and start flying when getting as small as a couple of millimeters is a coincidence. At least there is no obvious causal connection.  

### Overview Airborne Transmission
Watery droplets in the air that cannot be seen, are called aerosol since it looks dissolved in the air. The main reason the distinction between droplets and aerosols is driving forces of their movement: droplet behave like heavy balls but aerosols mostly move with the air. Tiny and dry particles always go with the air. 


Key aspects of the airborne transmission in table form; for details on Actions and Sources in [Particles in the Respiratory Tract](#intermezzo-particle-dynamics-in-the-respiratory-tract) and on masks in [Protection Measures](./monitor_and_control.md). [citations in work  ]

Model    | Metaphor   | Actions | Source | Situations/Clima|   Prevent              
---------|------------|-----------------|------------|------|---
[droplet](#droplet)  | bad breath, cone of a spray |  coughing, sneezing, shouting| mouth, pharynx| any | Any mask in face-to-face situations, distance 
[aerosol](#aerosol)  | reek of alcohol, scent of perfume, cooking smells | Speaking, breathing, droplets drying out| central lungs (trachea, bronchi), nose | cool and low absolute humidity but not very dry| (dense-)mask in face-to-face situations and crowded or heated rooms, distance, ventilate
[dry form](#dry-form-model) | soot of smoke, dust   | breathing (opening and closing of the deep lungs), drying of aerosols| deep lungs (alveoli)  | dry (low relative humidity) e.g. indoor heated| (dense-)mask in heated and (crowded) indoor rooms, ventilate


## Abstract Proposed Dry Form Transmission
**[in rework]**
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

<p id="dry-form-model">-----</p>

## Dry Form Transmission Model
[in rework]
  
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

Infectious aerosols can get into the air from the lower or upper respiratory tract through breathing, coughing or speaking (section [exhaling particles](#particles-spreading).

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
This yields a different transmission pattern than the aerosol [[Tellier](#tellier)], which is however still a relevant transmission pathway. The droplet model is likely to be less relevant, since the Sars-CoV-2 [infects primarily cells in the lower respiratory tract entry](#tissue-tropism-of-sars-cov-2) and [only small particulates reach the deep lungs](#particles).-->



<p id="particles">-----</p>

## Intermezzo: Particle Dynamics in the Respiratory Tract

Conversational remarks about how I understand particle deposition models. 

Particle deposition and clearance are relevant for Covid-19 in view of:
* infection pathway
* spread within the lower respiratory tract (pathogenesis)
* spread to the pharynx (swab test and transmission)
* spread out of the body (transmission)
* depositions of medicaments for the treatment

### Particles Sources

This section describes when particles are exhaled and how they spread out within the respiratory tract. 
* Larger particles i.e. droplet are mostly spread at coughing and speaking. Coughing yields mostly particles from the upper respiratory tract. 

* Small particles from the lower respiratory tract (<1 micro meter) are generated with breathing alone and not when speaking or coughing. [Larsson et al](#larsson) found this by identifying the origins of particles from the lipid composition. 

* [fabian et al](#fabian) found that the number of particles exhaled is very individual. Differences greater than a factor of 500 were observed. A tendency for a positive correlation with age was observed. 

* [milton et al](#milton2018) observed that the aerosol amount exhaled correlated both with coughing and BMI. Coughing correlated with RNA shedding. However, without coughs, there are small infectious aerosols exhaled too. 

So Covid-19 can be spread with breathing alone especially since in the deep lungs there are many receptors for Sars-CoV-2.  


### Particles Deposition

This section describes how particles are deposited in the respiratory tract. These particles can originate from other locations in the respiratory tract or being inhaled from extern air.

##### Deposition Factors
How many particles are deposited/breath out in which region in/from the respiratory tract depends on various factors ([park et al](#park) have recently written a review).
- particles properties such as diameter, density, form (see [sturm](#sturm)) and material([zhong18](#zhong18)], [varghese](#varghese))
    * Droplets mostly don't enter the lower respiratory tract.
    * Small Aerosols can enter the lower respiratory tract. But at a size of at least 0.1 μm they are not well deposited (the Sars-CoV-2 diameter is between 50 and 200 nm) and larger aerosols don't enter deep or are well cleared out [to be confirmed and citation to be added]. 
    * Tiny, dry and sticky (Spike-Glycoprotein) particulates may have a higher deposition rate on the lung alveolar epithelial cells and less clearance [to be confirmed and citation to be added, work in progress].
- breathing volume and frequency [hofemeier](#hofemeier)
- air humidity and how much the air is moistened in the lung. E.g. described in [zhong18](#zhong18), [varghese](#varghese)]
- orientation respect to gravity i.e. wether horizontal or vertical
 

##### Deposition Locations
The physiology of the airways is such that particles are absorbed and cleared out as early as possible and the heavier the earlier [Stuart](#stuart), [Balley](#bailey), [Kleinstreuer](#kleinstreuer).
* Locations of particles depositions for different sizes both a inhale and exhale are shown in [Kleinstreuer et al](#kleinstreuer) on page 23 are used: "Fig. 6. Particle deposition in human nasopharyngeal model: (a) nasopharyngeal; (b) tracheal; (c) generation 1; (d) generation 2; and (e) generation 3". Especially noteworthy is that upon exhale many particles are deposited in the pharynx (which is relevant for swab tests). 
* [Zhong](#zhong) et al describe that the particles can be moistened upon inhale and this has an effect on depositions locations. Similarly observed by [Varghese and Gangamma, Figure 4](#varghese): The alveolar deposition of soluble matter (shown for salt NaCl) between 250 nm and 1000 nm is increased by the particle growth due to moistening in the lungs. In Figure 7 the simulated effect of particle growth on total deposition is compared to measurements in experiments. 
* The particles depositions aren't equal for the left and right lung and bronchus [Rahimi-Gorji](#rahimi-gorji), [kleinstreuer2017](#kleinstreuer2017)
* Particle deposition in the alveolar regions can be greatly increased upon deep inhaling [hofemeier](#hofemeier).
* [Sturm](#sturm) simulated the deposition of  non-spherical particles particles. The form factor showed to matter most for larger particles in the size of 10 micro meter. Fibers in that size were deposited early on, where as disks showed the highest deposition rate in the airway generations 20 to 25. 

### Particles Clearance

#### Methods of Clearance
* clearance by mucus flow towards the alimentary system
* coughing
* clearance by macrophages in the epithelium and in the mucus[to check]
* absorption in the alveoli and clearance in the blood stream by immune system cells (e.g. macrophages)


##### factors influencing clearance
* well flowing mucus (see [factors increasing the mucus flow](#factors-influencing-the-mucus-flow))
* the earlier deposited the better is the mucus clearance
* particle properties such as material (bad clearance for insoluble in the lungs), form, size

### Simulations and Experiments

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

From the [Habitat of the Betacoronavirus](./index.md#habitat) lower respiratory tract entry for Sars-CoV-1 and MERS is obligate for infection. For Sars-CoV-2 lower respiratory tract entry is likely for patients developing ARDS. As described in [particles deposition](#particles-deposition) only aerosols and tiny dry particulates enter the lower respiratory tract. So the two primary transmission forms are aerosol and dry form. Since aerosols usually are cleared quite well with the mucus flow, the dry form is likely more infectious. 


<p id="spread-patterns">---</p>
    
### Evidence from the observed Spread Patterns

The droplet transmission explains well the observed spread patterns of influenza. Dust like spreading is explaining better following observations for the observed Betacoronaviruses spread patterns than the droplet models:

[in work: correct that aerosol but not the droplet models could partly explain observed spread patterns]
In confined settings without special protection reproduction numbers well above the number of close contacts a person has, have been observed [Mizumoto](#mizumoto). Which is not very likely to observe with the droplet transmission model. Since the movement of aerosols is affected by gravitation and therefore their concentration in the air quite rapidly decreases (see [model](#model) section). The movement of dry dust, on the other hand, is less affected by gravity which yields longer remaining in the air. The events of very high spreading have all been observed in cool outside temperature and heated indoor spaces which means dry and confined air. In theses settings dry dust like spreading is possible:

* Sars-CoV-1:
	- Hospitals in China [Mizumoto](#mizumoto)
    - Long-Term Care Facility in Seattle [Honein et al](#honein)
	- Hotel in Hong Kong, especially during cooler outside temperatures [Lin](#lin), [Chan](#chan)

* Sars-CoV-2:
	- Diamond Princess Cruise Ship anchored in Japan, well analysed by [Mizumoto and colleagues](#mizumoto). Observations:
        * Covid-19 spread started between passengers and not equally between passengers and personal.
        * very high peak values of the reproduction number are observed (over 10)
        
        The observations favour long range but same room transmission (aerosol and dry form transmission) over droplet transmission and slighly indicate dry form transmission:
        * In the droplet model, one would except the personal to be crucial for the junction of the different guest groups, since they have the most short range contacts, which enable droplet transmission. 
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
Most superspreading events occured in Winter season and in hospitals [dudas2017](#dudas2017). The primary superspreading in very dry (heated indoor) can be a reason  diseases occurred recently, even though overall hygiene increased.  


    
    
    
#### Further evidences

Remark: The following pieces of evidence are 'in work'. 

* In humid and warm temperature environments (above 30 degrees), there are no known events of a step increase in death numbers. [Chan](#chan) shows that warm temperatures of 33 Celsius and high relative don't yield a much faster rate of inactivation; temperatures over 38 degrees do induce a much faster inactivation. A possible explanation why in humid conditions around 33 degrees there no super-spreading events observed is: In humid environments, organic particles act as condensation nuclei and therefore loose their dry form. So viruses "find" themselves within aerosols which in turn often growth to droplets. In this case, a droplet like spreading pattern with no super-spreading events would be expected. 

* The initial cases that led to the discovery of Sars-CoV-2 occurred during cold outside temperature and therefore dry indoor air in the Wuhan Sea Food market. Pictures of the market suggest that the market is partly indoor and therefore likely heated. The earliest observed Sars-Cov-1 cases are linked to a similar setting of a live animal market. 1q


<p id="metaphor-and-measures">---</p>

## Metaphor and Measures 
Avoiding the droplet spread is like avoiding somebody’s reek of alcohol, avoiding aerosols/dry particulates on the other hand corresponds to avoiding a smoker's smoke. The latter is much more difficult since smoke remains in the air for much longer and can diffuse around.
Just smelling would be the theoretical possibility of an infection. But for the odds to be in two digits percentages, one needs likely to be that close that the cloths start smelling. 
Another form of dry particulates in air is dust. In dry air dust can stay in the very long and travel long distances. Outside no worry for Sars-CoV-2 however, it is diluted and sun light destroys virions. 

This yields either avoiding 'Sars-CoV-2 smoke' entirely or filtering out  particulates above a few hundreds nanometers (Sars-CoV-2 is about between 80-150 nm, but often several virions stick together or are attached to some organic material[to check and cite]). Keeping the smoke metaphor in mind, then indoor ventilation and indoor wearing a mask are key. Measures in more detail are found in [Protection Measures](index.md#measures). 



## References

[park](#park) is a recent review. An often used model is the [ICRP Model](#bailey). In this work mostly [kleinstreuer](#kleinstreuer) is used. [heyder](#heyder) is a readable description and [lindstrom](#lindstrom) explains very well the overall topic in her 40 pages long thesis. [qi](#qi) shows that particle deposition is individual and may change in case of lung diseases. 


### Particles in the Air

* ##### lindstrom
    Lindström Bagge, Maria. (2004).<strong>Particles in small airways: 
    mechanisms for deposition and clearance & Pharmacokinetic assessment of delivered 
    dose to the lung.    </strong>    https://openarchive.ki.se/xmlui/handle/10616/37702

* ##### bailey
	<strong>The New ICRP Model for the Respiratory Tract </strong> M.R. Bailey 
	Radiation Protection Dosimetry, Volume 53, Issue 1-4, 1 May 1994, Pages 107–114, https://doi.org/10.1093/rpd/53.1-4.107
    
* ##### heyder
    Joachim Heyder
    <strong>Deposition of Inhaled Particles in the Human Respiratory Tract and Consequences for Regional Targeting in Respiratory Drug Delivery</strong>
    Proc Am Thorac Soc Vol 1. pp 315–320, 2004
    https://doi.org/10.1513/pats.200409-046TA Internet address: www.atsjournals.org

* ##### park
    Vu Khac Hoang Bui, Ju-Young Moon, Minhe Chae, Duckshin Park and Young-Chul Lee 
    <strong>Prediction of Aerosol Deposition in the Human Respiratory Tract via Computational Models: A Review with Recent Updates </strong>
    Atmosphere 2020, 11, 137; https://doi.org/10.3390/atmos11020137

* ##### morawska2006
    Morawska, L. (2006), Droplet fate in indoor environments, or can we prevent the spread of infection?. Indoor Air, 16: 335-347. https://doi.org/10.1111/j.1600-0668.2006.00432.x


### Airflow Theory
    
* ##### sznitman
	Rami Fishler, Philipp Hofemeier, Yael Etzion, Yael Dubowski & Josué Sznitman 
	<strong>Particle dynamics and deposition in true-scale pulmonary acinar models. </strong>
	Sci Rep 5, 14071 (2015). https://doi.org/10.1038/srep14071
    
* ##### stuart
    B O Stuart<strong>
    Deposition and clearance of inhaled particles.</strong>
    Environ Health Perspect. 1984 Apr; 55: 369–390.
    https://doi.org/10.1289/ehp.8455369

* ##### tsuda
	Tsuda A1, Rogers RA, Hydon PE, Butler JP.
	<strong>Chaotic mixing deep in the lung.</strong>
	Proc Natl Acad Sci U S A. 2002 Jul 23;99(15):10173-8. Epub 2002 Jul 15. https://doi.org/10.1073/pnas.102318299


### Particle Deposition at In/Exhalation

#### Computational Simulations

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

* ##### darquenne
    BY C. DARQUENNE*, L. HARRINGTON AND G. K. PRISK
    <strong>Alveolar duct expansion greatly enhances aerosol deposition: a three-dimensional computational fluid dynamics study</strong>
    Phil. Trans. R. Soc. A (2009) 367, 2333–2346 https://doi.org/10.1098/rsta.2008.0295

#### Experiments

* ##### rissler
	Rissler, Gudmundsson, Nicklasson, Swietlicki, Wollmer, Löndahl.
	<strong>Deposition efficiency of inhaled particles (15-5000 nm) related to breathing pattern and lung function: an experimental study in healthy children and adults.</strong>
	Jonas K. F. Jakobsson, Johan Hedlund, John Kumlin, Per Wollmer & Jakob Löndahl
	Part Fibre Toxicol. 2017 Apr 8;14(1):10. doi: 10.1186/s12989-017-0190-8.
	https://doi.org/10.1186/s12989-017-0190-8
    

### Sources of Exhaled Particles
    
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
    
* ##### milton2013
    Milton, D. K., Fabian, M. P., Cowling, B. J., Grantham, M. L., & McDevitt, J. J. (2013). <strong>Influenza virus aerosols in human exhaled breath: particle size, culturability, and effect of surgical masks.</strong> PLoS pathogens, 9(3), e1003205. https://doi.org/10.1371/journal.ppat.1003205

* ##### milton2018
    Jing Yan, Michael Grantham, Jovan Pantelic, P. Jacob Bueno de Mesquita, Barbara Albert, Fengjie Liu, Sheryl Ehrman, Donald K. Milton, EMIT Consortium
    <strong> Aerosol shedding of infectious influenza virus</strong>
    Proceedings of the National Academy of Sciences Jan 2018, 115 (5) 1081-1086; https://doi.org/10.1073/pnas.1716561115
    
* ##### morawska
    Johnson, Graham & Morawska, Lidia & Ristovski, Zoran & Hargreaves, M. & Mengersen, K. & Chao, Christopher & Wan, Man-Pun & Li, Yuguo & Xie, Xiaojian & Katoshevski, David & Corbett, Shay. (2011). Modality of human expired aerosol size distributions. Journal of Aerosol Science - J AEROSOL SCI. 42. 839-851. https://doi.org/10.1016/j.jaerosci.2011.07.009. 

  
### Transmission and Infection of  Respiratory Viruses

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