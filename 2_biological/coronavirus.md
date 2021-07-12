---
title: Coronaviruses
---

# Coronaviruses with a Focus on Sars-CoV-2
Topics on Coronaviruses helpful to understand the infections they cause.

* [Summary](#summary)
* [Systematics of Coronaviruses](#systematics-of-coronaviruses)
  * [Nidovirales](#nidovirales)
  * [Coronaviruses](#coronaviruses)
* [Coronavirus Life Cycle](#coronavirus-life-cycle)
  * [Virion Phase](#virion-phase)
  * [Metabolic Phase](#metabolic-phase)
* [Molecular Biology](#molecular-biology)
  * [Coronavirus Proteins](#coronavirus-proteins)
* [Capabilities](#capabilities)
  * [Enter Cells](#enter-cells)
* [Behaviors of Coronaviruses](#behaviors-of-coronaviruses)
  * [Introduction to the Behavior of Coronaviruses](#introduction-to-the-behavior-of-coronaviruses)
  * [Cell Behavior of Coronaviruses](#cell-behavior-of-coronaviruses)
  * [Cell Specific Behavior of Sars-Cov-2](#cell-specific-behavior-of-sars-cov-2)
* [Tropisms of Coronaviruses](#tropisms-of-coronaviruses)
  * [Respiratory Tract Tropism](#respiratory-tract-tropism)
* [Evolution](#evolution)
  * [Conquering to New Hosts](#conquering-to-new-hosts)
* [References](#references)
  * [RNA Viruses](#rna-viruses)
  * [Environmental Factors on Betacoronaviruses](#environmental-factors-on-betacoronaviruses)
  * [References Cell Entry](#references-cell-entry)

> **major (re)work in progress, April 2021**

## Summary
Coronaviruses with a focus on SARS-CoV-2: features, life cycle, tropism, habitats and evolution.

## Systematics of Coronaviruses

### Nidovirales
Coronaviruses belong to the order of Nidovirales. Nidovirales are positive single-stranded, non-segmented and enveloped RNA viruses. This means that their genetic material is encoded as a single positive strand of RNA - the same way as messenger RNA pieces of the cell. Enveloped means they have a membrane. Nido is latin for nest and describes two distinguishing features:  
* Nidovirales share a gene expression pattern in which several genes are encoded on the same RNA piece in a nested way[todo add ref lai 92]. 
* Moreover they partly shield their metabolism with nest like structures (double vesicles membrane vesicles [Lim et al 2016](#lim,liu-2016)) inside the host cell where the new virions are assembled. 

### Coronaviruses
The membrane is spherical and consists of structural proteins which are coated in a lipid bilayer membrane acquired from the host cell. This membrane is called envelope. 


#### Coronaviruses Species
[in work]

##### SARS-CoV-1
Betacoronavirus identified causing Sars in 2003/2004.
* mainly lower respiratory tract infections
* ACE2 receptor

##### SARS-CoV-2
Betacoronavirus identified causing the current Covid-19 pandemics. A focus of this page and many sections contain special notes about features of Sars-CoV-2.

##### MERS-CoV
Betacoronavirus identified causing MERS. 
* infects cells in the deep lungs (bronchi and alveolis) where its adhesion receptor DPP4 is mainly expressed [to check and cite]
* the natural hosts are dromedary camels; close relatives are found in bats and hedgehogs ([Hosts of Nidovirales](../2_biological/hosts_of_nidovirales.md).
* main spreading events observed in indoor settings

##### Bovine Coronaviruses
Abbreviated BCoV. Betacoronavirus causing diarrhea and respiratory infections in cattle.



## Coronavirus Life Cycle 
As mentioned in [Introduction to Viruses](#introduction-to-viruses) viruses have a multiphase life cycle. Coronaviruses have a two phase life cycle:
* [Virion Phase](#virion-phase):[Virion](#virion) birth form and no active metabolism.
* [Metabolic Phase](#metabolic-phase): Inside a cell using the cell metabolism.


### Virion Phase
Travel and Wait for Activation.
Virions have behave similar as seeds of plants: Travel and wait for the right conditions to unleash their energy (spring loaded proteins for viruses and starch for seeds) to start the active phase.


#### Virion Travel 
Once released from a cell virions are moved by external forces ([movement-of-virions](../2_biological/motility.md)) until they are [activated](#virion-priming) to start the cell infection process.
A virion needs to reach possibly a host, the  location of the target cells (e.g. an organ), a specific cell and then it needs to be matched to a receptor on the cell membrane in the order of nanometers. All this without being able to move on its own and thus relying on [external movements](../2_biological/mobility.md#mobility-of-virions). The virion-target match can happen because the virion is moved to the target, the target is moved to the virion or a combination.

The infectable cell can be:
* in the same host or in another host
* in the same tissue or in another tissue
* of the same cell type or of another cell type


#### Virion Priming

Coronaviruses virions usually need to be primed before they bind to cell or initiate cell fusion. Since:
* Target Cell Selection:
  *  Without metabolism virions can't reload the spikes (The spike are like springs and have stored energy by which a coronavirus virion can induce cell fusion) -> release the energy only on infectable cells.
  * For survival of the virus entity it is best if virions infect useful cells i.e. cells which support virus replication or cells otherwise useful to infect e.g. immune cells can be infected such they don't fight the viruses infecting other cells.
  * The target cell to infect is ideally not next to the originating cell to make targeting for the immune system more difficult.
* Masking: Priming enables coronaviruses to hide functional parts e.g. the receptor binding or the fusion domains, just become exposed once primed. This protects this parts from damage and recognition by the immune system.

Coronavirus virions interact with the environment mainly though the spikes, so the spike need to be primed. There can be several priming steps ahead or during the [cell entry process](#cell-entry).


##### Plant Seeds to Virions
> Plant seeds evolved first to travel and then to be activated under favorable conditions for growth, at least as far as the seeds are able to check the conditions. Similarly virions need to be primed to initiate cell entry and thereby start the [metabolic phase](#metabolic-phase). Plants mainly need and check the right physical and chemical conditions to growth. Correspondingly seeds are primed by their physical environmental factors such as temperature, humidity, light and minerals dissolved in the surrounding water to start their metabolism. Viruses need the right biological conditions inside the cells. Coronaviruses evolved to check biological conditions: receptors on cell membranes and proteases available in the environment around the cell.


#### Cell Entry
1. The virus gets attached to a matching receptor on the target cell mostly via the spike protein
    * The virions may slide along the cell surface or travel with the cell.
    * The virions may enter directly via fusion with the outer cell membrane or the virions may first be taken up into a cell internal vesicle and fuse with the surrounding internal membrane.
2. Fusion of the viral envelope with host cell membrane once [primed](#virion-priming): 
    1. binding to a receptor on the cell membrane -> cleavage sites are exposed 
    2. cleavage through proteases at specific cleavage sites enable a conformation change 
    3. the conformation change push the fusion-peptides of the spike protein into the cell membrane 
    4. with the fusion peptides anchored in the cell membrane a further conformation change of the spike protein presses the viral and cell membrane together which can result in membrane fusion.
3. Release and unpacking of genome and the structural proteins
4. Start the [metabolism](#metabolic-phase)

### Metabolic Phase
The viral metabolism starts once the genetic material of a virion is processed by a cell and thus the virus changes the cells metabolism. This happens in a foreign cell and cells have mechanism in place to prevent its metabolism being changed i.e. keeping the metabolism immune. For that reason, each of the following steps has a noteworthy probability of failing. 

#### Metabolism Phase 1: Build the Factory Hall and incorporate Host Machines (Ribosomes)
> in work

#### Metabolism Phase 2: Build the Machines = Build the RdRP Protein
[in work]
The goal of the first phase in the metabolism is to produce RdRP (RNA dependent RNA Polymerase protein). Additionally let the ribosomes produce some proteins that diminish the cells immune mechanisms such that the cell doesn't ring the bells. Steps:
1. Release RNA -- let the host ribosomes translate two ORFs of the viral genome with frame-shifting---> two large proteins
2. --cleave--> pieces of proteins
3. --like magnets these pieces self arrange to structures--> 
   * proteins providing the right setting for the phase 2 metabolism e.g. prevent the cells protection mechanisms working
   * polymerase protein (protein capable of transcription of RNA to RNA) 

#### Metabolism Phase 3: Produce Self Copies = Replicate
The metabolism can produce new virions that are released from the cell. The properties and and the environment of the cell influence the properties of the virions produced. This phase is initiated by the transcription of the (+) strand RNA to a (-) strand RNA template mediated by the polymerase protein:
1. (+) RNA --transcription--> (-) RNA template
2. (-) RNA template -- transcription-->
   *  pieces of subgenomic mRNAs which get translated to mostly structural proteins (N, S, M, E, HE)
   *  (+) RNA genomes to get packed together with the N proteins to form the nucleocapsids of new virions and thus building up new virions.



## Molecular Biology

> **in work**

### Coronavirus Proteins  
RNA viruses have small but highly optimized genomes. Each protein is often - like a swiss army knife - capable of different functions.

#### Virion Proteins

> **in work and incomplete June 2021**

Virion proteins = structural proteins: used to give newly built viruses structure. These are the membrane proteins (E, S, M, [HE]) and the internal protein N. Besides their function in virions these proteins may have functions in the metabolic phase.
- stabilize the RNA: N, E
- stabilize the Envelope:
- diminish host defence: N
##### N Protein
N stand for Nucleocapsid protein
* diminish host defense
##### M Protein
M stand for Membrane protein
* M helps to build the membrane around the nucleocapsid
##### E Protein
E stand for Envelop protein
##### S Protein
S stand for Spike protein. The spike proteins point spike-like out of the spherical virions. This gives coronaviruses virions a corona (latin for crown or solar corona) like appearance under the electron microscope and therefore their name. Functions:
* RBD: The RBDs are located in the S1 part of the spike protein and binds to the ACE2 receptor. 


#### Metabolic Phase only Proteins
- RNA dependent RNA polymerase: duplicate RNA
- proteins to cleave other proteins and RNA [to check]



## Capabilities
[in work]

### Enter Cells
#### SARS-2 Cell Adhesion
The cell adhesion receptor used by SARS-CoV-1 [[Jiang](#jiang)] and SARS-Cov-2 [[LiF](#lif)],[[Hoffmann](#hoffmann)] is ACE2.



## Behaviors of Coronaviruses

### Introduction to the Behavior of Coronaviruses

Viruses optimized to their environment usually only infect cells involved in the survival of the virus strain:
* Cells used as entry point. For coronaviruses these are often cells on the epithelial layer of respiratory tract.
* Cells that support efficient virus replications takes place and virions easily reach the next cells to build up a population. For betacoronaviruses these are similar the entry cells i.e. secretory and ciliated cells in the epithelium of the respiratory tract.
* Cells relevant to leave a host. These vary for the different coronavirus species and the hosts infected.
    - Coronaviruses entities infecting outdoor living hosts, usually leave the hosts by feces. So cells in the intestine are infected.
    - For indoor living hosts (us humans and our domestic animals) these are often the same cells as entered i.e. cells in the respiratory tract.
* Cells which are relevant for the host immune response. Coronaviruses can infect immune system cells (dendritic and T cells) and induce apoptosis.


### Cell Behavior of Coronaviruses
#### Polarized Cells
* In vitro [cell culture to check] experiments from [McCray & Co](#summary-jia-2005) show both increased apical ACE2 expression and a corresponding increased cell entry from the apical side. [McCray & Co](#summary-jia-2005) also observed in the lab that Sars-CoV-1 exits the cell on the apical side following an apical entry with a preference of more than 1000:1. 
* Similar observations for the coronavirus 229E [[McCray](#mccray)]: It infects the cells, corresponding to its receptor (amino-peptidase N) expression, preferably from the apical surface. 229E exits apically with a preference of 10:1 (about 91%) for an apical entry and 5:1 (about 83%) even for basal entry.  


### Cell Specific Behavior of Sars-Cov-2
[in work]
* infection and efficient replication
    - alveolar type 2 cells
    - alveolar macrophages
    - ciliated epithelial cells in the bronchi
* infection but no replication
    - dendritic cells [to check entry mechanism]: usually apoptosis induced
* no entry and thus no infection
    - Cells neither expressing ACE2 nor phagocyting virions on their own and the virions are able to fuse the membranes once phagocyted (usually captured in an endosome). 
    E.g. antibody marked virions can get phagocyted by macrophages. 
    
        > This is both relevant upon reinfection and for the design of vaccines. Antibodies against the outer membrane proteins (e.g. the spike) can be a two-sided sword.




## Tropisms of Coronaviruses
Tropism for viruses denotes the cells and tissues they preferable replicate (defined on the [Viruses Page](viruses.md#virus-tropism)).

### Respiratory Tract Tropism
Coronaviruses are initially deposited and replicate well in the respiratory tract, thus they have a tropism for the respiratory tract.
However if large number of coronaviruses infect the single cell layer in the alveoli, a fraction of them can be released into the blood stream and spread with the blood.

#### Apical Side Tropism
* The transmission pathways of human coronaviruses (mostly airborne and vector-less) yield an initial deposition of the virions on the apical side together with the barrier function of the epithelial cell layer, the virions come mostly in contact with the apical sides of cells.
* Since coronaviruses preferable infect and leave cell on the apical side ([Cell Behavior](#cell-behavior-of-coronaviruses)), they remain on the apical side and spread through the respiratory tract lining fluid. 

> Unlike other viruses, betacoronaviruses usually don't enter tissues. 

 




## Evolution
[in work]

Coronaviruses can adapt fast to changed or new environments if given time and opportunity. The adaption over multiple generations occurs through genetic evolution i.e. mutation of RNA genome. Measured in mutations per time unit coronaviruses are among the fastest evolving life forms on earth. More in the [Evolution Chapter](./coronavirus_evolution.md).



### Conquering to New Hosts

#### Interspecies Infections of Coronaviruses
* all occurrences where [interspecies jumps](../2_biological/viruses.md#interspecies-jump) occurred at least one [interspecies infection](#interspecies-infection) must have occurred. But it is likely that many interspecies infections occurred before the jump happened. 
* Infections of Humans:
    - In the 70s and 80s there were a couple of reports that BCoV regularly causes infections in the human intestines. Most of them are based on EM images and serological evidence. However, since most groups couldn't cultivate the viruses and there's some doubt [citations on the way]. 
    - The HECV-4408 coronavirus was isolated from a child having diarrhea [Zhang et al](../5_epidemiological/covid_and_bovine_farming.md#zhang-94)
    - Using RNA sequence data and evolution-models [Dudas et al](../2_biological/hosts_of_nidovirales.md#summary-dudas-2017) conclude that there are likely hundred of infections per year from camel to humans.

#### Observed Interspecies Jumps
* jumps: Bovine coronaviruses have jumped to a whole range of hosts: canine, human, wild ruminants, porcine [Bidokhti et al](#bidokhti).
* jumps to humans, also called [zoonosis](../2_biological/viruses.md#zoonosis): MERS, Sars-CoV-1 and OC43 are all jumped from animals to humans [refs in work]. 



## References

### RNA Viruses

* ##### barr,fearns 2010
    John N. Barr and Rachel Fearns
    **How RNA viruses maintain their genome integrity**
    Journal of General Virology (2010), 91, 1373–1387 
    https://doi.org/10.1099/vir.0.020818-0


* ##### kikkert
	Marjolein Kikkert
	**Innate Immune Evasion by Human Respiratory RNA Viruses**
	J Innate Immun 2020;12:4–20
	https://doi.org/10.1159/000503030



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



### References Cell Entry

* ##### jiang
	Keiji Kuba , Yumiko Imai, Shuan Rao, Hong Gao, Feng Guo, Bin Guan, Yi Huan, Peng Yang,
	Yanli Zhang, Wei Deng, Linlin Bao, Binlin Zhang, Guang Liu, Zhong Wang, Mark Chappell,
	Yanxin Liu, Dexian Zheng, Andreas Leibbrandt, Teiji Wada, Arthur S Slutsky, Depei Liu, Chuan Qin,
	Chengyu Jiang & Josef M Penninger
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
	<https://doi.org/10.1128/jvi.74.19.9234-9239.2000>

 
* ##### hoffmann
	Markus Hoffmann, Hannah Kleine-Weber,
	Simon Schroeder, ..., Marcel A. Müller,
	Christian Drosten, Stefan Pöhlmann
	**SARS-CoV-2 Cell Entry Depends on ACE2 and TMPRSS2 and Is Blocked by a Clinically Proven Protease Inhibitor**
	Hoffmann et al., 2020, Cell 181, 1–10
	April 16, 2020 a 2020 Elsevier Inc.
	https://doi.org/10.1016/j.cell.2020.02.052


#### Summary Jia 2005
Hong Peng Jia, Dwight C. Look, Lei Shi, Melissa Hickey, Lecia Pewe, Jason Netland, Michael Farzan, Christine Wohlford-Lenane, Stanley Perlman, Paul B. McCray
**ACE2 Receptor Expression and Severe Acute Respiratory Syndrome Coronavirus Infection Depend on Differentiation of Human Airway Epithelia**  
Jr Journal of Virology Nov 2005, 79 (23) 14614-14621; <https://doi.org/10.1128/JVI.79.23.14614-14621.2005>
##### Methods
"We studied host-pathogen interactions using native lung tissue and a model of well-differentiated cultures of primary human airway epithelia."
##### Findings
* _ACE2 Expression:_ 
  * "ACE2 protein was more abundantly expressed on the apical than the basolateral surface of polarized airway epithelia. Interestingly, ACE2 expression positively correlated with the differentiation state of epithelia." ... 
  * "Of note, submersion of the apical surfaces of primary cells caused loss of cilia (Fig. 2A). Loss of this important marker of cell differentiation with resubmersion was associated with markedly diminished expression of ACE2 mRNA and protein (Fig. 2B and C)."
* _Cell Tropism:_ "Consistent with the expression pattern of ACE2, the entry of SARS-CoV or a lentivirus pseudotyped with SARS-CoV S protein in differentiated epithelia was more efficient when applied to the apical surface. Furthermore, SARS-CoV replicated in polarized epithelia and preferentially exited via the apical surface."
##### Discussion
* "The apical expression of ACE2 on epithelia indicates that this coronavirus receptor is accessible for topical application of receptor antagonists or inhibitors."
* " This pattern of apical infection and release of virus in polarized epithelia is reminiscent of transmissible porcine gastroenteritis virus (36) and HCoV-229E (44). In contrast, mouse hepatitis virus-A59 enters polarized cells from the apical surfaces and exits from the basolateral side (35)." 
