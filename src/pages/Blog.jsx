import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PixelwaveLogo from '../components/PixelwaveLogo'

function Blog() {
  const navigate = useNavigate()
  const [expandedPost, setExpandedPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Explore emerging trends in digital marketing and how they impact business growth. From AI-powered automation to voice search optimization, discover what's shaping the industry.",
      fullContent: `
        <h2>The Future of Digital Marketing in 2025</h2>
        <p>As we move through 2025, the digital marketing landscape continues to evolve at an unprecedented pace. Businesses that stay ahead of these trends will have a significant competitive advantage.</p>
        
        <h3>1. AI-Powered Marketing Automation</h3>
        <p>Artificial Intelligence is revolutionizing how we approach digital marketing. From automated email campaigns to predictive analytics, AI is helping businesses deliver more personalized experiences to their customers.</p>
        
        <h3>2. Voice Search Optimization</h3>
        <p>With the rise of smart speakers and voice assistants, optimizing for voice search has become crucial. This means focusing on conversational keywords and local SEO strategies.</p>
        
        <h3>3. Video Marketing Dominance</h3>
        <p>Video content continues to dominate social media platforms. Short-form videos, live streaming, and interactive content are becoming essential for brand engagement.</p>
        
        <h3>4. Privacy-First Marketing</h3>
        <p>With increasing privacy regulations, marketers need to focus on building trust and collecting first-party data while respecting user privacy.</p>
        
        <p>At Pixelwave Marketing, we help businesses navigate these changes and implement strategies that drive real results. Contact us to learn how we can help your business thrive in this evolving landscape.</p>
      `,
      date: "August 5, 2025",
      category: "Digital Marketing"
    },
    {
      id: 2,
      title: "Why Your Business Needs a Mobile-First Website",
      excerpt: "With over 60% of web traffic coming from mobile devices, having a mobile-first website is no longer optional. Learn why it's crucial for your business success.",
      fullContent: `
        <h2>Why Your Business Needs a Mobile-First Website</h2>
        <p>In today's digital landscape, mobile devices account for over 60% of web traffic. This shift has made mobile-first design not just a trend, but a business necessity.</p>
        
        <h3>The Mobile-First Imperative</h3>
        <p>Google's mobile-first indexing means your website's mobile version is now the primary factor in search rankings. A poor mobile experience can significantly impact your search visibility.</p>
        
        <h3>User Experience Matters</h3>
        <p>Mobile users have different needs and behaviors than desktop users. They expect fast loading times, easy navigation, and touch-friendly interfaces.</p>
        
        <h3>Performance Benefits</h3>
        <p>Mobile-first design often leads to better overall performance, as it forces developers to focus on essential content and optimize for speed.</p>
        
        <h3>Competitive Advantage</h3>
        <p>Many businesses still haven't fully embraced mobile-first design, giving you an opportunity to stand out and capture mobile users effectively.</p>
        
        <p>Our team at Pixelwave Marketing specializes in creating mobile-first websites that not only look great but also perform exceptionally well across all devices.</p>
      `,
      date: "July 1, 2025",
      category: "Web Development"
    },
    {
      id: 3,
      title: "SEO Strategies That Actually Work in 2025",
      excerpt: "Search engine optimization continues to evolve. Discover the most effective SEO strategies that will help your website rank higher and attract more organic traffic.",
      fullContent: `
        <h2>SEO Strategies That Actually Work in 2025</h2>
        <p>Search Engine Optimization has evolved significantly, and what worked in 2024 might not be as effective today. Here are the strategies that are actually driving results.</p>
        
        <h3>1. Core Web Vitals</h3>
        <p>Google's Core Web Vitals are now ranking factors. Focus on improving loading speed, interactivity, and visual stability to boost your rankings.</p>
        
        <h3>2. E-A-T (Expertise, Authoritativeness, Trustworthiness)</h3>
        <p>Google values content from authoritative sources. Build your expertise through quality content and establish trust with your audience.</p>
        
        <h3>3. User Intent Optimization</h3>
        <p>Understanding and matching user intent is crucial. Create content that directly answers what users are searching for.</p>
        
        <h3>4. Local SEO for Small Businesses</h3>
        <p>For local businesses, optimizing for local search is essential. This includes Google My Business optimization and local keyword targeting.</p>
        
        <p>Effective SEO requires ongoing effort and adaptation to algorithm changes. Our SEO services help businesses stay ahead of these changes and maintain strong search visibility.</p>
      `,
      date: "June 4, 2025",
      category: "SEO"
    },
    {
      id: 4,
      title: "The Power of Local SEO for Small Businesses",
      excerpt: "Local SEO is essential for businesses serving specific geographic areas. Learn how to optimize your online presence to attract local customers and increase foot traffic.",
      fullContent: `
        <h2>The Power of Local SEO for Small Businesses</h2>
        <p>For small businesses serving local markets, local SEO can be the difference between success and struggle. Here's how to leverage it effectively.</p>
        
        <h3>Google My Business Optimization</h3>
        <p>Your Google My Business profile is often the first thing potential customers see. Keep it updated with accurate information, photos, and regular posts.</p>
        
        <h3>Local Keyword Research</h3>
        <p>Target keywords that include your location and service area. For example, "digital marketing agency Nashville TN" instead of just "digital marketing agency."</p>
        
        <h3>Local Citations and Reviews</h3>
        <p>Consistent business information across directories and positive customer reviews significantly impact local search rankings.</p>
        
        <h3>Local Content Strategy</h3>
        <p>Create content that's relevant to your local community. This could include local events, community involvement, or local business partnerships.</p>
        
        <p>Local SEO requires consistent effort and local market knowledge. Our team helps small businesses dominate their local search results and attract more local customers.</p>
      `,
      date: "May 7, 2025",
      category: "Local SEO"
    },
    {
      id: 5,
      title: "How AI is Transforming Digital Marketing in 2025",
      excerpt: "Artificial Intelligence is no longer a futuristic concept - it's here and revolutionizing how businesses approach digital marketing. Discover the practical applications and benefits.",
      fullContent: `
        <h2>How AI is Transforming Digital Marketing in 2025</h2>
        <p>Artificial Intelligence has moved from buzzword to essential tool in digital marketing. Here's how AI is reshaping the industry and what it means for your business.</p>
        
        <h3>Personalized Customer Experiences</h3>
        <p>AI enables hyper-personalization by analyzing user behavior and preferences. This leads to more relevant content, product recommendations, and marketing messages.</p>
        
        <h3>Predictive Analytics</h3>
        <p>AI-powered analytics can predict customer behavior, helping businesses make data-driven decisions about marketing strategies and resource allocation.</p>
        
        <h3>Automated Content Creation</h3>
        <p>While AI can't replace human creativity, it can assist in content creation, from generating headlines to optimizing copy for better engagement.</p>
        
        <h3>Chatbots and Customer Service</h3>
        <p>AI-powered chatbots provide instant customer support, improving user experience and freeing up human resources for more complex tasks.</p>
        
        <p>At Pixelwave Marketing, we leverage AI tools to enhance our marketing strategies while maintaining the human touch that builds genuine customer relationships.</p>
      `,
      date: "April 6, 2025",
      category: "Digital Marketing"
    },
    {
      id: 6,
      title: "The Rise of Voice Search: What It Means for Your Business",
      excerpt: "Voice search is growing rapidly, and businesses need to adapt their SEO strategies accordingly. Learn how to optimize for voice search and capture this growing audience.",
      fullContent: `
        <h2>The Rise of Voice Search: What It Means for Your Business</h2>
        <p>Voice search is no longer a novelty - it's becoming a primary way people search for information. Understanding how to optimize for voice search is crucial for business success.</p>
        
        <h3>Understanding Voice Search Behavior</h3>
        <p>Voice searches are typically longer and more conversational than text searches. People ask questions rather than typing keywords, requiring a different SEO approach.</p>
        
        <h3>Local SEO and Voice Search</h3>
        <p>Many voice searches are location-based ("near me" queries). This makes local SEO even more important for businesses serving specific geographic areas.</p>
        
        <h3>Featured Snippets and Voice Search</h3>
        <p>Voice assistants often read featured snippets as answers. Optimizing for featured snippets can significantly increase your visibility in voice search results.</p>
        
        <h3>Long-tail Keywords for Voice</h3>
        <p>Focus on natural, conversational phrases that match how people actually speak when using voice search.</p>
        
        <p>Voice search optimization requires a different approach to SEO, but the rewards can be substantial for businesses that get it right.</p>
      `,
      date: "March 11, 2025",
      category: "SEO"
    }
  ]

  const handlePostClick = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId)
  }

  return (
    <div className="page-container" style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Helmet>
        <title>Digital Marketing Blog | Pixelwave Marketing</title>
        <meta name="description" content="Expert insights on digital marketing, web development, and business growth strategies. Stay updated with the latest trends and best practices." />
        <meta name="keywords" content="digital marketing blog, web development tips, SEO strategies, business growth, marketing insights" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Pixelwave Marketing Blog",
              "description": "Expert insights on digital marketing and web development",
              "publisher": {
                "@type": "Organization",
                "name": "Pixelwave Marketing"
              },
              "blogPost": [
                ${blogPosts.map(post => `
                  {
                    "@type": "BlogPosting",
                    "headline": "${post.title}",
                    "description": "${post.excerpt}",
                    "datePublished": "${post.date}",
                    "dateModified": "${post.date}",
                    "articleSection": "${post.category}",
                    "wordCount": "${post.fullContent.split(' ').length}"
                  }
                `).join(',')}
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Header />
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        marginTop: '10px',
        overflow: 'hidden'
      }}>
        <PixelwaveLogo />
      </div>

      {/* Hero Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#f8fafc',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#1e293b',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Digital Marketing Insights
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '40px'
          }}>
            Stay updated with the latest trends, strategies, and insights in digital marketing, web development, and business growth.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section style={{
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '40px',
          justifyContent: 'center'
        }}>
          {blogPosts.map((post) => (
            <article key={post.id} style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '30px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              minWidth: '280px',
              flex: '1 1 400px',
              maxWidth: '500px',
              ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)'
              }
            }}
            onClick={() => handlePostClick(post.id)}>
              <div style={{
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {post.category}
                </span>
              </div>
              
              <h2 style={{
                fontSize: '1.5rem',
                color: '#1e293b',
                marginBottom: '15px',
                fontWeight: '600'
              }}>
                {post.title}
              </h2>
              
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {post.excerpt}
              </p>

              {/* Expanded Content */}
              {expandedPost === post.id && (
                <div style={{
                  marginTop: '20px',
                  padding: '20px',
                  backgroundColor: '#f8fafc',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div 
                    dangerouslySetInnerHTML={{ __html: post.fullContent }}
                    style={{
                      color: '#374151',
                      lineHeight: '1.7',
                      fontSize: '1rem'
                    }}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePostClick(post.id)
                    }}
                    className="cta-button"
                    style={{
                      marginTop: '20px',
                      padding: '8px 16px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Read Less
                  </button>
                </div>
              )}

              {expandedPost !== post.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePostClick(post.id)
                  }}
                  style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#2563eb',
                    border: '1px solid #2563eb',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                >
                  Read More
                </button>
              )}
              
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                fontSize: '0.9rem',
                color: '#94a3b8',
                marginTop: '20px'
              }}>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          backgroundColor: '#f1f5f9',
          borderRadius: '12px'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#1e293b',
            marginBottom: '20px'
          }}>
            Ready to Grow Your Business?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            marginBottom: '30px'
          }}>
            Let's discuss how our digital marketing expertise can help your business thrive.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="cta-button"
            style={{
              fontSize: '1.1rem'
            }}
          >
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog 