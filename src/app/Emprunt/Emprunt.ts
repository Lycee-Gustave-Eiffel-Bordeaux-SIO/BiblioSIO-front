export interface Emprunt {
  id: Number,
  emprunteur: Record<'id'|'url', String>,
  exemplaire: Record<'id'|'url', String>,
  dateEmprunt: Date,
  dateEcheance: Date,
  dateRetour: Date,
  statut: StatutEmprunt
}

export enum StatutEmprunt {
  EN_COURS = "EN_COURS",
  EN_RETARD = "EN_RETARD",
  TERMINE = "TERMINE"
}
