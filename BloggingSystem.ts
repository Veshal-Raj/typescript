// Blog

class BlogPost {
    protected title: string;
    protected content: string;
    protected author: string;
    protected date: Date;

    constructor(title: string, content: string, author: string, date: Date) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
    }

    displayPost():void {
        console.log(`[${this.date.toISOString()} ${this.title} by ${this.author}]`)
        console.log(this.content)
    }
}


class Article extends BlogPost {
    private category: string;

    constructor(title: string, content: string, author: string, date: Date, category: string){
        super(title, content, author, date)
        this.category = category;
    }

    displayPost(): void {
        super.displayPost()
        console.log(`Category: ${this.category}`)
    }
}

class VideoPost extends BlogPost {
    private url: string;

    constructor(title: string, content: string, author: string, date: Date, url: string) {
        super(title, content, author, date)
        this.url = url
    }

    displayPost(): void {
        super.displayPost()
        console.log(`Video url: ${this.url}`)
    }
}


class Blog {
    private posts: BlogPost[] = [];

    addPost(post: BlogPost): void {
        this.posts.push(post);
        console.log(`New post  added to the blog.`);
    }

    displayBlog(): void {
        console.log("=== Blog Posts ===");
        this.posts.forEach(post => {
            post.displayPost();
            console.log("\n-------------------\n");
        });
    }
}

const articlePost = new Article("Introduction to TypeScript", "TypeScript is a superset of JavaScript...", "John Doe",new Date(), "Programming");
const videoPost = new VideoPost("Web Development Basics", "In this video, we cover the basics of web development...",  "Jane Smith", new Date(),"https://www.youtube.com/watch?v=...");

const blog = new Blog();
blog.addPost(articlePost);
blog.addPost(videoPost);

blog.displayBlog();