# Baixa a imagem do nginx e usa a configuração criada no nginx.conf
FROM nginx:1.15.0 

# Remove a configuração padrão que vem baixada da imagem
RUN rm /etc/nginx/conf.d/default.conf

# Vai pegar a configuração que foi criada aqui e colocar no lugar da configuração padrão
COPY nginx.conf /etc/nginx/conf.d

# Por enquanto essa configuração só faz o servidor funcionar, mas não está servindo a nada


