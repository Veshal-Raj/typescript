// Blog
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BlogPost = /** @class */ (function () {
    function BlogPost(title, content, author, date) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
    }
    BlogPost.prototype.displayPost = function () {
        console.log("[".concat(this.date.toISOString(), " ").concat(this.title, " by ").concat(this.author, "]"));
        console.log(this.content);
    };
    return BlogPost;
}());
var Article = /** @class */ (function (_super) {
    __extends(Article, _super);
    function Article(title, content, author, date, category) {
        var _this = _super.call(this, title, content, author, date) || this;
        _this.category = category;
        return _this;
    }
    Article.prototype.displayPost = function () {
        _super.prototype.displayPost.call(this);
        console.log("Category: ".concat(this.category));
    };
    return Article;
}(BlogPost));
var VideoPost = /** @class */ (function (_super) {
    __extends(VideoPost, _super);
    function VideoPost(title, content, author, date, url) {
        var _this = _super.call(this, title, content, author, date) || this;
        _this.url = url;
        return _this;
    }
    VideoPost.prototype.displayPost = function () {
        _super.prototype.displayPost.call(this);
        console.log("Video url: ".concat(this.url));
    };
    return VideoPost;
}(BlogPost));
var Blog = /** @class */ (function () {
    function Blog() {
        this.posts = [];
    }
    Blog.prototype.addPost = function (post) {
        this.posts.push(post);
        console.log("New post  added to the blog.");
    };
    Blog.prototype.displayBlog = function () {
        console.log("=== Blog Posts ===");
        this.posts.forEach(function (post) {
            post.displayPost();
            console.log("\n-------------------\n");
        });
    };
    return Blog;
}());
var articlePost = new Article("Introduction to TypeScript", "TypeScript is a superset of JavaScript...", "John Doe", new Date(), "Programming");
var videoPost = new VideoPost("Web Development Basics", "In this video, we cover the basics of web development...", "Jane Smith", new Date(), "https://www.youtube.com/watch?v=...");
var blog = new Blog();
blog.addPost(articlePost);
blog.addPost(videoPost);
blog.displayBlog();
