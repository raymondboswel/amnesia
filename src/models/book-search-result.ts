export class BookSearchResult {
  constructor(
  public title: string,
  public subtitle: string,
  public authors: string[],
  public cover_url: string,
  public id: string,
  public google_id: string) {

  }
}

