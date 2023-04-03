## Dataviz & API ==> Création & développement D'application web

<! Ce projet a pour objectif de développer une application web qui permette de visualiser des données de façon dynamique. Ce principe peut être pris de manière très large : ainsi, il peut s’agir de construire une page web affichant un graphique « classique » reflétant l’évolution de telle ou telle donnée. Mais il peut aussi s’agir de créer une animation mettant en scène des données de façon plus originale ou ludique (voir plus bas dans les idées proposées). !/>

## NOM du site : LA VOITURE À NANTES
# VrOuuuuuM-VrOuuuuuM

Vous recherchez une solution facile et pratique pour trouver des places de stationnement libres en ville ?
Cette application de stationnement en temps réel est la bonne réponse.
En quelques clics, vous pouvez trouver des places de stationnement disponibles.

Avec ces données de stationnement à votre disposition, fini le stress de la recherche de place libre.

Profitez d’un stationnement facile zen et agréable.

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://readme.so/)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference


https://data.nantesmetropole.fr/api/v2

**-Catalog API to enumerate datasets**

#### GET/catalog/datasets ..Query catalog datasets
#### GET/catalog/exports/{format} Export a catalog
#### GET/catalog/facets ..List facet values

**-Dataset API to work on records**

#### GET/catalog/datasets/{dataset_id}/records ..Query dataset records


#### GET/catalog/datasets/{dataset_id}/exports/{format} ..Export a dataset


####GET/catalog/datasets/{dataset_id} ..Show dataset information


#### GET/catalog/datasets/{dataset_id}/facets ..List dataset facets


#### GET/catalog/datasets/{dataset_id}/attachments ..List dataset attachments


#### GET/catalog/datasets/{dataset_id}/records/{record_id} ..Read a dataset record

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `catalog` | `string` | **API to enumerate datasets** |
| `dataset` | `string` | **API to work on records** |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Appendix

|**Schemas**|
-
links{
href	string($uri)
rel	string
Enum:
Array [ 6 ]
}
-

dataset{
links	[...]
dataset	{...}
}
-
results_dataset{
total_count	integer
links	[...]
datasets	[...]
}
-
facet_value_enumeration{
name	string
count	integer
value	string
state	string
}
-
facet_enumeration{
name	string
facets	[...]
}
-
aggregation{
count	integer
cou_name_en	string
}
-
record{
record	{...}
links	[...]
}
-
results{
total_count	integer
links	[...]
records	[...]
}
-
attachment{
href	string
metas	{...}
}
-

## Authors

- [@arah-9 François DIOUF](https://github.com/farah-9)
- [@AgatheSz Agathe Szkola](https://github.com/AgatheSz)
- [@MarionLpz](https://github.com/MarionLpz)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Contributing

Les contributions sont toujours les bienvenues !

Voir `contributing.md` pour savoir comment commencer.

Merci de respecter le `code de conduite` de ce projet.














## Demo

https://github.com/adatechschool/projet-collectif---dataviz-api-agathe-francois-marion/blob/master/transportsNantes.html


## Documentation

[Documentation](https://linktodocumentation)



![vroum](https://user-images.githubusercontent.com/119256395/229467234-f54e1f65-7e34-4a60-9b38-b8e395d069a8.gif)



https://user-images.githubusercontent.com/119256395/229468087-c1bc15df-b4f6-4f91-a714-a84abce0d0cb.mp4


