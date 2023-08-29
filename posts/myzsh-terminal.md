---
title: 'my zsh terminal configuration'
date: '2023-08-30 00:07:00'
---

this is my zsh terminal configuration.

## required

for linux

```bash
sudo apt-get install make gcc g++ zsh wget vim zsh-autosuggestions zsh-syntax-highlighting && \
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" && \
wget https://github.com/neovim/neovim/releases/latest/download/nvim-linux64.tar.gz && \
mkdir nvim && mv nvim-linux64.tar.gz nvim && cd nvim && tar -xvf nvim-linux64.tar.gz && sudo ln -s ~/nvim/nvim-linux64/bin/nvim /usr/local/bin/nvim && \
cd ../ && \
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions && \
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting && \
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting && \
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git $ZSH_CUSTOM/plugins/zsh-autocomplete && \
echo "alias vim='nvim'" >> .zprofile && source .zprofile
```

for macos

```bash
brew install zsh-autosuggestions zsh-syntax-highlighting && \
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)" && \
wget https://github.com/neovim/neovim/releases/download/stable/nvim-macos.tar.gz && \
mkdir nvim && mv nvim-macos.tar.gz nvim && cd nvim && tar -xvf nvim-macos.tar.gz && sudo ln -s ~/nvim/nvim-macos/bin/nvim /usr/local/bin/nvim && \
cd ../ && \
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions && \
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting && \
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting && \
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git $ZSH_CUSTOM/plugins/zsh-autocomplete && \
echo "alias vim='nvim'" >> .zshenv && source .zshenv
```

Enable plugins by adding them to .zshrc.
 
Open .zshrc

nvim ~/.zshrc

Find the line which says plugins=(git).

Replace that line with plugins=(git zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting zsh-autocomplete)

how to change shell to zsh `chsh -s /usr/bin/zsh` by default after install oh-my-zsh you will be asked about default shell

download this font in your terminal: https://www.nerdfonts.com/font-downloads choose jetbrains mono or ubuntu mono

to install in macos just copy .ttf files `cp -vf *.ttf ~/Library/Fonts`


## optional lazyvim

install nodejs

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash && \
echo "export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion" >> .zprofile && \
source .zprofile && \
nvm install --lts
```

install lazyvim
```bash
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}

git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
nvim
```

edit colorscheme .config/nvim/lua/plugins/colorscheme.lua

```lua
return {
  -- add gruvbox
  { "ellisonleao/gruvbox.nvim" },
  {
    "folke/tokyonight.nvim",
    lazy = true,
    opts = { style = "moon" },
  },

  -- Configure LazyVim to load gruvbox
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "tokyonight-moon",
    },
  }
}
```

untuk install lsp tinggal menggunakan comand `:Mason` dan `:MasonInstall <package>`
untuk intelephense license key buat file `YOUR_HOME_DIR/intelephense/licence.txt` lalu restart nvim

tambahkan `~/.config/nvim/lua/plugins/codeium.lua`, setelah install `:Codeium Auth` ikut petunjuk yg ada
untuk accept suggestion ctrl+g

```lua
return {
  {
    "Exafunction/codeium.vim",
    event = "BufEnter",
  },
}
```

tambahkan ` ~/.config/nvim/lua/plugins/vimcommenter.lua`, cara melakukan comment/uncomment normal mode `gcc`

```lua
return {
  {
    "tpope/vim-commentary",
  },
}
```

edit `~/.config/nvim/lua/config/keymaps.lua`

```lua
vim.keymap.set("i", "<C-g>", function()
  return vim.fn["codeium#Accept"]()
end, { expr = true })

vim.keymap.set("i", "<c-;>", function()
  return vim.fn["codeium#CycleCompletions"](1)
end, { expr = true })

vim.keymap.set("i", "<c-,>", function()
  return vim.fn["codeium#CycleCompletions"](-1)
end, { expr = true })

vim.keymap.set("i", "<c-x>", function()
  return vim.fn["codeium#Clear"]()
end, { expr = true })

-- Maintain cursor position
vim.keymap.set("n", "gcap", "my<cmd>norm vip<bar>gc<cr>`y")
```

edit file `~/.config/nvim/lua/config/options.lua`

```lua
vim.g.codeium_no_map_tab = 1
```

keymap yg sering dipakai di lazyvim

```
- space + space -> find file
- space + ` -> switch between last buffer
- shift + h or l` -> switch between buffer
- space + , -> select buffer
- space + b + d -> delete current buffer
- space + e -> toggle sidebar
- shift + > or < -> indent code sebelumnya mesti visual block dlu
- gcc -> comment bisa dengan visual block
```

secara default auto format ketika file di save

install lazygit

```bash
# on mac
brew install jesseduffield/lazygit/lazygit
# on ubuntu
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin
```

## optional jess terminal

```bash
apt-get install tmux lua lua-check
git clone git@github.com:jhonoryza/dotfiles.git
cd dotfiles
./install

vim .
:PackerInstall
git clone https://github.com/jessarcher/zsh-artisan.git ~/.oh-my-zsh/custom/plugins/artisan

npm install -g @tailwindcss/language-server
npm install -g intelephense
export PATH="/home/ubuntu/.npm-global/bin"

wget https://github.com/LuaLS/lua-language-server/releases/download/3.6.24/lua-language-server-3.6.24-linux-x64.tar.gz
# move to /opt/lua-language-server
```
