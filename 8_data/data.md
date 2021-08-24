
# Data 

## Distributed Handling
Data production / collection, data description and data analysis can be done separate today. 

> Separation of roles has a long tradition in science: Tycho Brahe collected the planetary motions, Kepler described them and Newton explained them.

Today separation of roles can be done faster, easier and in cooperation, thanks to modern communication technologies. The basis is, that data is observed/produced, recorded (often free of costs nowadays), annotated and searchable published.

In computer science it is well known that distributed and parallel data handling works best. This even on computers with only a couple of cores.
* Map reduce and similar
* Programming paradigms enabling parallel execution data handling

> We humans have billions of brains, so with good communication and openness we've got a lot of brain power to tackle any task.

<!--
* there are many skilled data scientists around the world. Many spending their time presenting us the most relevant ads. Relevant usually means highest click rate i.e. most distracting. Whether the distraction is good or bad depends on pre and post activity, e.g. to analyze Covid data for a change can be welcome. Remark: I consider adds as useful for product information and spread. -->

## Data Specifications
For data analysis it is important to have accurate, consistent and clearly specified data and notifications about possible inaccuracies or changed specifications. Notified corrections are helpful too.

The different measurement methods regarding Covid-19 with no or few specifications have a lot of space for improvement all around the world. A uniform agreement on annotations would make the data better comparable.

<!--todo:update -->
E.g. In Switzerland as of 17.4.20, the testing policy is to test only people who are sick _and_ belong to a risk group. The policy is mostly followed, however is hard to find on the official page from the BAG (Swiss Health Department, bag.admin.ch in the German Covid-19 FAQ) and even left out on the English version (as of 17.4.20). The official statistics on the same domain, has no note about this testing scheme. The data are analyzable (since largely consistent) and expressive but just not comparable to countries, where everybody who is sick or even everybody who could be infected is tested.
Remark: As of 1.5.20 more people are allowed to test.


#### Data Features
* For analysis is useful to have as complete, accurate and fine-grained data as possible and data protection laws permit (e.g. age, medical conditions and locations).
* Clinical observations annotated and published with as much data as possible
* Interpretations and analyses are nice but data analysis can be done dis

#### Easy Readable
Data ideally are in a common format (e.g. CSV), on a public API (e.g. GitHub repository or REST API) and are annotated e.g. contain a readme with the specifications what and how is measured. 


## Permission Policies
* #### Default Allow
  Default Allow = Allow unless Denied: Target everything *with* a specific feature and allow everything else. Also called blacklist (=items to block) approach in computer science)
* #### Default Deny
  Default Deny = Deny unless Allowed: Allow only items *with* a specific feature = block all other items i.e. those *without* the specific feature. Also called whitelist (=items to allow) approach in computer science.


Permission policies are relevant for:
* Individual Measures and Covid Apps [page currently in work]
* The immune system: Some parts of the immune system work by default allow (e.g. T cells, pathogen recognition by conserved patterns) and some parts of the immune system work by default deny (e.g. natural killer cells check for MHC expression and target all other cells; the blood brain barrier blocks by default).

