import { Grid } from "@mui/material"
import { Entry } from "contentful"
import CompanyContext from "context"
import React, { useContext } from "react"
import { BlogsStyles, BlogStyles } from "styles/blog-styles"
import { Blog, Company } from "types"

function BlogComponent({ blog }: { blog: Entry<Blog> }) {
  const pubDate: Date = new Date(blog?.fields.publishedDate)

  return (
    <BlogStyles>
      <div role="listitem" className="w-dyn-item">
        <div>
          <img
            src={blog?.fields.titleImage.fields.file.url}
            className="blog-image w-inline-block"
            alt={blog?.fields.title}
            style={{ width: "100%" }}
          />
          <div className="blog-content">
            <div className="card-meta-content">
              <a href="/" className="category-tag">
                {blog.fields.tag}
              </a>
              <div className="card-meta-date">{pubDate.toDateString()}</div>
            </div>
            <a
              href="/blog/kindness-driven-development"
              className="link-block w-inline-block"
            >
              <h3 className="heading-3">{blog.fields.title}</h3>
            </a>
            <p className="paragraph-5">
              {blog.fields.description?.content?.[0]?.content?.[0].value}
            </p>
            <a href="/" className="link text-link-red">
              Read more
            </a>
          </div>
        </div>
      </div>
    </BlogStyles>
  )
}

function BlogsComponent() {
  const { blogs } = useContext(CompanyContext) as Company
  return (
    <BlogsStyles>
      <div className="div-block-4">
        <div className="max-w-width">
          <h4 className="sub-small-title">Blog</h4>
          <h3 className="centered-display">
            Sharing our thoughts
            <span className="text-gradient">.</span>
            <br />
          </h3>
        </div>
      </div>
      <div>
        <Grid container spacing={3} className="container">
          {blogs?.map((blog) => (
            <Grid
              item
              lg={4}
              sx={{ display: { xs: "flex" }, justifyContent: { xs: "center" } }}
            >
              <BlogComponent blog={blog} />
            </Grid>
          ))}
        </Grid>
      </div>
    </BlogsStyles>
  )
}

export default BlogsComponent
