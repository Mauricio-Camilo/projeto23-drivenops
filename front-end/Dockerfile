# Esse arquivo vai montar a imagem do build do react
FROM node:16

# Pasta a ser acessada pela imagem
WORKDIR /app

# Copia o conteúdo desse front-end para essa pasta /app
COPY . .

# Depois que copia, vai instalar as dependências
RUN npm i

# Cria o build nessa pasta
RUN npm run build

# Cria a pasta que vai publicar os arquivos no servidor da nginx
RUN mkdir -p /var/www/html
# Move todo o conteúdo da pasta build nessa pasta
RUN mv build/* /var/www/html

#Após mover o conteúdo do build pra pasta certa, apaga tudo o que tem no app para otimização
WORKDIR /
RUN rm -rf /app
