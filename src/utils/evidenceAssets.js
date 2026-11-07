const evidenceModules = {
  ...import.meta.glob('/evidence_assets/**/*.{avif,gif,jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
  ...import.meta.glob('/evidences_assets/**/*.{avif,gif,jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
};

const folderAliases = {
  'sirifruit': ['SiriFruit', 'SiriFruitApp'],
  'nara-operations': ['NaraApp', 'Nara'],
  'enterprise-vision-suite': ['Enterprise Vision Suite'],
  'eco-vision': ['EcoVision Spatial AI'],
  'tender-analyzer': ['TenderAnalyzes', 'TenderAnalyzer'],
  'superlearn': ['SuperLearn'],
};

export function getEvidenceImages(projectId) {
  const folders = folderAliases[projectId.toLowerCase()] || [projectId];
  return Object.entries(evidenceModules)
    .filter(([path]) => folders.some((folder) => path.includes(`/${folder}/`)))
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src]) => ({
      src,
      name: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
    }));
}

