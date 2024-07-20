import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { OrganisationsModule } from './organisations/organisations.module';
import { ProductsModule } from './products/products.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { SeedService } from './seed/seed.service';
import { TypeOrmModule } from './datasource/typeorm.module';
import { SubscriptionPlansModule } from './subscription_plans/subscription_plans.module';
import { FeaturesModule } from './features/features.module';
import { SmsModule } from './sms/sms.module';
import { JobListingModule } from './job_listing/job_listing.module';
import { RegionsModule } from './regions/regions.module';
import { InviteModule } from './invite/invite.module';
import { ReviewsModule } from './reviews/reviews.module';
import { AboutUsModule } from './about_us/about_us.module';
import { CustomSectionsModule } from './custom_sections/custom_sections.module';
import { AboutPageStatsModule } from './about_page_stats/about_page_stats.module';
import { AboutUsServicesModule } from './about_us_services/about_us_services.module';

@Module({
  imports: [
    TypeOrmModule,
    UsersModule,
    ProfilesModule,
    OrganisationsModule,
    ProductsModule,
    ProductCategoryModule,
    SubscriptionPlansModule,
    FeaturesModule,
    SmsModule,
    JobListingModule,
    RegionsModule,
    InviteModule,
    ReviewsModule,
    AboutUsModule,
    CustomSectionsModule,
    AboutPageStatsModule,
    AboutUsServicesModule,
  ],
  controllers: [],
  providers: [SeedService],
})
export class AppModule {}
