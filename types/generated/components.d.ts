import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogArticleHeadline extends Schema.Component {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'headline';
    description: '';
  };
  attributes: {
    Headline: Attribute.String & Attribute.Required;
    TextWhite: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlogArticleLandscapeImage extends Schema.Component {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'LandscapeImage';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface BlogArticleParagraphImage extends Schema.Component {
  collectionName: 'components_blog_article_paragraph_images';
  info: {
    displayName: 'ParagraphImage';
    description: '';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    LandScapeImage: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    showImageRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface BlogArticleParagraph extends Schema.Component {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['terquish', 'orange']>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.paragraph-image': BlogArticleParagraphImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'info-block.button': InfoBlockButton;
    }
  }
}
