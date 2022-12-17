import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa';
import { promisify } from 'node:util';
import { expressjwt } from 'express-jwt';
import { GqlExecutionContext } from '@nestjs/graphql/dist/services';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  private AUTH0_AUDIENCE: string;
  private AUTH0_DOMAIN: string;

  constructor(private configService: ConfigService) {
    this.AUTH0_AUDIENCE = this.configService.get('AUTH0_AUDIENCE') ?? '';
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN') ?? '';
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // REST
    // const httpContext = context.switchToHttp();
    // const request = httpContext.getRequest();
    // const response = httpContext.getResponse();

    const { request, response } =
      GqlExecutionContext.create(context).getContext();
    const checkJWTR = promisify(
      expressjwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
        }) as GetVerificationKey,
        audience: this.AUTH0_AUDIENCE,
        issuer: this.AUTH0_DOMAIN,
        algorithms: ['RS256'],
      }),
    );

    try {
      await checkJWTR(request, response);

      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
