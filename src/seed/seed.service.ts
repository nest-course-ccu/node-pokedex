import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonResponse } from './interfaces/pokemon-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    const data = await this.http.get<PokemonResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=1000`,
    );

    await this.pokemonModel.remove({});

    await Promise.all(
      data.results
        .map(({ name, url }) => {
          const segments = url.split('/');
          const no = +segments[segments.length - 2];
          return { name, no };
        })
        .map(async (data) => {
          const pokemonDB = await this.pokemonModel.create(data);
          return pokemonDB;
        }),
    );
    // o usar insertMany
    return { message: 'Complete' };
  }
}
