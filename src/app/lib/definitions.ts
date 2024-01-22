export interface BlogPost {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: number[]
  yoast_head: string
  yoast_head_json: YoastHeadJson
  jetpack_sharing_enabled: boolean
  jetpack_featured_media_url: string
  jetpack_shortlink: string
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  inline_featured_image: boolean
  jetpack_post_was_ever_published: boolean
  _jetpack_newsletter_access: string
  _jetpack_newsletter_tier_id: number
  footnotes: string
}

export interface YoastHeadJson {
  title: string
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  article_published_time: string
  og_image: OgImage[]
  author: string
  twitter_card: string
  twitter_misc: TwitterMisc
  schema: Schema
  description?: string
  article_modified_time?: string
}

export interface Robots {
  index: string
  follow: string
  "max-snippet": string
  "max-image-preview": string
  "max-video-preview": string
}

export interface OgImage {
  width: number
  height: number
  url: string
  type: string
}

export interface TwitterMisc {
  "Written by": string
  "Est. reading time": string
}

export interface Schema {
  "@context": string
  "@graph": Graph[]
}

export interface Graph {
  "@type": string
  "@id": string
  isPartOf?: IsPartOf
  author?: Author
  headline?: string
  datePublished?: string
  dateModified?: string
  mainEntityOfPage?: MainEntityOfPage
  wordCount?: number
  commentCount?: number
  publisher?: Publisher
  keywords?: string[]
  articleSection?: string[]
  inLanguage?: string
  potentialAction?: PotentialAction[]
  url?: string
  name?: string
  breadcrumb?: Breadcrumb
  description?: string
  itemListElement?: ItemListElement[]
  alternateName?: string
  logo?: Logo
  image?: Image
  sameAs?: string[]
}

export interface IsPartOf {
  "@id": string
}

export interface Author {
  name: string
  "@id": string
}

export interface MainEntityOfPage {
  "@id": string
}

export interface Publisher {
  "@id": string
}

export interface PotentialAction {
  "@type": string
  target: any
  "query-input"?: string
  name?: string
}

export interface Breadcrumb {
  "@id": string
}

export interface ItemListElement {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface Logo {
  "@type": string
  inLanguage: string
  "@id": string
  url: string
  contentUrl: string
  width: number
  height: number
  caption: string
}

export interface Image {
  "@type"?: string
  inLanguage?: string
  "@id": string
  url?: string
  contentUrl?: string
  caption?: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author2[]
  replies: Reply[]
  "version-history": VersionHistory[]
  "predecessor-version": PredecessorVersion[]
  "wp:featuredmedia": Featuredmedum[]
  "wp:attachment": WpAttachment[]
  "wp:term": WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author2 {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface Featuredmedum {
  embeddable: boolean
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}

export interface Author {
    id: number
    name: string
    url: string
    description: string
    link: string
    slug: string
    avatar_urls: AvatarUrls
    meta: Meta
    yoast_head: string
    yoast_head_json: YoastHeadJson
    _links: Links
  }
  
  export interface AvatarUrls {
    "24": string
    "48": string
    "96": string
  }
  
  export interface Meta {
    rsssl_two_fa_status: string
  }
  
  export interface YoastHeadJson {
    title: string
    robots: Robots
    canonical: string
    og_locale: string
    og_type: string
    og_title: string
    og_url: string
    og_site_name: string
    og_image: OgImage[]
    twitter_card: string
    schema: Schema
  }
  
  export interface Robots {
    index: string
    follow: string
    "max-snippet": string
    "max-image-preview": string
    "max-video-preview": string
  }
  
  export interface OgImage {
    url: string
  }
  
  export interface Schema {
    "@context": string
    "@graph": Graph[]
  }
  
  export interface Graph {
    "@type": string
    "@id": string
    url?: string
    name?: string
    isPartOf?: IsPartOf
    breadcrumb?: Breadcrumb
    inLanguage?: string
    potentialAction?: PotentialAction[]
    itemListElement?: ItemListElement[]
    description?: string
    publisher?: Publisher
    alternateName?: string
    logo?: Logo
    image?: Image
    sameAs?: string[]
    mainEntityOfPage?: MainEntityOfPage
  }
  
  export interface IsPartOf {
    "@id": string
  }
  
  export interface Breadcrumb {
    "@id": string
  }
  
  export interface PotentialAction {
    "@type": string
    target: any
    "query-input"?: string
  }
  
  export interface ItemListElement {
    "@type": string
    position: number
    name: string
    item?: string
  }
  
  export interface Publisher {
    "@id": string
  }
  
  export interface Logo {
    "@type": string
    inLanguage: string
    "@id": string
    url: string
    contentUrl: string
    width: number
    height: number
    caption: string
  }
  
  export interface Image {
    "@type"?: string
    inLanguage?: string
    "@id": string
    url?: string
    contentUrl?: string
    caption?: string
  }
  
  export interface MainEntityOfPage {
    "@id": string
  }
  
  export interface Links {
    self: Self[]
    collection: Collection[]
  }
  
  export interface Self {
    href: string
  }
  
  export interface Collection {
    href: string
  }
  