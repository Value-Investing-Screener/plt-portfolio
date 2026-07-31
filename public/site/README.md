# Visuels du site vitrine

Les photos de la page d'accueil vivent ici et sont référencées par
[`src/components/site/images.ts`](../../src/components/site/images.ts).
Tant qu'une entrée vaut `src: null` — ou que le fichier ne se charge pas — la
section affiche le calage rayé du prototype : la page reste présentable.

## En place

| Fichier | Section |
| --- | --- |
| `hero-plt.jpg` | Hero — médaillon rond |
| `livre-small-caps.webp` | Livre — couverture détourée (fond transparent) |
| `newsletter.jpg` | Niveau 1 — newsletter |
| `value-investing-screener.jpg` | Niveau 2 — logiciel |
| `plt-family-office.jpg` | Niveau 3 — PLT Family Office |
| `plt-family-office-bis.jpg` | Variante du niveau 3, non utilisée |

## Manquantes

| Entrée dans `images.ts` | Section | Cadrage |
| --- | --- | --- |
| `bioPortrait` | Bio — portrait | 3/4 vertical |
| `bioStage` | Bio — scène / public | 4/3 |
| `insider` | Niveau 4 — club privé | 4/3 |

Déposer le fichier ici, puis renseigner son chemin dans `images.ts`.

## Format

Les photos sont recadrées en `object-fit: cover` : prévoir large et centré.
Viser 1600 px sur le plus grand côté et un poids sous 300 Ko — les originaux
ont été réduits avec :

```bash
sips -s format jpeg -s formatOptions 82 --resampleHeightWidthMax 1600 source.png --out cible.jpg
```

La couverture du livre est le seul visuel détouré : elle est affichée en
`object-fit: contain` sur fond transparent, et encodée en WebP (le PNG
équivalent pesait dix fois plus). Son `ratio` est déclaré dans `Book.tsx` et
doit suivre les dimensions réelles du fichier.
