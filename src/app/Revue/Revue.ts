export interface Revue {
  id: Number,
  titre: String,
  exemplaires: Record<'id'|'url', String>[]
}
