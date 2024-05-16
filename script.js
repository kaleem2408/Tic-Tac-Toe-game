let currentPlayer = 'X';
        let board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        function placeMarker(row, col) {
            if (board[row][col] === '') {
                board[row][col] = currentPlayer;
                document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
                renderBoard();
                if (checkWin()) {
                    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
                    disableBoard();
                } else if (checkDraw()) {
                    document.getElementById('status').textContent = "It's a draw!";
                    disableBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function renderBoard() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                cell.textContent = board[row][col];
            });
        }

        function checkWin() {
            return (
                checkRow(0) || checkRow(1) || checkRow(2) ||
                checkColumn(0) || checkColumn(1) || checkColumn(2) ||
                checkDiagonal() || checkAntiDiagonal()
            );
        }

        function checkRow(row) {
            return (board[row][0] === board[row][1] && board[row][1] === board[row][2] && board[row][0] !== '');
        }

        function checkColumn(col) {
            return (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== '');
        }

        function checkDiagonal() {
            return (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '');
        }

        function checkAntiDiagonal() {
            return (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '');
        }

        function checkDraw() {
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (board[row][col] === '') {
                        return false;
                    }
                }
            }
            return true;
        }

        function disableBoard() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.onclick = null;
            });
        }