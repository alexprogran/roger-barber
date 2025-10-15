import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Award, ThumbsUp } from "lucide-react";
import "./UserReview.css";

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Carlos Silva",
      rating: 5,
      date: "15 de Janeiro, 2024",
      service: "Corte + Barba",
      comment: "Excelente atendimento! O barbeiro foi muito profissional e o resultado ficou perfeito. Ambiente aconchegante e música boa. Recomendo!",
      verified: true
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      date: "12 de Janeiro, 2024",
      service: "Corte Masculino",
      comment: "Primeira vez aqui e já me tornei cliente fiel. Qualidade excepcional e preço justo. O ambiente é incrível!",
      verified: true
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      rating: 4,
      date: "10 de Janeiro, 2024",
      service: "Barba Completa",
      comment: "Muito bom! O barbeiro entendeu exatamente o que eu queria. Só não dei 5 estrelas porque demorou um pouco mais que o esperado.",
      verified: true
    },
    {
      id: 4,
      name: "Rafael Costa",
      rating: 5,
      date: "8 de Janeiro, 2024",
      service: "Pacote Premium",
      comment: "Experiência completa! Desde o atendimento até o resultado final, tudo perfeito. Vale cada centavo investido.",
      verified: true
    },
    {
      id: 5,
      name: "Lucas Ferreira",
      rating: 5,
      date: "5 de Janeiro, 2024",
      service: "Corte + Barba",
      comment: "Melhor barbearia da região! Profissionais qualificados, produtos de qualidade e ambiente único. Super recomendo!",
      verified: true
    },
    {
      id: 6,
      name: "Marcos Alves",
      rating: 4,
      date: "3 de Janeiro, 2024",
      service: "Tratamento Capilar",
      comment: "Atendimento diferenciado! O tratamento capilar foi excelente e me deixou com o cabelo muito mais saudável.",
      verified: true
    }
  ];

  const stats = {
    totalReviews: 247,
    averageRating: 4.8,
    fiveStars: 89,
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
            
            <p className="user-review-hero-description">
              Mais de {stats.totalReviews} clientes já confiaram em nossos serviços. 
              Veja o que eles têm a dizer sobre a experiência na nossa barbearia.
            </p>

            {/* Rating Stats */}
            <div className="user-review-stats">
              <div className="user-review-stat">
                <div className="user-review-stat-value-wrapper">
                  <Star className="user-review-stat-icon-accent" />
                  <span className="user-review-stat-value">{stats.averageRating}</span>
                </div>
                <p className="user-review-stat-label">Média de Avaliações</p>
              </div>
              
              <div className="user-review-stat">
                <div className="user-review-stat-value-wrapper">
                  <Users className="user-review-stat-icon-primary" />
                  <span className="user-review-stat-value">{stats.totalReviews}</span>
                </div>
                <p className="user-review-stat-label">Clientes Avaliaram</p>
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

      {/* Reviews Grid */}
      <section className="user-review-grid-section">
        <div className="user-review-container">
          <div className="user-review-grid">
            {reviews.map((review) => (
              <Card key={review.id} className="user-review-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="user-review-breakdown-section">
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
      </section>

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
            <Button 
              size="lg" 
              variant="secondary"
              className="user-review-cta-button-primary btn-barbershop"
            >
              <Star className="user-review-button-icon" />
              Agendar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="user-review-cta-button-outline"
            >
              <Quote className="user-review-button-icon" />
              Deixar Avaliação
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="user-review-trust-section">
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
      </section>
    </div>
  );
};

export default UserReview;


