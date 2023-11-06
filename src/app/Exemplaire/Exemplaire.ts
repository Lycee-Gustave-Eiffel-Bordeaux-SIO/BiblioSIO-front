export interface Exemplaire {
  id: Number,
  revue: Record<'id'|'url', String>,
  titre: String,
  moisParution: String,
  anneeParution: String,
  articles: Record<'id'|'url', String>[],
  statut: Boolean
}
