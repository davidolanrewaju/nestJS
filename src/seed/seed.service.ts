import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Product } from 'src/products/entities/product.entity';
import { Organisation } from 'src/organisations/entities/organisation.entity';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';
import { UserRole } from 'src/users/entities/enums/role.enum';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Organisation)
    private organisationRepository: Repository<Organisation>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductCategory)
    private categoryRepository: Repository<ProductCategory>,
  ) {}

  async seed() {
    //Seed Organisations
    const org1 = this.organisationRepository.create({
      name: 'Org 1',
      email: 'organ1@example.com',
      description: 'Description 1',
      industry: 'Industry 1',
      type: 'Type 1',
      country: 'Country 1',
      state: 'State 1',
      address: 'Address 1',
    });

    const org2 = this.organisationRepository.create({
      name: 'Org 2',
      email: 'organ2@example.com',
      description: 'Description 2',
      industry: 'Industry 2',
      type: 'Type 2',
      country: 'Country 2',
      state: 'State 2',
      address: 'Address 2',
    });
    const org3 = this.organisationRepository.create({
      name: 'Org 3',
      email: 'organ3@example.com',
      description: 'Description 3',
      industry: 'Industry 3',
      type: 'Type 3',
      country: 'Country 3',
      state: 'State 3',
      address: 'Address 3',
    });

    await this.organisationRepository.save([org1, org2, org3]);

    // Seed users
    const user1 = this.userRepository.create({
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'securepassword1',
      role: UserRole.USER,
    });
    const user2 = this.userRepository.create({
      username: 'janedoe',
      email: 'janedoe@example.com',
      password: 'securepassword2',
      role: UserRole.USER,
    });

    await this.userRepository.save([user1, user2]);

    // Seed profiles
    const profile1 = this.profileRepository.create({
      gender: 'male',
      photo: 'http://example.com/avatar.jpg',
    });
    const profile2 = this.profileRepository.create({
      gender: 'female',
      photo: 'http://example.com/avatar2.jpg',
    });

    await this.profileRepository.save([profile1, profile2]);

    user1.profile = profile1;
    user2.profile = profile2;

    await this.userRepository.save([user1, user2]);

    user1.organisations = [org1, org2];
    user2.organisations = [org1, org2, org3];

    // Seed categories
    const category1 = this.categoryRepository.create({ name: 'Category 1' });
    const category2 = this.categoryRepository.create({ name: 'Category 2' });
    await this.categoryRepository.save([category1, category2]);

    // Seed products
    const product1 = this.productRepository.create({
      product_name: 'Product 1',
      description: 'Description 1',
      price: 100,
      user: user1,
      category: category1,
    });
    const product2 = this.productRepository.create({
      product_name: 'Product 2',
      description: 'Description 2',
      price: 200,
      user: user1,
      category: category1,
    });
    const product3 = this.productRepository.create({
      product_name: 'Product 3',
      description: 'Description 3',
      price: 300,
      user: user2,
      category: category2,
    });
    const product4 = this.productRepository.create({
      product_name: 'Product 4',
      description: 'Description 4',
      price: 400,
      user: user2,
      category: category2,
    });

    await this.productRepository.save([product1, product2, product3, product4]);

    await this.userRepository.save([user1, user2]);
  }
}
