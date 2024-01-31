
// real use case of enums
  // 1
  enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
  }
  
  let responseCode: HttpStatusCode = HttpStatusCode.OK;
  
  // 2
  enum UserRole {
    Admin,
    Author,
    Reader
  }
  
  // Example usage:
  let userRole: UserRole = UserRole.Author;
  
  // 3
  enum ArticleStatus {
    Draft,
    Published,
    Archived
  }
  
  // Example usage:
  let articleStatus: ArticleStatus = ArticleStatus.Published;
  
  // 4
  enum ArticleCategory {
    Technology,
    Science,
    Health,
    Travel
    // ... other categories
  }
  
  // Example usage:
  let articleCategory: ArticleCategory = ArticleCategory.Technology;
  
  // 5
  enum NotificationType {
    NewFollower,
    CommentOnPost,
    MentionedInComment
    // ... other notification types
  }
  
  // Example usage:
  let notificationType: NotificationType = NotificationType.CommentOnPost;

  // 6
  enum PostVisibility {
    Public,
    Private,
    MembersOnly
  }
  
  // Example usage:
  let postVisibility: PostVisibility = PostVisibility.Public;
  

  // const enums

  const enum LogLevel {
    Info,
    Warning,
    Error
  }
  
  // Usage
  let logLevel: LogLevel = LogLevel.Info;

  
  const enum ArticleStatus1 {
    Draft,
    Published,
    Archived
  }
  
  // Usage
  let status1: ArticleStatus1 = ArticleStatus1.Published;
  

  const enum UserRoles {
    Admin,
    Author,
    Reader
  }
  
  function checkUserRole(role: number): boolean {
    return role === UserRoles.Admin;
  }
  
  // Usage
  let isAdmin: boolean = checkUserRole(UserRoles.Admin);
  