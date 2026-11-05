#!/bin/sh
# Comprime imagens de media/ (macOS, usa sips): largura máxima 1600px e JPEG com qualidade 72.
# Uso: sh scripts/otimizar-imagens.sh            # todas as imagens de media/
#      sh scripts/otimizar-imagens.sh a.jpg ...  # só as indicadas
# Guarde o original fora do repositório antes: o arquivo é sobrescrito.
MAX=1600; QUAL=72; LIMITE=512000
cd "$(dirname "$0")/.." || exit 1
if [ $# -gt 0 ]; then arquivos="$*"; else arquivos=$(ls media/*.jpg media/*.jpeg media/*.JPG media/*.png 2>/dev/null); fi
for f in $arquivos; do
  [ -f "$f" ] || continue
  antes=$(wc -c < "$f"); larg=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
  if [ "$antes" -le "$LIMITE" ] && [ "$larg" -le "$MAX" ]; then echo "ok (já leve): $f"; continue; fi
  case "$f" in
    *.png) sips -Z $MAX "$f" >/dev/null ;;
    *) sips -Z $MAX -s format jpeg -s formatOptions $QUAL "$f" --out "$f" >/dev/null ;;
  esac
  depois=$(wc -c < "$f"); echo "$f: $((antes/1024)) KB -> $((depois/1024)) KB"
done
