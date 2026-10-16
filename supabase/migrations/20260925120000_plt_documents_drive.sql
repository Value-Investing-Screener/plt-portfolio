-- ---------------------------------------------------------------------------
-- PLT Insider — documents hébergés sur Google Drive.
--
-- Les PDF ne sont plus stockés dans le bucket `plt-documents` (quota de l'offre
-- gratuite) : l'administrateur colle le lien de partage Google Drive, et la base
-- ne conserve que ce lien.
--
-- Les lignes existantes gardent leur chemin de bucket dans `document_url` : elles
-- restent servies par `/api/documents/…` tant qu'elles n'ont pas été remplacées
-- par un lien Drive. Le bucket peut être vidé une fois tous les documents migrés.
-- ---------------------------------------------------------------------------

alter table public.plt_publication_report
  rename column storage_path to document_url;

-- La taille n'est connue que si Drive sert le fichier directement.
alter table public.plt_publication_report
  alter column file_size_bytes drop not null;

alter table public.plt_annual_review
  rename column storage_path to document_url;
