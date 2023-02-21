
type base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Post extends base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
}

interface Movie extends base {
    link: string;
    title: string;
    rating: string;
    cover: Image;
}

interface App extends base {
    link: string;
    description: string;
    name: string;
    icon: Image;
}

interface App extends base {
    link: string;
    description: string;
    name: string;
    icon: Image;
}

interface Book extends base {
    link: string;
    author: string;
    rating: string;
    title: string;
    cover: Image;
}

interface Unread extends Base {
    cover: Image;
    title: string;
    rating: string;
    author: string;
    link: string;
}


interface Author extends Base {
    bio: Block [];
    image: Image;
    name: string;
    slug: Slug;
}

interface Image {
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string; 
    _type: "block";
    children: Span[];
    markDefs: any[];
    style:"normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface MainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}