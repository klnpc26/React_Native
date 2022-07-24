// Cria o tabuleiro. Seria esse formato, por exemplo: ( [[field], [field], [field]] )
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                explosed: false,
                nearMines: 0
            }
        })
    })
}

// Espaplha as minas
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    var minesPlanted = 0;

    while(minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10);
        const columnSel = parseInt(Math.random() * columns, 10);

        if(!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
}

// Cria um tabuleiro já com as minas plantadas
const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        });
    });
}

// Pega os vizinhos
const getNeighbors = (board, row, column) => {
    const neighbors = [];
    const rows = [row -1, row, row + 1]; // Linhas possiveis
    const columns = [column -1, column, column + 1]; // colunas possiveis

    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column; // Verifica se a linha e a coluna percorrida é diferente da linha e coluna passada
            const validRow = r >= 0 && r < board.length; // Verifica se a linha é maior que o indice 0 e se ela é menor que o tamanho do tabuleiro
            const Validcolumn = c >= 0 && c < board[0].length; // Verifica se a coluna é maior que o indice 0 e a coluna não pode ser maior ou igual a quantidade de colunas da primeira linha

            // Se a condição for verdadeira, significa que eu posso adicionar os vizinhos a lista
            if(different && validRow && Validcolumn) {
                neighbors.push(board[r][c])
            }
        });
    });

    return neighbors
}

// Verifica se a vizinhança é segura
const safeNeighboarhood = (board, row, column) => {
    /* 
        Calcula se determina vizinhança é segura ou não 
        result = totalizador (Variavel inicial)
        neighbor = vizinho atual
    */
    const safes = (result, neighbor) => result && !neighbor.mined; // Verifica se não contém campos minados

    return getNeighbors(board, row, column).reduce(safes, true); // Pega os vizinhos e reduz o resultado através do reduce para verificarmos se a área é segura
}

// Função responsável em abrir um campo no momento que você der um click
const openField = (board, row, column) => {
    const field = board[row][column]; // Pega o campo atual

    // Verifica se o campo já esta aberto
    if(!field.opened) {
        field.opened = true; // Atribui ele como aberto

        // Verifica se o campo esta minado
        if(field.mined) {
            field.explosed = true; // Atribui a explosão ao campo
        } 
        else if (safeNeighboarhood(board, row, column)) { // Verifica se a vizinhança é segura, ou seja, não contém nenhum campo minado por perto
            getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column)) // Irá abrir os vizinhos também
        }
        else { // Calculo quantas as minas eu tenho ao redor
            const neighbors = getNeighbors(board, row, column); // Pego os vizinhos
            field.nearMines = neighbors.filter(n => n.mined).length; // E através dos vizinhos, verifica quantos estão minados
        }
    }
}

// Percorre todos os campos
const fields = board => {
    return [].concat(...board)
}

// Verifica todos os campos explodidos
const hadExplosion = board => {
    return fields(board).filter(field => field.explosed).length > 0
}

// Verifica se o campo esta pendente, ou seja, com essa informação descobrimos se o usuário ganhou ou não o jogo
const pendding = field => {
    return (field.mined && !field.flagged) || (!field.mined && !field.opened)
}

// Verifica se o usuário ganhou o jogo
const wonGame = board => {
    return fields(board).filter(pendding).length === 0
}

// Montra as minas no tabuleiro
const showMines = board => {
    return fields(board).filter(field => field.mined)
        .forEach(f => f.opened = true);
}

// Se tiver marcado com a bandeira ou se estiver desmarcado ele marca
const invertFlag = (board, row, column) => {
    const field = board[row][column];

    return field.flagged = !field.flagged;
}

// Quantas Flags foram marcadas dentro do tabuleiro
const flagUsed = board => {

    return fields(board).filter(field => field.flagged).length
}

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagUsed
 }
