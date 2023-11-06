export interface Article {
  id: Number,
  titre: String,
  description: String,
  exemplaire: Record<'id'|'url', String>
}
