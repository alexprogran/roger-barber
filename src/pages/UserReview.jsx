import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Award, ThumbsUp } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import "./UserReview.css";

const UserReview = () => {
  const reviews = [
    {
      // id: 1,
      // name: "Carlos Silva",
      rating: 5,
      // date: "15 de Janeiro, 2024",
      // service: "Corte + Barba",
      comment: "Excelente atendimento! Ambiente aconchegante. Recomendo!",
      // verified: true
    },
    {
      id: 2,     
      rating: 5,        
      comment: "Primeira vez aqui e já me tornei cliente fiel. Qualidade excepcional!"    
    },
    {
      id: 3, 
      rating: 5,   
      comment: "Muito bom! O barbeiro entendeu exatamente o que eu queria. " 
    },
    {
      id: 4,
      rating: 5,
      comment: "Experiência completa! Desde o atendimento até o resultado final.",
     
    },
    {
      id: 5,
      rating: 5,
      comment: "Melhor barbearia da região! Profissionais qualificados."
    },
    {
      id: 6,
      rating: 5,
      comment: "Atendimento diferenciado! O tratamento capilar foi excelente.",
    }
  ];

  const stats = {
    totalReviews: '100%',
    averageRating: 5.0,
    fiveStars: 100,
    fourStars: 12,
    threeStars: 3,
    twoStars: 1,
    oneStar: 0
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={
          index < rating 
            ? "user-review-star-filled" 
            : "user-review-star-empty"
        }
      />
    ));
  };

  return (
    <div className="user-review-page">
      {/* Hero Section */}
      <section className="user-review-hero">
        <div className="user-review-container">
          <div className="user-review-hero-content">
            <div className="user-review-hero-badge-wrapper">
              <div className="user-review-hero-badge">
                <Award className="user-review-hero-badge-icon" />
                <span className="user-review-hero-badge-text">Avaliações dos Clientes</span>
              </div>
            </div>
            
            <h1 className="user-review-hero-title">
              <span className="user-review-hero-title-accent">O QUE DIZEM</span>
              <br />
              <span className="user-review-hero-title-foreground">SOBRE NÓS</span>
            </h1>
            
            {/* <p className="user-review-hero-description">
              Mais de {stats.totalReviews} clientes já confiaram em nossos serviços. 
              Veja o que eles têm a dizer sobre a experiência na nossa barbearia.
            </p> */}
             {/* <p className="user-review-hero-description">
             Agradecemos a todos os clientes que já confiaram em nossos serviços. 
              Veja o que eles têm a dizer sobre a experiência na nossa Roger Barber.
            </p> */}

            {/* Rating Stats */}
            <div className="user-review-stats">
              <div className="user-review-stat">
                <div className="user-review-stat-value-wrapper">
                  <Star className="user-review-stat-icon-accent" />
                  <span className="user-review-stat-value">{stats.averageRating}</span>
                </div>
                <p className="user-review-stat-label">Avaliação 5 estrelas</p>
              </div>
              
              <div className="user-review-stat">
                <div className="user-review-stat-value-wrapper">
                  <Users className="user-review-stat-icon-primary" />
                  <span className="user-review-stat-value">{stats.totalReviews}</span>
                </div>
                <p className="user-review-stat-label">Cliente Satisfeitos</p>
              </div>
              
              <div className="user-review-stat">
                <div className="user-review-stat-value-wrapper">
                  <ThumbsUp className="user-review-stat-icon-cta" />
                  <span className="user-review-stat-value">{stats.fiveStars}%</span>
                </div>
                <p className="user-review-stat-label">Recomendam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="user-review-grid-section">
        <div className="user-review-container">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="user-review-carousel"
          >
            <CarouselContent className="user-review-carousel-content">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="user-review-carousel-item">
                  <Card className="user-review-card">
                    <CardHeader className="user-review-card-header">
                      <div className="user-review-card-header-top">
                        <div>
                          <CardTitle className="user-review-card-name">
                            {review.name}
                          </CardTitle>
                          <CardDescription className="user-review-card-date">
                            {review.date}
                          </CardDescription>
                        </div>
                        {review.verified && (
                          <Badge variant="secondary" className="user-review-verified-badge">
                            Verificado
                          </Badge>
                        )}
                      </div>
                      
                      <div className="user-review-stars-wrapper">
                        {renderStars(review.rating)}
                        <span className="user-review-rating-text">
                          {review.rating}/5
                        </span>
                      </div>
                      
                      <Badge variant="outline" className="user-review-service-badge">
                        {review.service}
                      </Badge>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="user-review-comment-wrapper">
                        <Quote className="user-review-quote-icon" />
                        <p className="user-review-comment">
                          "{review.comment}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="user-review-carousel-prev" />
            <CarouselNext className="user-review-carousel-next" />
          </Carousel>
        </div>
      </section>

      
      {/* <section className="user-review-breakdown-section">
        <div className="user-review-container">
          <div className="user-review-breakdown-container">
            <h2 className="user-review-breakdown-title">
              DISTRIBUIÇÃO DAS AVALIAÇÕES
            </h2>
            
            <div className="user-review-breakdown-list">
              {[
                { stars: 5, count: stats.fiveStars, percentage: 89 },
                { stars: 4, count: stats.fourStars, percentage: 12 },
                { stars: 3, count: stats.threeStars, percentage: 3 },
                { stars: 2, count: stats.twoStars, percentage: 1 },
                { stars: 1, count: stats.oneStar, percentage: 0 }
              ].map((item) => (
                <div key={item.stars} className="user-review-breakdown-row">
                  <div className="user-review-breakdown-label">
                    <span className="user-review-breakdown-stars">{item.stars}</span>
                    <Star className="user-review-breakdown-star" />
                  </div>
                  
                  <div className="user-review-breakdown-bar">
                    <div 
                      className="user-review-breakdown-bar-fill"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  
                  <span className="user-review-breakdown-percentage">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="user-review-cta-section">
        <div className="user-review-cta-container">
          <h2 className="user-review-cta-title">
            SEJA O PRÓXIMO
          </h2>
          <p className="user-review-cta-text">
            Venha viver a experiência que nossos clientes tanto elogiam. 
            Agende seu horário e descubra por que somos a melhor barbearia da região.
          </p>
          <div className="user-review-cta-buttons">
            <a
              href="https://wa.me/5571981577250"
              target="_blank"
              rel="noopener noreferrer"
              className="user-review-cta-button-primary btn-barbershop"
            >
              {/* <svg
                className="user-review-button-icon" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg> */}
              Agende Agora
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      {/* <section className="user-review-trust-section">
        <div className="user-review-container">
          <div className="user-review-trust-grid">
            <div className="user-review-trust-item">
              <div className="user-review-trust-icon-wrapper">
                <Award className="user-review-trust-icon" />
              </div>
              <h3 className="user-review-trust-title">Qualidade Garantida</h3>
              <p className="user-review-trust-description">Produtos premium</p>
            </div>
            
            <div className="user-review-trust-item">
              <div className="user-review-trust-icon-wrapper">
                <Users className="user-review-trust-icon" />
              </div>
              <h3 className="user-review-trust-title">Profissionais Experientes</h3>
              <p className="user-review-trust-description">Anos de experiência</p>
            </div>
            
            <div className="user-review-trust-item">
              <div className="user-review-trust-icon-wrapper">
                <ThumbsUp className="user-review-trust-icon" />
              </div>
              <h3 className="user-review-trust-title">Satisfação Garantida</h3>
              <p className="user-review-trust-description">89% recomendam</p>
            </div>
            
            <div className="user-review-trust-item">
              <div className="user-review-trust-icon-wrapper">
                <Star className="user-review-trust-icon" />
              </div>
              <h3 className="user-review-trust-title">Avaliação 4.8/5</h3>
              <p className="user-review-trust-description">Média excelente</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default UserReview;


